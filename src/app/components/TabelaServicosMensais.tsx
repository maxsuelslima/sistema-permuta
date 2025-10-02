import { ServicoMensal } from '@/app/utils';
import { FC, useState } from 'react';
import { Dispensa, Permutas, Servico } from './Escala';
import { efetivo, guarnicoes } from '@/app/constans';
import { stat } from 'fs';

const colors = {
    ordinary: '#6fd137',
    permuta: '#2b5491',
    folga: '#d3d3d3',
    dispensa: '#652319',
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
    const [isPermutaComEscalaIdealBloqueada, setIsPermutaComEscalaIdealBloqueada] =
        useState(true);
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
                            Nome
                        </th>
                        {diasNoMes.map(({ dia, diaSemana }) => (
                            <th
                                key={dia}
                                style={{
                                    border: '1px solid black',
                                    padding: '2px 1px',
                                    textAlign: 'center',
                                    backgroundColor: '#f2f2f2',
                                    width: 'fit-content',
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
                        const diasComServico = aplicarPermutas({
                            servicos,
                            permutas,
                            matricula: militar,
                        });
                        const diasComServicoMilitarSelecionadoParaPermuta =
                            aplicarPermutas({
                                servicos:
                                    servicosMensais.servicos[
                                        permutaAtiva.matricula
                                    ] || [],
                                permutas,
                                matricula: permutaAtiva.matricula,
                            }).map((dia) => dia.dia);
                        const militaresComEscalaIdeal = Object.entries(servicosMensais.servicos).filter(([matricula, dias]) => {
                            const todosOsDiasComServicoDoMilitar = aplicarPermutas({
                                servicos: dias,
                                permutas,
                                matricula,
                            }).filter(d => {
                                // remove dispensas
                                return !(dispensas.find(dis => dis.matricula === matricula && dis.dia === Number(d.dia)));
                            }).map(d => d.dia);
                            const diasQueFazemParteDeTresDiasConsecutivos = checaSeFazParteDeSequenciaDeDias(todosOsDiasComServicoDoMilitar);
                            const sequenciasDeQuatroOuMais = checaSequenciaQuatroOuMais(todosOsDiasComServicoDoMilitar.filter(d => {
                                return !(dispensas.find(dis => dis.matricula === matricula && dis.dia === Number(d)));
                            }).map(d => d));
                            const isTodoDiasFazParteDeTresDiasConsecutivos = todosOsDiasComServicoDoMilitar.every(d => diasQueFazemParteDeTresDiasConsecutivos.includes(d));
                            return isTodoDiasFazParteDeTresDiasConsecutivos && sequenciasDeQuatroOuMais.length === 0;
                        }).map(([matricula]) => matricula);
                        const statusLinha = militaresComEscalaIdeal.includes(
                            militar
                        )
                            ? 'ideal'
                            : permutaAtiva.matricula === militar
                            ? 'selecionado'
                            : 'normal';
                        
                        return (
                            <LinhaTabela
                                key={militar}
                                militarId={militar}
                                isEditingPermuta={isEditingPermuta}
                                diasComServico={diasComServico}
                                handlePermuta={handlePermuta}
                                removerPermuta={removerPermuta}
                                bloqueiaPermuta={isPermutaComEscalaIdealBloqueada && militaresComEscalaIdeal.includes(militar)}
                                dispensas={dispensas}
                                diasServicoMilitarSelecionadoParaPermuta={
                                  servicosMensais.servicos[permutaAtiva.matricula] ? [...diasComServicoMilitarSelecionadoParaPermuta, ...servicosMensais.servicos[permutaAtiva.matricula]] : []
                                }
                                statusLinhas={statusLinha}
                                servicosOriginas={servicos}
                                quantidadeDiasServico={diasNoMes.length}
                                permutaAtiva={permutaAtiva}
                            />
                        );
                    })}
                </tbody>
            </table>
            <div>
                <label style={{ fontSize: '0.8rem' }}>
                    <input
                        type="checkbox"
                        checked={isPermutaComEscalaIdealBloqueada}
                        onChange={() =>
                            setIsPermutaComEscalaIdealBloqueada((prev) => !prev)
                        }
                    />
                    {'  '}
                    Bloquear permutas que resultem em escala ideal
                    (sem 4 dias consecutivos e todos os dias de serviço
                    fazendo parte de uma sequência de 3 dias consecutivos)
                </label>
            </div>
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
    dispensas?: Array<Servico>;
    diasServicoMilitarSelecionadoParaPermuta?: Array<string>;
    quantidadeDiasServico: number;
    isEditingPermuta: boolean;
    permutaAtiva?: { dia: number; matricula: string };
    servicosOriginas?: Array<string>;
    statusLinhas?: 'normal' | 'selecionado' | 'invalido' | 'ideal';
    bloqueiaPermuta?: boolean;
    handlePermuta: (args: { diaIndex: number; matricula: string }) => void;
    removerPermuta: (id: string) => void;
}> = ({
    militarId,
    quantidadeDiasServico,
    permutaAtiva,
    isEditingPermuta,
    diasComServico,
    diasServicoMilitarSelecionadoParaPermuta = [],
    dispensas,
    bloqueiaPermuta = false,
    statusLinhas = 'normal',
    handlePermuta,
    removerPermuta,
}) => {
    return (
        <tr style={{
            backgroundColor: statusLinhas === 'ideal' ? '#808080cf' : statusLinhas === 'selecionado' ? '#cce5ff' : 'transparent',
            opacity: statusLinhas === 'ideal' ? 0.8 : 1,
            transition: 'background-color 0.3s, opacity 0.3s',
            pointerEvents: 'none'
        }}>
            <td
                style={{
                    border: '1px solid black',
                    padding: '2px 1px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    backgroundColor: efetivo[militarId].isAdventist
                        ? '#d1e7dd'
                        : '#f8d7da',
                    fontSize: '0.5rem',
                    height: '20px',
                }}
            >
                {efetivo[militarId].name}
            </td>
            {new Array(quantidadeDiasServico).fill(null).map((_, diaIndex) => {
              const isDispensa = (dispensas ?? []).find(d => d.matricula === militarId && d.dia === diaIndex + 1)
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
                        )?.servico === 'ordinary') ||
                    diasServicoMilitarSelecionadoParaPermuta.includes(
                        String(diaIndex + 1)
                    ) || isDispensa || diasComServico.find(
                      (servico) => servico.dia === String(permutaAtiva?.dia)
                  ) !== undefined;
                    
                const isSelectedForPermuta =
                    isEditingPermuta &&
                    permutaAtiva?.dia === diaIndex + 1 &&
                    permutaAtiva?.matricula === militarId;
                const todosOsDiasComServicoDoMilitar = diasComServico.map(d => d.dia)
                const diasQueFazemParteDeTresDiasConsecutivos = checaSeFazParteDeSequenciaDeDias(todosOsDiasComServicoDoMilitar)
                const fazParteDeTresDiasConsecutivos = diasQueFazemParteDeTresDiasConsecutivos.includes(String(diaIndex + 1))
                const sequenciasDeQuatroOuMais = checaSequenciaQuatroOuMais(todosOsDiasComServicoDoMilitar.filter(d => {
                  // remove dispensas
                  return !(dispensas?.find(dis => dis.matricula === militarId && dis.dia === Number(d)));
              }).map(d => d));
                const fazParteDeQuatroOuMaisDiasConsecutivos = sequenciasDeQuatroOuMais.includes(String(diaIndex + 1))
                return (
                    <td
                        key={diaIndex}
                        style={{
                            border: `${fazParteDeTresDiasConsecutivos ? '2px' : '1px'} solid ${fazParteDeQuatroOuMaisDiasConsecutivos ? '#ff0000' : fazParteDeTresDiasConsecutivos ? '#ffa500' : 'black'}`,
                            padding: '2px 1px',
                            textAlign: 'center',
                            backgroundColor: isDispensa ? colors.dispensa : isSelectedForPermuta ? '#FFF0B3' : colors[statusDia],
                            opacity: isDisabledClick  ? 0.6 : 1,
                            cursor: isDisabledClick
                                ? 'not-allowed'
                                : statusDia === 'permuta'
                                  ? 'crosshair'
                                  : bloqueiaPermuta ? 'not-allowed' : 'pointer',
                            fontSize: '0.5rem',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s, opacity 0.3s',
                            width: 'fit-content'
                        }}
                        onClick={() => {
                            if(isDispensa || bloqueiaPermuta) {
                              return;
                            }
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
                            ? isDispensa ? 'DISP' : 'O'
                            : ''}
                    </td>
                );
            })}
        </tr>
    );
};
/** 
 * Função que checa quais dias fazem parte de 3 dias consecutivos de serviço ou
 * 2 dias de serviço + 1 folga + 2 dias de serviço ou
 * 3 dias de serviço + 1 folga + 1 dia de serviço
 * @param diasComServico Array de dias com serviço (ordinary ou permuta)
 * @returns Array de dias que fazem parte de 3 dias consecutivos de serviço ou
 * 2 dias de serviço + 1 folga + 2 dias de serviço ou
 * 3 dias de serviço + 1 folga + 1 dia de serviço
 * acusa a maior sequência que o dia faz parte
 */
export function checaSeFazParteDeSequenciaDeDias(diasComServico: Array<string>): Array<string> {
  const nums = diasComServico
    .map(d => Number(d))
    .filter(n => Number.isFinite(n));
  const uniqueSorted = Array.from(new Set(nums)).sort((a, b) => a - b);

  const n = uniqueSorted.length;
  const found = new Set<string>();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) { // j-i+1 é tamanho da janela >= 2 agora
      const window = uniqueSorted.slice(i, j + 1);
      const gaps = window.slice(1).map((v, idx) => v - window[idx]);

      // sequência válida se:
      // - não houver gaps > 2 (ou seja, diferenças maiores que 2 excluem a janela)
      // - e houver no máximo um gap == 2 (permite [T,F,T])
      const numGaps2 = gaps.filter(g => g === 2).length;
      const numGapsInvalid = gaps.filter(g => g > 2).length;

      if (numGapsInvalid === 0 && numGaps2 <= 1) {
        found.add(window.join(","));
      }
    }
  }

  return Array.from(found).flatMap(s => s.split(","));
}
export function aplicarPermutas(ars: {
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
        .map(d => (typeof d === "string" ? d.trim() : d))
        .map(d => Number(d))
        .filter(n => Number.isFinite(n))
    )
  ).sort((a,b) => a - b);

  const resultados: string[] = [];
  if (nums.length < 4) return resultados;

  let run: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const prev = nums[i - 1];
    if (cur - prev === 1) {
      run.push(cur);
    } else {
      if (run.length >= 4) resultados.push(run.join(","));
      run = [cur];
    }
  }
  if (run.length >= 4) resultados.push(run.join(","));

  return resultados.map(r => r.split(",")).flat(); // retorna array de dias que fazem parte de sequências de 4 ou mais
}


export { TabelaServicosMensais };
