import { FC, useState } from 'react';
import { efetivo } from '@/app/constans';
import LinhaTabela from './LinhaTabela';
import { Servico } from '@/app/types/Servico';
import { Permuta } from '@/app/types/Permuta';
import { gerarEscalaMensalOrdinaria } from '@/app/utils';

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
}) => {
    const mesPorExtenso = new Date(
        Number(ano),
        Number(mes) - 1,
        1
    ).toLocaleDateString('pt-BR', { month: 'long' });
    const diasNoMes = gerarCalendarioDiasNoMes(Number(ano), Number(mes));
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
                        .map((matriculaMilitar) => {
                            const permutasDoMilitar =
                                permutas.filter(({ servicos }) =>
                                    servicos.some(
                                        (s) => s.matricula === matriculaMilitar
                                    )
                                ) || [];
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
                                    dispensas={dispensas}
                                    diasBloqueados={diasIndisponiveis}
                                    permutasDoMilitar={permutasDoMilitar}
                                />
                            );
                        })}
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
    servicos.forEach((diaServicoOrdinario, index) => {
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
function checaSequenciaQuatroOuMais(dias: string[]): string[] {
    // parse + filtra não-numéricos + remove duplicados + ordena
    const nums = Array.from(
        new Set(
            dias
                .map((d) => (typeof d === 'string' ? d.trim() : d))
                .map((d) => Number(d))
                .filter((n) => Number.isFinite(n))
        )
    ).sort((a, b) => a - b);

    const resultados: string[] = [];
    if (nums.length < 4) return resultados;

    let run: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        const prev = nums[i - 1];
        if (cur - prev === 1) {
            run.push(cur);
        } else {
            if (run.length >= 4) resultados.push(run.join(','));
            run = [cur];
        }
    }
    if (run.length >= 4) resultados.push(run.join(','));

    return resultados.map((r) => r.split(',')).flat();
}

export { TabelaServicosMensais };
