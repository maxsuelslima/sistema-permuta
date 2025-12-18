import { Permuta } from '@/app/types/Permuta';
import { Servico } from '@/app/types/Servico';
import { CSSProperties, FC, useState } from 'react';
import { gerarDiasIndisponiveis } from '../Escala';
import { efetivo, guarnicoes } from '@/app/constans';

const styles: Record<string, CSSProperties> = {
    ordinario: {
        backgroundColor: '#ccffcc',
        cursor: 'pointer',
        textAlign: 'center',
    },
    permuta: {
        backgroundColor: '#ccccff',
        cursor: 'pointer',
        textAlign: 'center',
    },
    dispensa: {
        backgroundColor: '#ffff99',
        cursor: '',
        textAlign: 'center',
        opacity: 0.7,
        pointerEvents: 'none',
    },
    folga: { backgroundColor: '#f2f2f2', textAlign: 'center' },
    folgaEstranha: {
        backgroundColor: '#ffcccc',
        cursor: 'pointer',
        textAlign: 'center',
    },
    disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
    pjes: {
        backgroundColor: '#171bf6',
        cursor: 'pointer',
        textAlign: 'center',
        color: 'white',
        pointerEvents: 'none',
    },
};
const guarnicaoColors = {
    alfa: '#ff9999',
    bravo: '#99ccff',
    charlie: '#99ff99',
    delta: '#ffcc99',
};
const conteudos = {
    ordinario: 'O',
    permuta: 'O',
    dispensa: 'D',
    folgaEstranha: 'X',
    folga: '',
    pjes: 'P',
};

