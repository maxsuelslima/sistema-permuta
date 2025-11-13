import { FC, useState } from 'react';
import { TabelaServicosMensais } from './TabelaServicosMensais';
import ListaPermutas from './ListaPermutas';
import ListaMilitaresDoDia from './ListaMilitaresDoDia';
import ListaDeServicosPorMilitar from './ListaDeServicosPorMilitar';
import { gerarEscalaMensalOrdinaria } from '../utils';
import { Servico } from '../types/Servico';
import { Permuta } from '../types/Permuta';
import {
    dispensas,
    efetivo,
    guarnicoes,
    permutasCadastradas,
} from '../constans';

const Escala: FC<{
    onlyView?: boolean;
}> = ({ onlyView }) => {
    const [mes, setMes] = useState(String(new Date().getMonth() + 1));
    const [ano, setAno] = useState(String(new Date().getFullYear()));
    const permutasMesSelecionado = permutasCadastradas[ano]?.[mes] ?? [];
    const dispensasMesSelecionado = dispensas[ano]?.[mes] ?? [];
    const [ativarFiltroDia15, setAtivarFiltroDia15] = useState(true);
    const [militaresDaMesmaGuarnicao, setMilitaresDaMesmaGuarnicao] = useState<
        [string, string]
    >(['', '']);
    const [permutasSalvas, setPermutasSalvas] = useState<
        Array<{ id: string; permutas: Array<Permuta> }>
    >([]);
    const [permutas, setPermutas] = useState<Array<Permuta>>(
        permutasMesSelecionado
    );
    const [servicoSelecionadoParaPermuta, setServicoSelecionadoParaPermuta] =
        useState<Servico>({ dia: '', matricula: '' });

    const isEditing =
        servicoSelecionadoParaPermuta.dia !== '' &&
        servicoSelecionadoParaPermuta.matricula !== '';

    const servicosPermutados: Array<Servico> = [];
    permutas.forEach(({ servicos }) => {
        const [servico1, servico2] = servicos;
        servicosPermutados.push(servico1, servico2);
    });
    const servicosOrdinariosPorMatricula: {
        [matricula: string]: Array<Servico>;
    } = {};
    const servicosMensais = gerarEscalaMensalOrdinaria({ mes, ano });

    Object.keys(servicosMensais).forEach((data) => {
        servicosMensais[data].forEach((matricula) => {
            if (!servicosOrdinariosPorMatricula[matricula]) {
                servicosOrdinariosPorMatricula[matricula] = [];
            }
            servicosOrdinariosPorMatricula[matricula].push({
                dia: data,
                matricula,
            });
        });
    });
    const diasIndisponiveis: Array<string> = gerarDiasIndisponiveis({
        permutas,
        servicosOrdinariosMilitarSelecionado:
            servicosOrdinariosPorMatricula[
                servicoSelecionadoParaPermuta.matricula
            ],
        dispensas: dispensasMesSelecionado,
        matricula: servicoSelecionadoParaPermuta.matricula,
    });
    function removerPermuta(id: string) {
        setPermutas((prevPermutas) => {
            localStorage.setItem(
                'permutas',
                JSON.stringify(
                    prevPermutas.filter((permuta) => permuta.id !== id)
                )
            );
            return prevPermutas.filter((permuta) => permuta.id !== id);
        });
    }
    function selecionarServicoParaPermuta(servico: Servico) {
        const servicoExiste = servicosOrdinariosPorMatricula[
            servico.matricula
        ]?.find((s) => s.dia === servico.dia);
        if (!servicoExiste) return alert('Serviço inválido para permuta.');
        setServicoSelecionadoParaPermuta(servico);
    }
    function adicionarPermuta(permuta: Permuta) {
        setPermutas((prevPermutas) => {
            localStorage.setItem(
                'permutas',
                JSON.stringify([...prevPermutas, permuta])
            );
            return [...prevPermutas, permuta];
        });
    }
    function removerSelecaoDeServicoParaPermuta() {
        setServicoSelecionadoParaPermuta({ dia: '', matricula: '' });
    }
    function onClickDia(servico: Servico) {
        if (onlyView) return;
        const jaFoiPermutado = servicosPermutados.find((srv) => {
            return (
                srv.dia === servico.dia && srv.matricula === servico.matricula
            );
        });
        if (jaFoiPermutado && isEditing) {
            removerSelecaoDeServicoParaPermuta();
            return;
        }
        if (jaFoiPermutado && !isEditing) {
            const idDaPermuta = permutas.find((permuta) => {
                return permuta.servicos.some(
                    (srv) =>
                        srv.dia === servico.dia &&
                        srv.matricula === servico.matricula
                );
            })?.id;
            if (idDaPermuta) {
                removerPermuta(idDaPermuta);
                return;
            }
        }
        if (!isEditing) {
            selecionarServicoParaPermuta(servico);
        }
        if (!jaFoiPermutado && isEditing) {
            const isPermutaValida = validarPermuta({
                permutas,
                permuta: {
                    id: String(new Date().getTime()),
                    servicos: [servicoSelecionadoParaPermuta, servico],
                },
                servicosOrdinariosPorMatricula,
                dispensas: [],
            });
            if (isPermutaValida) {
                adicionarPermuta({
                    id: String(new Date().getTime()),
                    servicos: [servicoSelecionadoParaPermuta, servico],
                });
                return removerSelecaoDeServicoParaPermuta();
            }
            alert('Permuta inválida.');
        }
    }
    function salvarPermutas() {
        const permutasSalvas: Array<{
            id: string;
            permutas: Array<Permuta>;
        }> = JSON.parse(localStorage.getItem('permutasSalvas') || '[]');
        const newPermutasSalvas = [
            {
                id: String(new Date().getTime()),
                permutas,
            },
            ...permutasSalvas,
        ];
        localStorage.setItem(
            'permutasSalvas',
            JSON.stringify(newPermutasSalvas)
        );
        setPermutasSalvas(newPermutasSalvas);
    }
    function recuperarPermutasSalvas() {
        const permutasSalvas = localStorage.getItem('permutasSalvas');
        if (permutasSalvas) {
            setPermutasSalvas(JSON.parse(permutasSalvas));
        }
    }
    function permutarEntreMilitaresDaMesmaGuarnicao({
        militares,
    }: {
        militares: [string, string];
    }) {
        const [matriculaA, matriculaB] = militares;
        const permutasTrocadas: Array<Permuta> = permutas.map((permuta) => {
            const [servico1, servico2] = permuta.servicos;
            if (servico1.matricula === matriculaA) {
                return {
                    ...permuta,
                    servicos: [
                        { ...servico1, matricula: matriculaB },
                        servico2,
                    ],
                };
            }
            if (servico2.matricula === matriculaA) {
                return {
                    ...permuta,
                    servicos: [
                        servico1,
                        { ...servico2, matricula: matriculaB },
                    ],
                };
            }
            if (servico1.matricula === matriculaB) {
                return {
                    ...permuta,
                    servicos: [
                        { ...servico1, matricula: matriculaA },
                        servico2,
                    ],
                };
            }
            if (servico2.matricula === matriculaB) {
                return {
                    ...permuta,
                    servicos: [
                        servico1,
                        { ...servico2, matricula: matriculaA },
                    ],
                };
            }
            return permuta;
        });
        setPermutas((prevPermutas) => {
            const novasPermutas: Array<Permuta> = prevPermutas.filter(
                (permuta) => {
                    return !permuta.servicos.some(
                        (s) =>
                            s.matricula === matriculaA ||
                            s.matricula === matriculaB
                    );
                }
            );
            return novasPermutas.concat(permutasTrocadas);
        });
    }
    const permutasFiltradas = permutas.filter((permuta) => {
        if (!ativarFiltroDia15) return true;
        return permuta.servicos.every((servico) => {
            return Number(servico.dia) < 16;
        });
    });
    function resetar() {
        setPermutas(permutasMesSelecionado);
        localStorage.setItem(
            'permutas',
            JSON.stringify(permutasMesSelecionado)
        );
    }
    const guarnicaoSelecionada = guarnicoes.find((guarnicao) => {
        return guarnicao.some(
            (militar) => militar === militaresDaMesmaGuarnicao[0]
        );
    });
    console.log({ permutas });
    return (
        <div>
            <label>Selecione o mês:</label>
            <input
                type="month"
                value={`${ano}-${String(mes).padStart(2, '0')}`}
                style={{
                    display: onlyView ? 'none' : 'inline-block',
                    marginBottom: '16px',
                    marginTop: '16px',
                    marginLeft: '8px',
                }}
                onChange={(e) => {
                    const [anoSelecionado, mesSelecionado] =
                        e.target.value.split('-');
                    setMes(mesSelecionado);
                    setAno(anoSelecionado);
                    setPermutas(
                        permutasCadastradas[anoSelecionado]?.[mesSelecionado] ??
                            []
                    );
                }}
            />
            <TabelaServicosMensais
                mes={mes}
                ano={ano}
                servicosPorMatricula={servicosOrdinariosPorMatricula}
                permutas={permutasFiltradas}
                servicoSelecionadoParaPermuta={servicoSelecionadoParaPermuta}
                onClickDia={onClickDia}
                dispensas={dispensas[ano]?.[mes] || []}
                diasIndisponiveis={diasIndisponiveis}
                onlyView={false}
            />
            <ul
                style={{
                    display: onlyView ? 'none' : 'block',
                }}
            >
                {permutasSalvas.map((permutaSalva) => (
                    <li key={permutaSalva.id}>
                        {permutaSalva.id}{' '}
                        <button
                            onClick={() => {
                                setPermutas(permutaSalva.permutas);
                            }}
                        >
                            Recuperar
                        </button>
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', padding: '8px', gap: '8px' }}>
                <button
                    onClick={resetar}
                    style={{
                        display: onlyView ? 'none' : 'inline-block',
                    }}
                >
                    Resetar Permutas
                </button>
                <button
                    onClick={salvarPermutas}
                    style={{
                        display: onlyView ? 'none' : 'inline-block',
                    }}
                >
                    Salvar Permutas
                </button>
                <button
                    style={{
                        display: onlyView ? 'none' : 'inline-block',
                    }}
                    onClick={recuperarPermutasSalvas}
                >
                    Recuperar Permutas Salvas
                </button>
                <input
                    type="checkbox"
                    checked={ativarFiltroDia15}
                    onChange={(e) => setAtivarFiltroDia15(e.target.checked)}
                />
                <label>Ativar filtro dia 15</label>
            </div>
            <div
                style={{
                    display: onlyView ? 'none' : 'block',
                }}
            >
                <select
                    onChange={(e) => {
                        setMilitaresDaMesmaGuarnicao([e.target.value, '']);
                    }}
                >
                    <option value="">Selecione um militar</option>
                    {Object.values(efetivo).map((militar) => (
                        <option
                            key={militar.matricula}
                            value={militar.matricula}
                        >
                            {militar.name} - {militar.matricula}
                        </option>
                    ))}
                </select>
                <select
                    onChange={(e) => {
                        const segundaMatricula = e.target.value;
                        setMilitaresDaMesmaGuarnicao((prev) => [
                            prev[0],
                            segundaMatricula,
                        ]);
                    }}
                    style={{
                        display:
                            militaresDaMesmaGuarnicao[0] !== ''
                                ? 'inline'
                                : 'none',
                    }}
                >
                    <option value="">Selecione uma matrícula</option>
                    {guarnicaoSelecionada?.map((matricula) => {
                        if (matricula === militaresDaMesmaGuarnicao[0]) {
                            return null;
                        }
                        return (
                            <option key={matricula} value={matricula}>
                                {efetivo[matricula]?.name} - {matricula}
                            </option>
                        );
                    })}
                </select>
                <button
                    onClick={() =>
                        permutarEntreMilitaresDaMesmaGuarnicao({
                            militares: militaresDaMesmaGuarnicao,
                        })
                    }
                >
                    Permutar
                </button>
            </div>
            <ListaPermutas
                permutas={permutasFiltradas}
                removerPermuta={removerPermuta}
                onlyView={onlyView}
            />
            <ListaMilitaresDoDia
                servicosDoMes={servicosMensais}
                permutas={permutasFiltradas}
            />
            <ListaDeServicosPorMilitar
                servicosOrdinariosPorMatricula={servicosOrdinariosPorMatricula}
                permutas={permutasFiltradas}
            />
        </div>
    );
};

type ValidarPermutaParams = {
    permutas: Array<Permuta>;
    permuta: Permuta;
    servicosOrdinariosPorMatricula: {
        [matricula: string]: Array<Servico>;
    };
    dispensas: Array<Servico>;
};
function validarPermuta({
    permutas,
    permuta,
    servicosOrdinariosPorMatricula,
    dispensas,
}: ValidarPermutaParams): boolean {
    const [servicoA, servicoB] = permuta.servicos;
    const servicoFazParteDaEscalaA = servicosOrdinariosPorMatricula[
        servicoA.matricula
    ]?.some((s) => s.dia === servicoA.dia);
    const servicoFazParteDaEscalaB = servicosOrdinariosPorMatricula[
        servicoB.matricula
    ]?.some((s) => s.dia === servicoB.dia);
    if (!servicoFazParteDaEscalaA || !servicoFazParteDaEscalaB) {
        return false;
    }
    const servicoADispensado = dispensas.some(
        (s) => s.dia === servicoA.dia && s.matricula === servicoA.matricula
    );
    const servicoBDispensado = dispensas.some(
        (s) => s.dia === servicoB.dia && s.matricula === servicoB.matricula
    );
    if (servicoADispensado || servicoBDispensado) {
        return false;
    }
    const servicoAJaPermutado = permutas.some((p) =>
        p.servicos.some(
            (s) => s.dia === servicoA.dia && s.matricula === servicoA.matricula
        )
    );

    const servicoBJaPermutado = permutas.some((p) =>
        p.servicos.some(
            (s) => s.dia === servicoB.dia && s.matricula === servicoB.matricula
        )
    );
    if (servicoBJaPermutado || servicoAJaPermutado) {
        return false;
    }
    return true;
}
type GerarDiasIndisponiveisParams = {
    permutas: Array<Permuta>;
    servicosOrdinariosMilitarSelecionado: Array<Servico>;
    dispensas: Array<Servico>;
    matricula: string;
};
export function gerarDiasIndisponiveis({
    permutas,
    servicosOrdinariosMilitarSelecionado,
    dispensas,
    matricula,
}: GerarDiasIndisponiveisParams): Array<string> {
    const diasIndisponiveis: Array<string> = [];
    dispensas.forEach((dispensa) => {
        if (dispensa.matricula === matricula) {
            diasIndisponiveis.push(dispensa.dia);
        }
    });
    const servicosOrdinarios = servicosOrdinariosMilitarSelecionado || [];
    servicosOrdinarios.forEach((servico) => {
        if (servico.matricula === matricula) {
            diasIndisponiveis.push(servico.dia);
        }
    });
    permutas.forEach((permuta) => {
        const [servicoA, servicoB] = permuta.servicos;
        if (servicoA.matricula === matricula) {
            diasIndisponiveis.push(servicoB.dia);
        }
        if (servicoB.matricula === matricula) {
            diasIndisponiveis.push(servicoA.dia);
        }
    });
    console.log({ diasIndisponiveis });
    return diasIndisponiveis;
}

export default Escala;
