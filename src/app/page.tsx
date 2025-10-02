'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Guarnicoes from './Guarnicoes';
import Escala, { Dispensa, Permuta, Permutas } from './components/Escala';
import {
    aplicarPermutas,
    TabelaServicosMensais,
} from './components/TabelaServicosMensais';
import ListaPermutas from './components/ListaPermutas';
import { efetivo, escalaAtual } from './constans';
import { gerarServicoMensal, ServicoMensal } from './utils';

function checaDiferençaArrayPermutas(arr1: Permutas, arr2: Permutas) {}
const dispensas: Array<Dispensa> = [
    {
        matricula: '725241-2',
        dia: 5,
    },
    {
        matricula: '725239-0',
        dia: 21,
    },
];
export default function Home() {
    const [mes, setMes] = useState(new Date());
    const [diaSelecionado, setDiaSelecionado] = useState<number | null>(null);
    const permuta = {
        dia: -1,
        matricula: '',
    };
    const servicosMensais: ServicoMensal = gerarServicoMensal({
        mes: 10,
        ano: 2025,
    });
    const militaresEscaladosDia: Record<string, Array<{
        matricula: string;
        servico: 'ordinary' | 'permuta';
        diaPermutado?: number;
        matriculaPermutou?: string;
    }>> = {};
    Object.entries(servicosMensais.servicos).forEach(([matricula, servicos]) => {
        servicos.forEach((s) => {
            if (!militaresEscaladosDia[s]) {
                militaresEscaladosDia[s] = []
            }
            militaresEscaladosDia[s].push({
                matricula,
                servico: 'ordinary'
            });
        })
    })
    escalaAtual.forEach((p) => {
        const [servico1, servico2] = p.servicos
        if (!militaresEscaladosDia[servico1.dia]) {
            militaresEscaladosDia[servico1.dia] = []
        }
        if (!militaresEscaladosDia[servico2.dia]) {
            militaresEscaladosDia[servico2.dia] = []
        }
        militaresEscaladosDia[servico1.dia].push({
            matricula: servico2.matricula,
            servico: 'permuta',
            diaPermutado: servico2.dia,
            matriculaPermutou: servico1.matricula
        })
        militaresEscaladosDia[servico2.dia].push({
            matricula: servico1.matricula,
            servico: 'permuta',
            diaPermutado: servico1.dia,
            matriculaPermutou: servico2.matricula
        })
        militaresEscaladosDia[servico1.dia].sort((a, b) => a.matricula.localeCompare(b.matricula))
        militaresEscaladosDia[servico2.dia].sort((a, b) => a.matricula.localeCompare(b.matricula))
        // remove quem trocou do dia original
        militaresEscaladosDia[servico1.dia] = militaresEscaladosDia[servico1.dia].filter(s => s.matricula !== servico1.matricula || s.servico !== 'ordinary')
        militaresEscaladosDia[servico2.dia] = militaresEscaladosDia[servico2.dia].filter(s => s.matricula !== servico2.matricula || s.servico !== 'ordinary')
    })
    const [filtroMilitar, setFiltroMilitar] = useState('');
    return (
        <main>
            <div
                style={{
                    width: '100%',
                }}
            >
                <div>
                    <h1>Escala - 10</h1>
                </div>
                <div>
                    <div>
                        <Guarnicoes />
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <div style={{ pointerEvents: 'none' }}>
                            <TabelaServicosMensais
                                servicosMensais={servicosMensais}
                                permutas={escalaAtual}
                                dispensas={dispensas}
                                handlePermuta={() => {}}
                                removerPermuta={() => {}}
                                isEditingPermuta={false}
                                permutaAtiva={permuta}
                            />
                        </div>
                    </div>
                    <div>
                        <h1> Militares pelo dia </h1>
                        <select
                            value={diaSelecionado ?? ''}
                            onChange={(e) =>
                                setDiaSelecionado(
                                    e.target.value
                                        ? parseInt(e.target.value, 10)
                                        : null
                                )
                            }
                        >
                            <option value="">Selecione o dia</option>
                            {Array.from(
                                {
                                    length: new Date(
                                        mes.getFullYear(),
                                        mes.getMonth() + 1,
                                        0
                                    ).getDate(),
                                },
                                (_, i) => i + 1
                            ).map((dia) => (
                                <option key={dia} value={dia}>
                                    {dia}
                                </option>
                            ))}
                        </select>
                        <br />
                        <h2>Serviços do dia {diaSelecionado}</h2>
                        <div>
                            {militaresEscaladosDia[diaSelecionado ?? -1]?.map((s, idx) => (
                                <div key={idx} className={styles.diaServico}>
                                    <span>
                                        {
                                            efetivo[s.matricula]
                                                .name
                                        }
                                    </span>{' '}
                                    -{' '}
                                    <span style={{
                                        textTransform: 'capitalize'
                                    }}>{s.servico === 'ordinary' ? 'ordinário' : 'permuta'}</span>
                                    {s.servico === 'permuta' && (
                                        <>
                                            {' '}
                                            (permuta com{' '}
                                            <span>
                                                {
                                                    efetivo[s.matriculaPermutou ?? '']?.name
                                                }
                                            </span>{' '}
                                            permutou 
                                            pelo dia {s.diaPermutado})
                                        </>
                                    )}
                                </div>
                            )) || <p>Nenhum militar escalado.</p>}
                        </div>
                    </div>
                    <div>
                        <h1>Dias de serviço</h1>
                        <label htmlFor="filtro-militar">
                            Filtrar por militar:{' '}
                        </label>
                        <select
                            id="filtro-militar"
                            value={filtroMilitar}
                            onChange={(e) => setFiltroMilitar(e.target.value)}
                        >
                            <option value="">Todos</option>
                            {Object.entries(efetivo).map(
                                ([matricula, militar]) => (
                                    <option key={matricula} value={matricula}>
                                        {militar.name}
                                    </option>
                                )
                            )}
                        </select>
                        {aplicarPermutas({
                            servicos: servicosMensais.servicos[filtroMilitar] ?? [],
                            permutas: escalaAtual,
                            matricula: filtroMilitar,
                        }).sort((a, b) => Number(a.dia) - Number(b.dia)).map((dia, idx) => {
                            return (
                                <div key={idx} className={styles.diaServico}>
                                    <span>{dia.dia}</span> -{' '}
                                    <span style={{
                                        textTransform: 'capitalize'
                                    }}>{dia.servico === 'ordinary' ? 'ordinário' : 'permuta'}</span>
                                </div>
                            );
                        })}
                    </div>
                    <ListaPermutas
                        permutas={escalaAtual}
                        removerPermuta={() => {}}
                    />
                </div>
            </div>
        </main>
    );
}