const LinhaTabela: FC<{
    nomeDeGuerra: string;
    sextaESabadosIndexes?: Array<string>;
    matricula: string;
    onlyView?: boolean;
    servicosOrdinarios: Array<Servico>;
    quantidadeDiasNoMes: number;
    diasBloqueados?: Array<string>;
    servicoSelecionadoParaPermuta?: Servico;
    permutasDoMilitar?: Array<Permuta>;
    dispensas?: Array<Servico>;
    pjes?: Array<Servico>;
    onClickDia?: ({
        dia,
        matricula,
    }: {
        dia: string;
        matricula: string;
    }) => void;
}> = ({
    nomeDeGuerra,
    matricula,
    servicosOrdinarios,
    quantidadeDiasNoMes,
    permutasDoMilitar = [],
    diasBloqueados = [],
    onClickDia = () => {},
    dispensas = [],
    servicoSelecionadoParaPermuta,
    onlyView = false,
    pjes = [],
    sextaESabadosIndexes = [],
}) => {
    const [linhasEstaDesabilitada, setLinhasEstaDesabilitada] = useState(true);
    const celulas: Array<{
        tipo:
            | 'ordinario'
            | 'permuta'
            | 'dispensa'
            | 'folga'
            | 'folgaEstranha'
            | 'pjes';
    }> = [];
    const detalhesPermuta: Array<{
        permutouCom: string;
        diaOriginal: string;
        diaPermutado: string;
    }> = [];
    const isEditingPermuta =
        Boolean(servicoSelecionadoParaPermuta) &&
        servicoSelecionadoParaPermuta?.dia !== '' &&
        servicoSelecionadoParaPermuta?.matricula !== '';
    Array.from({ length: quantidadeDiasNoMes }).forEach(() => {
        celulas.push({ tipo: 'folga' });
    });
    servicosOrdinarios.forEach((servico) => {
        const dia = parseInt(servico.dia, 10);
        celulas[dia - 1] = { tipo: 'ordinario' };
    });
    permutasDoMilitar.forEach((permuta) => {
        const servicoOriginal = permuta.servicos.find(
            (s) => s.matricula === matricula
        );
        const servicoEstranho = permuta.servicos.find(
            (s) => s.matricula !== matricula
        );
        if (servicoOriginal && servicoEstranho) {
            celulas[parseInt(servicoOriginal.dia, 10) - 1].tipo =
                'folgaEstranha';
            celulas[parseInt(servicoEstranho.dia, 10) - 1].tipo = 'permuta';
        }
        detalhesPermuta.push({
            permutouCom: servicoEstranho!.matricula,
            diaOriginal: servicoOriginal!.dia,
            diaPermutado: servicoEstranho!.dia,
        });
    });
    dispensas?.forEach(({ matricula: dMatricula, dia }) => {
        if (dMatricula === matricula) {
            celulas[parseInt(dia, 10) - 1].tipo = 'dispensa';
        }
    });
    pjes?.forEach(({ matricula: pMatricula, dia }) => {
        if (pMatricula === matricula) {
            celulas[parseInt(dia, 10) - 1].tipo = 'pjes';
        }
    });
    const diasIndisponiveis = gerarDiasIndisponiveis({
        permutas: permutasDoMilitar,
        servicosOrdinariosMilitarSelecionado: servicosOrdinarios,
        dispensas: dispensas,
        matricula,
    });
    const disablePermuta = diasIndisponiveis.includes(
        servicoSelecionadoParaPermuta?.dia || ''
    );
    const diasEmServico = servicosOrdinarios.map((s) => s.dia);
    permutasDoMilitar.forEach((permuta) => {
        permuta.servicos.forEach((s) => {
            if (s.matricula === matricula) {
                // adiciona o dia permutado como dia em serviço
                diasEmServico.push(s.dia);
                // remove o dia original dos dias em serviço
                const outroServico = permuta.servicos.find(
                    (os) => os.matricula !== matricula
                );
                if (outroServico) {
                    const index = diasEmServico.indexOf(outroServico.dia);
                    if (index > -1) {
                        diasEmServico.splice(index, 1);
                    }
                }
            }
        });
    });
    const guarnicao = guarnicoes.findIndex((g) =>
        g.some((m) => m === matricula)
    );
    const guarnicaoColor =
        guarnicao >= 0 ? Object.values(guarnicaoColors)[guarnicao] : null;
    const isAdventista = efetivo[matricula]?.isAdventist || false;
    return (
        <tr>
            <td
                style={{
                    border: '1px solid black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4px',
                    backgroundColor: guarnicaoColor || 'transparent',
                }}
            >
                <div>
                    <input
                        type="checkbox"
                        checked={linhasEstaDesabilitada}
                        style={{
                            display: onlyView ? 'none' : 'inline-block',
                        }}
                        onChange={(e) =>
                            setLinhasEstaDesabilitada(e.target.checked)
                        }
                    />
                </div>
                <span
                    style={{
                        color: '#333',
                        fontWeight: 'bold',
                    }}
                >
                    {nomeDeGuerra}
                </span>
                <br />
                <span
                    style={{
                        fontSize: '0.8em',
                        color: '#666',
                    }}
                >
                    {matricula}
                </span>
            </td>
            {celulas.map(({ tipo }, index) => {
                const disabled =
                    (isEditingPermuta && tipo !== 'ordinario') ||
                    diasBloqueados.includes((index + 1).toString()) ||
                    disablePermuta ||
                    linhasEstaDesabilitada;
                const isSelectedDay =
                    servicoSelecionadoParaPermuta?.dia ===
                        (index + 1).toString() &&
                    servicoSelecionadoParaPermuta?.matricula === matricula;
                const isFridayOrSaturday = sextaESabadosIndexes?.includes(
                    (index + 1).toString()
                );
                const showAdventistMarker =
                    isAdventista &&
                    isFridayOrSaturday &&
                    (tipo === 'ordinario' || tipo === 'permuta');
                return (
                    <td
                        key={index}
                        style={{
                            border: `1px solid ${showAdventistMarker ? '#ff6600' : 'black'}`,
                            cursor: disabled ? '' : 'pointer',
                            minWidth: '32px',
                            minHeight: '32px',
                            ...styles[tipo],
                            ...(disabled ? styles.disabled : {}),
                            animation: isSelectedDay
                                ? 'selectedDayAnimation 2s infinite'
                                : disabled
                                  ? 'availableDayAnimation 2s infinite'
                                  : '',
                        }}
                        onClick={() => {
                            if (!disabled && !onlyView) {
                                onClickDia({
                                    dia: (index + 1).toString(),
                                    matricula,
                                });
                            }
                        }}
                    >
                        {conteudos[tipo]}
                    </td>
                );
            })}
            <style jsx>{`
                @keyframes selectedDayAnimation {
                    0% {
                        box-shadow: inset 0 0 5px 2px #ff6600;
                    }
                    25% {
                        box-shadow: inset 0 0 4px 2px #ff6600;
                    }
                    75% {
                        box-shadow: inset 0 0 2px 2px #ff6600;
                    }
                    50% {
                        box-shadow: inset 0 0 4px 2px #ff6600;
                    }
                    100% {
                        box-shadow: inset 0 0 5px 2px #ff6600;
                    }
                }
                @keyframes availableDayAnimation {
                    0% {
                        box-shadow: inset 0 0 5px 2px #33cc33;
                    }
                    25% {
                        box-shadow: inset 0 0 4px 2px #33cc33;
                    }
                    75% {
                        box-shadow: inset 0 0 2px 2px #33cc33;
                    }
                    50% {
                        box-shadow: inset 0 0 4px 2px #33cc33;
                    }
                    100% {
                        box-shadow: inset 0 0 5px 2px #33cc33;
                    }
                }
            `}</style>
        </tr>
    );
};

export default LinhaTabela;
