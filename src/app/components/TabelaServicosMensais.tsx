import { ServicoMensal } from '@/app/utils';
import { FC } from 'react';
import { Dispensa, Permutas } from './Escala';
import { efetivo, guarnicoes } from '@/app/constans';

const colors = {
    ordinary: '#6fd137',
    permuta: '#2b5491',
    folga: '#d3d3d3',
};

const estiloGuarnicao: {
    [key: number]: {
        name: string;
        color: string;
    };
} = {
    0: {
        name: 'Alpha',
        color: '#ff9999',
    },
    1: {
        name: 'Bravo',
        color: '#99ff99',
    },
    2: {
        name: 'Charlie',
        color: '#9999ff',
    },
    3: {
        name: 'Delta',
        color: '#ffff99',
    },
};

const TabelaServicosMensais: FC<{
    servicosMensais: ServicoMensal;
    permutas: Permutas;
    dispensas: Array<Dispensa>;
    isEditingPermuta: boolean;
    permutaAtiva: { dia: number; matricula: string };
    removerPermuta: (id: string) => void;
    handlePermuta: (args: { diaIndex: number; matricula: string }) => void;
}> = ({
    servicosMensais,
    permutas,
    isEditingPermuta,
    permutaAtiva,
    dispensas,
    handlePermuta,
    removerPermuta,
}) => {
    const diasNoMes: Array<{
        dia: number;
        diaSemana: string;
    }> = [];
    for (
        let dia = 1;
        dia <= new Date(servicosMensais.ano, servicosMensais.mes, 0).getDate();
        dia++
    ) {
        const diaSemana = new Date(
            servicosMensais.ano,
            servicosMensais.mes - 1,
            dia
        ).toLocaleDateString('pt-BR', { weekday: 'short' });
        diasNoMes.push({ dia, diaSemana });
    }

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th
                            style={{
                                border: '1px solid black',
                                padding: '8px',
                                textAlign: 'center',
                                backgroundColor: '#f2f2f2',
                            }}
                        >
                            Nome
                        </th>
                        {diasNoMes.map(({ dia, diaSemana }) => (
                            <th
                                key={dia}
                                style={{
                                    border: '1px solid black',
                                    padding: '8px',
                                    textAlign: 'center',
                                    backgroundColor: '#f2f2f2',
                                    width: '100%',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {dia} - {diaSemana}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(efetivo).map((militar) => {
                        const servicos = servicosMensais.servicos[militar]
                            ? servicosMensais.servicos[militar]
                            : diasNoMes.map(() => '');
                        const diasComServico = aplicarPermmutas({
                            servicos,
                            permutas,
                            matricula: militar,
                        })
                        console.log({ diasComServico })
                        return (
                            <LinhaTabela
                                key={militar}
                                militarId={militar}
                                isEditingPermuta={isEditingPermuta}
                                diasComServico={diasComServico}
                                handlePermuta={handlePermuta}
                                removerPermuta={removerPermuta}
                                quantidadeDiasServico={diasNoMes.length}
                                permutaAtiva={permutaAtiva}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const LinhaTabela: FC<{
    militarId: string;
    diasComServico: Array<{
        dia: string;
        servico: 'ordinary' | 'permuta';
        id?: string;
    }>;
    diasServicoMilitarSelecionadoParaPermuta?: Array<string>;
    quantidadeDiasServico: number;
    isEditingPermuta: boolean;
    permutaAtiva?: { dia: number; matricula: string };
    handlePermuta: (args: { diaIndex: number; matricula: string }) => void;
    removerPermuta: (id: string) => void;
}> = ({
    militarId,
    quantidadeDiasServico,
    permutaAtiva,
    isEditingPermuta,
    diasComServico,
    handlePermuta,
    removerPermuta,
}) => {
    return (
        <tr>
            <td
                style={{
                    border: '1px solid black',
                    padding: '8px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    backgroundColor: efetivo[militarId].isAdventist
                        ? '#d1e7dd'
                        : '#f8d7da',
                    fontSize: '0.7rem',
                }}
            >
                {efetivo[militarId].name}
            </td>
            {new Array(quantidadeDiasServico).fill(null).map((_, diaIndex) => {
                const statusDia =
                    diasComServico.find(
                        (servico) => servico.dia === String(diaIndex + 1)
                    )?.servico || 'folga';
                const isDisabledClick =
                    statusDia === 'folga' ||
                    (isEditingPermuta && statusDia === 'permuta') ||
                    (permutaAtiva?.dia === diaIndex + 1 &&
                        diasComServico.find(
                            (servico) => servico.dia === String(diaIndex + 1)
                        )?.servico === 'ordinary');
                const isSelectedForPermuta =
                    isEditingPermuta &&
                    permutaAtiva?.dia === diaIndex + 1 &&
                    permutaAtiva?.matricula === militarId;
                return (
                    <td
                        key={diaIndex}
                        style={{
                            border: `1px solid ${isSelectedForPermuta ? '#FFA500' : 'black'}`,
                            padding: '8px',
                            textAlign: 'center',
                            backgroundColor: colors[statusDia],
                            opacity: isDisabledClick ? 0.6 : 1,
                            cursor: isDisabledClick
                                ? 'not-allowed'
                                : statusDia === 'permuta'
                                  ? 'crosshair'
                                  : 'pointer',
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s, opacity 0.3s',
                        }}
                        onClick={() => {
                            if (statusDia === 'ordinary' && !isDisabledClick) {
                                handlePermuta({
                                    diaIndex: diaIndex + 1,
                                    matricula: militarId,
                                });
                                return;
                            }
                            if (statusDia === 'permuta' && !isDisabledClick) {
                                removerPermuta(
                                    diasComServico.find(
                                        (servico) =>
                                            servico.dia === String(diaIndex + 1)
                                    )?.id || ''
                                );
                                return;
                            }
                        }}
                    >
                        {diasComServico.find(
                            (servico) => servico.dia === String(diaIndex + 1)
                        )
                            ? 'O'
                            : ''}
                    </td>
                );
            })}
        </tr>
    );
};
function aplicarPermmutas(ars: {
    servicos: Array<string>;
    permutas: Permutas;
    matricula?: string;
}): Array<{
    dia: string;
    servico: 'ordinary' | 'permuta';
    id?: string;
}> {
    const { servicos, permutas, matricula } = ars;
    const diasComServico: Array<{
        dia: string;
        servico: 'ordinary' | 'permuta';
        id?: string;
    }> = [];
    servicos.forEach((diaServicoOrdinario, index) => {
        diasComServico.push({ dia: diaServicoOrdinario, servico: 'ordinary' });
    });
    permutas.forEach(({ id, servicos}) => {
        const [first, second] = servicos;
        if (first.matricula === matricula ) {
            const diaParaRemover = first.dia
            const diaParaAdicionar = second.dia
            const indexRemover = diasComServico.findIndex(dia => dia.dia === String(diaParaRemover))
            diasComServico[indexRemover] = { dia: String(diaParaAdicionar), servico: 'permuta', id }
            return
        }
        if (second.matricula === matricula ) {
            const diaParaRemover = second.dia
            const diaParaAdicionar = first.dia
            const indexRemover = diasComServico.findIndex(dia => dia.dia === String(diaParaRemover))
            diasComServico[indexRemover] = { dia: String(diaParaAdicionar), servico: 'permuta', id }
            return
        }

    });
    return diasComServico
}
export { TabelaServicosMensais };
