import { FC, useEffect, useState } from 'react';
import { TabelaServicosMensais } from './TabelaServicosMensais';
import ListaPermutas from './ListaPermutas';
import ListaMilitaresDoDia from './ListaMilitaresDoDia';
import ListaDeServicosPorMilitar from './ListaDeServicosPorMilitar';
import { gerarEscalaMensalOrdinaria } from '../utils';
import { Servico } from '../types/Servico';
import { Permuta } from '../types/Permuta';
import { dispensasNovembro, permutasNovembro } from '../constans';

const Escala: FC<{
    onlyView?: boolean;
}> = ({ onlyView }) => {
    const [mes, setMes] = useState(String(new Date().getMonth() + 2));
    const [militaresDaMesmaGuarnicao, setMilitaresDaMesmaGuarnicao] = useState<
        Array<[string, string]>
    >([]);
    const [permutasSalvas, setPermutasSalvas] = useState<
        Array<{ id: string; permutas: Array<Permuta> }>
    >([]);
    const [permutas, setPermutas] = useState<Array<Permuta>>(permutasNovembro);
    const [servicoSelecionadoParaPermuta, setServicoSelecionadoParaPermuta] =
        useState<Servico>({ dia: '', matricula: '' });
    const dispensas: Array<Servico> = dispensasNovembro;
    const ano = String(new Date().getFullYear());

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
        dispensas,
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
    useEffect(() => {
        const permutasSalvas = localStorage.getItem('permutas');
        if (permutasSalvas) {
            console.log({ permutasSalvas: JSON.parse(permutasSalvas) });
            setPermutas(JSON.parse(permutasSalvas));
        }
    }, []);
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
        const permutasA = permutas.filter((permuta) =>
            permuta.servicos.some((s) => s.matricula === matriculaA)
        );
        const permutasB = permutas.filter((permuta) =>
            permuta.servicos.some((s) => s.matricula === matriculaB)
        );
        const novosServicosA: Array<Servico> = [];
        const novosServicosB: Array<Servico> = [];
        permutasA.forEach((permuta) => {
            const servico = permuta.servicos.find(
                (s) => s.matricula === matriculaA
            );
            if (servico) {
                novosServicosB.push({
                    dia: servico.dia,
                    matricula: matriculaB,
                });
            }
        });
        permutasB.forEach((permuta) => {
            const servico = permuta.servicos.find(
                (s) => s.matricula === matriculaB
            );
            if (servico) {
                novosServicosA.push({
                    dia: servico.dia,
                    matricula: matriculaA,
                });
            }
        });
        const novasPermutas: Array<Permuta> = [];
        novosServicosA.forEach((servicoA, index) => {
            const servicoB = novosServicosB[index];
            if (servicoB) {
                novasPermutas.push({
                    id: String(new Date().getTime()) + index,
                    servicos: [servicoA, servicoB],
                });
            }
        });
        setPermutas((prevPermutas) => {
            const permutasFiltradas = prevPermutas.filter((permuta) => {
                return !permuta.servicos.some(
                    (s) =>
                        s.matricula === matriculaA || s.matricula === matriculaB
                );
            });
            const permutasAtualizadas = [
                ...permutasFiltradas,
                ...novasPermutas,
            ];

            return permutasAtualizadas;
        });
    }
    console.log({ permutas });
    return (
        <div>
            <TabelaServicosMensais
                mes={mes}
                ano={ano}
                servicosPorMatricula={servicosOrdinariosPorMatricula}
                permutas={permutas}
                servicoSelecionadoParaPermuta={servicoSelecionadoParaPermuta}
                onClickDia={onClickDia}
                dispensas={dispensasNovembro}
                diasIndisponiveis={diasIndisponiveis}
                onlyView={onlyView}
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
            <ListaPermutas
                permutas={permutas}
                removerPermuta={removerPermuta}
                onlyView={onlyView}
            />
            <ListaMilitaresDoDia
                servicosDoMes={servicosMensais}
                permutas={permutas}
            />
            <ListaDeServicosPorMilitar
                servicosOrdinariosPorMatricula={servicosOrdinariosPorMatricula}
                permutas={permutas}
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
