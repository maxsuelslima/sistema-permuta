import { FC } from 'react';
import { efetivo, listaMotoristas, PJES, pjes } from '@/app/constans';
import LinhaTabela from './LinhaTabela';
import { Servico } from '@/app/types/Servico';
import { Permuta } from '@/app/types/Permuta';

function gerarCalendarioDiasNoMes(
    ano: number,
    mes: number
): Array<{ dia: string; diaSemana: string }> {
    const diasNoMes: Array<{ dia: string; diaSemana: string }> = [];
    const totalDias = new Date(ano, mes, 0).getDate();
    for (let dia = 1; dia <= totalDias; dia++) {
        const data = new Date(ano, mes - 1, dia);
        const diaSemana = data.toLocaleDateString('pt-BR', {
            weekday: 'short',
        });
        diasNoMes.push({ dia: String(dia), diaSemana });
    }
    return diasNoMes;
}

const TabelaServicosMensais: FC<{
    mes: string;
    ano: string;
    servicosPorMatricula: { [matricula: string]: Array<Servico> };
    onlyView?: boolean;
    permutas?: Array<Permuta>;
    servicoSelecionadoParaPermuta?: Servico;
    showMesPorExtenso?: boolean;
    diasIndisponiveis?: Array<string>;
    dispensas?: Array<Servico>;
    pjes?: Array<PJES>;
    guarnicoes: Array<Array<string>>;
    onClickDia?: (args: { dia: string; matricula: string }) => void;
}> = ({
    onClickDia,
    ano,
    mes,
    servicosPorMatricula,
    servicoSelecionadoParaPermuta,
    showMesPorExtenso = false,
    diasIndisponiveis = [],
    permutas = [],
    dispensas = [],
    onlyView = false,
    guarnicoes,
    pjes = [],
}) => {
    const mesPorExtenso = new Date(
        Number(ano),
        Number(mes) - 1,
        1
    ).toLocaleDateString('pt-BR', { month: 'long' });

    const diasNoMes = gerarCalendarioDiasNoMes(Number(ano), Number(mes));

    const fridaysAndSaturdays = diasNoMes.filter(
        ({ diaSemana }) => diaSemana === 'sex.' || diaSemana === 'sáb.'
    );
    const sextaESabadosIndexes = fridaysAndSaturdays.map(({ dia }) => dia);
    const escalaMensal: Record<string, Array<string>> = {};
    Object.entries(servicosPorMatricula).forEach(([matricula, servicos]) => {
        servicos.forEach(({ dia }) => {
            if (!escalaMensal[dia]) {
                escalaMensal[dia] = [];
            }
            escalaMensal[dia].push(matricula);
        });
    });
    const quantidadeDeMilitaresPorDia: Record<
        string,
        {
            militares: number;
            motoristas: number;
            graduados: number;
        }
    > = gerarQuantidadeMilitaresPorDia({
        escalaOrdinaria: escalaMensal,
        permutas,
        pjes,
    });
    console.log({ permutas });
    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    {showMesPorExtenso ? (
                        <tr>
                            <th
                                colSpan={diasNoMes.length + 1}
                                style={{
                                    border: '1px solid black',
                                    padding: '4px',
                                    textAlign: 'center',
                                    backgroundColor: '#d9d9d9',
                                }}
                            >
                                Escala do mês de {mesPorExtenso} de {ano}
                            </th>
                        </tr>
                    ) : null}
                    <tr style={{ fontSize: '0.5rem' }}>
                        <th
                            style={{
                                border: '1px solid black',
                                padding: '2px 1px',
                                textAlign: 'center',
                                backgroundColor: '#f2f2f2',
                                width: '12px',
                            }}
                        >
                            Nome de Guerra
                        </th>
                        {diasNoMes.map(({ diaSemana, dia }, index) => (
                            <th
                                key={index}
                                style={{
                                    border: '1px solid black',
                                    padding: '2px 1px',
                                    textAlign: 'center',
                                    backgroundColor: '#f2f2f2',
                                    width: '12px',
                                }}
                            >
                                {dia} <br /> {diaSemana}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(servicosPorMatricula)
                        .sort()
                        .sort((a, b) => {
                            const indexA = guarnicoes.findIndex((grupo) =>
                                grupo.includes(a)
                            );
                            const indexB = guarnicoes.findIndex((grupo) =>
                                grupo.includes(b)
                            );
                            return indexA - indexB;
                        })
                        .map((matriculaMilitar) => {
                            const permutasDoMilitar =
                                permutas.filter(({ servicos }) =>
                                    servicos.some(
                                        (s) => s.matricula === matriculaMilitar
                                    )
                                ) || [];
                            if (!efetivo[matriculaMilitar]) {
                                console.warn(
                                    `Matrícula ${matriculaMilitar} não encontrada no efetivo`
                                );
                                return null;
                            }
                            return (
                                <LinhaTabela
                                    key={matriculaMilitar}
                                    nomeDeGuerra={
                                        efetivo[matriculaMilitar].name
                                    }
                                    onlyView={onlyView}
                                    matricula={matriculaMilitar}
                                    servicosOrdinarios={
                                        servicosPorMatricula[matriculaMilitar]
                                    }
                                    onClickDia={onClickDia}
                                    quantidadeDiasNoMes={diasNoMes.length}
                                    servicoSelecionadoParaPermuta={
                                        servicoSelecionadoParaPermuta
                                    }
                                    patente={efetivo[matriculaMilitar].patente}
                                    sextaESabadosIndexes={sextaESabadosIndexes}
                                    pjes={pjes}
                                    dispensas={dispensas}
                                    diasBloqueados={diasIndisponiveis}
                                    permutasDoMilitar={permutasDoMilitar}
                                    guarnicoes={guarnicoes}
                                />
                            );
                        })}
                    {Object.keys(quantidadeDeMilitaresPorDia).length > 0 && (
                        <>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        padding: '2px 1px',
                                        textAlign: 'center',
                                        backgroundColor: '#f2f2f2',
                                    }}
                                >
                                    Quantidade de militares escalados por dia
                                </td>
                                {diasNoMes.map(({ dia }, index) => (
                                    <td
                                        key={index}
                                        style={{
                                            border: '1px solid black',
                                            padding: '2px 1px',
                                            textAlign: 'center',
                                            backgroundColor: '#f2f2f2',
                                        }}
                                    >
                                        {quantidadeDeMilitaresPorDia[dia]
                                            .militares || 0}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        padding: '2px 1px',
                                        textAlign: 'center',
                                        backgroundColor: '#f2f2f2',
                                    }}
                                >
                                    Quantidade de motoristas escalados por dia
                                </td>
                                {diasNoMes.map(({ dia }, index) => (
                                    <td
                                        key={index}
                                        style={{
                                            border: '1px solid black',
                                            padding: '2px 1px',
                                            textAlign: 'center',
                                            backgroundColor:
                                                quantidadeDeMilitaresPorDia[dia]
                                                    .motoristas >= 2
                                                    ? '#ccffcc' // verde claro se tiver 2 ou mais motoristas
                                                    : quantidadeDeMilitaresPorDia[
                                                            dia
                                                        ].motoristas >= 1
                                                      ? '#ffffcc' // amarelo claro se tiver 1 motorista
                                                      : '#ffcccc', // vermelho claro se não tiver motoristas
                                        }}
                                    >
                                        {quantidadeDeMilitaresPorDia[dia]
                                            .motoristas || 0}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid black',
                                        padding: '2px 1px',
                                        textAlign: 'center',
                                        backgroundColor: '#f2f2f2',
                                    }}
                                >
                                    Quantidade de graduados escalados por dia
                                </td>
                                {diasNoMes.map(({ dia }, index) => (
                                    <td
                                        key={index}
                                        style={{
                                            border: '1px solid black',
                                            padding: '2px 1px',
                                            textAlign: 'center',
                                            backgroundColor:
                                                quantidadeDeMilitaresPorDia[dia]
                                                    .graduados === 0
                                                    ? '#ffcccc'
                                                    : '#ccffcc',
                                        }}
                                    >
                                        {quantidadeDeMilitaresPorDia[dia]
                                            .graduados || 0}
                                    </td>
                                ))}
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export function checaSeFazParteDeSequenciaDeDias(
    diasComServico: Array<string>
): Array<string> {
    const nums = diasComServico
        .map((d) => Number(d))
        .filter((n) => Number.isFinite(n));
    const uniqueSorted = Array.from(new Set(nums)).sort((a, b) => a - b);

    const n = uniqueSorted.length;
    const found = new Set<string>();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // j-i+1 é tamanho da janela >= 2 agora
            const window = uniqueSorted.slice(i, j + 1);
            const gaps = window.slice(1).map((v, idx) => v - window[idx]);

            // sequência válida se:
            // - não houver gaps > 2 (ou seja, diferenças maiores que 2 excluem a janela)
            // - e houver no máximo um gap == 2 (permite [T,F,T])
            const numGaps2 = gaps.filter((g) => g === 2).length;
            const numGapsInvalid = gaps.filter((g) => g > 2).length;

            if (numGapsInvalid === 0 && numGaps2 <= 1) {
                found.add(window.join(','));
            }
        }
    }

    return Array.from(found).flatMap((s) => s.split(','));
}
export function aplicarPermutas(ars: {
    servicos: Array<string>;
    permutas: Array<Permuta>;
    matricula?: string;
}): Array<{
    dia: string;
    servico: 'ordinario' | 'permuta';
    id?: string;
}> {
    if (!ars.matricula) {
    }
    const { servicos, permutas, matricula } = ars;
    const diasComServico: Array<{
        dia: string;
        servico: 'ordinario' | 'permuta';
        id?: string;
    }> = [];
    servicos.forEach((diaServicoOrdinario) => {
        diasComServico.push({ dia: diaServicoOrdinario, servico: 'ordinario' });
    });
    permutas.forEach(({ id, servicos }) => {
        const [first, second] = servicos;
        if (first.matricula === matricula) {
            const diaParaRemover = first.dia;
            const diaParaAdicionar = second.dia;
            const indexRemover = diasComServico.findIndex(
                (dia) => dia.dia === String(diaParaRemover)
            );
            diasComServico[indexRemover] = {
                dia: String(diaParaAdicionar),
                servico: 'permuta',
                id,
            };
            return;
        }
        if (second.matricula === matricula) {
            const diaParaRemover = second.dia;
            const diaParaAdicionar = first.dia;
            const indexRemover = diasComServico.findIndex(
                (dia) => dia.dia === String(diaParaRemover)
            );
            diasComServico[indexRemover] = {
                dia: String(diaParaAdicionar),
                servico: 'permuta',
                id,
            };
            return;
        }
    });
    return diasComServico;
}
type QuantidadeMilitaresPorDia = Record<
    string,
    { militares: number; motoristas: number; graduados: number }
>;
function gerarQuantidadeMilitaresPorDia({
    escalaOrdinaria,
    permutas,
    pjes,
}: {
    escalaOrdinaria: Record<string, Array<string>>;
    permutas: Array<Permuta>;
    pjes: Array<PJES>;
}): QuantidadeMilitaresPorDia {
    const quantidadeDeMilitaresPorDia: QuantidadeMilitaresPorDia = {};
    const escalaComPermutas: Record<
        string,
        Array<string>
    > = aplicarPermutasNaEscala({
        escalaOrdinaria,
        permutas,
    });
    Object.entries(escalaComPermutas).forEach(([dia, militares]) => {
        if (!quantidadeDeMilitaresPorDia[dia]) {
            quantidadeDeMilitaresPorDia[dia] = {
                militares: 0,
                motoristas: 0,
                graduados: 0,
            };
        }
        quantidadeDeMilitaresPorDia[dia].militares += militares.length;
        militares.forEach((matricula) => {
            const pertenceAoQuadroDeMotoristas = Object.keys(
                listaMotoristas
            ).some((motorista) => motorista === matricula);
            if (pertenceAoQuadroDeMotoristas) {
                quantidadeDeMilitaresPorDia[dia].motoristas += 1;
            }
            if (Number(efetivo[matricula]?.patente) >= 2) {
                quantidadeDeMilitaresPorDia[dia].graduados += 1;
            }
        });
    });
    pjes.forEach(({ matricula: pMatricula, dia, turno }) => {
        const pertenceAoQuadroDeMotoristas = Object.keys(listaMotoristas).some(
            (motorista) => motorista === pMatricula
        );
        const isGraduado = Number(efetivo[pMatricula]?.patente) >= 2;
        const isMeioTurno = turno === 'P1' || turno === 'P2';
        if (pertenceAoQuadroDeMotoristas) {
            if (isMeioTurno) {
                quantidadeDeMilitaresPorDia[dia].motoristas += 0.5;
            } else {
                quantidadeDeMilitaresPorDia[dia].motoristas += 1;
            }
        }
        if (isGraduado) {
            if (isMeioTurno) {
                quantidadeDeMilitaresPorDia[dia].graduados += 0.5;
            } else {
                quantidadeDeMilitaresPorDia[dia].graduados += 1;
            }
        }
        if (!isMeioTurno) {
            quantidadeDeMilitaresPorDia[dia].militares += 1;
        } else {
            quantidadeDeMilitaresPorDia[dia].militares += 0.5;
        }
    });
    return quantidadeDeMilitaresPorDia;
}

function aplicarPermutasNaEscala({
    escalaOrdinaria,
    permutas,
}: {
    escalaOrdinaria: Record<string, Array<string>>;
    permutas: Array<Permuta>;
}): Record<string, Array<string>> {
    const escalaComPermutas: Record<string, Array<string>> = {
        ...escalaOrdinaria,
    };
    permutas.forEach(({ servicos }) => {
        const [first, second] = servicos;
        // Remove o serviço original do primeiro militar
        escalaComPermutas[first.dia] = escalaComPermutas[first.dia].filter(
            (matricula) => matricula !== first.matricula
        );
        // Remove o serviço original do segundo militar
        escalaComPermutas[second.dia] = escalaComPermutas[second.dia].filter(
            (matricula) => matricula !== second.matricula
        );
        // Adiciona o serviço permutado para o primeiro militar
        if (!escalaComPermutas[second.dia]) {
            escalaComPermutas[second.dia] = [];
        }
        escalaComPermutas[second.dia].push(first.matricula);
        // Adiciona o serviço permutado para o segundo militar
        if (!escalaComPermutas[first.dia]) {
            escalaComPermutas[first.dia] = [];
        }
        escalaComPermutas[first.dia].push(second.matricula);
    });
    return escalaComPermutas;
}
export { TabelaServicosMensais };
