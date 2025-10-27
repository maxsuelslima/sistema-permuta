import { FC, useState } from 'react';
import { efetivo } from '../constans';
import { Permuta } from '../types/Permuta';
import ServicosMensais from '../types/ServicosMensais';

const ListaMilitaresDoDia: FC<{
    servicosDoMes: ServicosMensais;
    permutas: Array<Permuta>;
}> = ({ servicosDoMes, permutas }) => {
    const [diaSelecionado, setDiaSelecionado] = useState<string>('');
    const dicionarioMilitaresNoDia: {
        [dia: string]: Array<{
            matricula: string;
            permuta?: {
                matricula: string;
                dia: string;
            };
        }>;
    } = {};
    Object.keys(servicosDoMes).forEach((dia) => {
        servicosDoMes[dia].map((matricula) => {
            dicionarioMilitaresNoDia[dia] = dicionarioMilitaresNoDia[dia] || [];
            dicionarioMilitaresNoDia[dia].push({
                matricula,
            });
        });
    });

    permutas.forEach(({ servicos }) => {
        const [servicoA, servicoB] = servicos;
        dicionarioMilitaresNoDia[servicoA.dia].forEach((militar) => {
            if (militar.matricula === servicoA.matricula) {
                militar.permuta = {
                    matricula: servicoB.matricula,
                    dia: servicoB.dia,
                };
            }
        });
        dicionarioMilitaresNoDia[servicoB.dia].forEach((militar) => {
            if (militar.matricula === servicoB.matricula) {
                militar.permuta = {
                    matricula: servicoA.matricula,
                    dia: servicoA.dia,
                };
            }
        });
    });

    return (
        <div>
            <h3>Militares do dia {diaSelecionado}</h3>
            <div>
                <h4>Selecione o dia:</h4>
                <select
                    value={diaSelecionado}
                    onChange={(e) => setDiaSelecionado(e.target.value)}
                >
                    <option value="">Todos</option>
                    {Object.keys(servicosDoMes).map((dia) => (
                        <option key={dia} value={dia}>
                            {dia}
                        </option>
                    ))}
                </select>
            </div>
            <ul>
                {diaSelecionado &&
                    dicionarioMilitaresNoDia[diaSelecionado]?.map(
                        ({ matricula, permuta }) => {
                            const isPermuta = Boolean(permuta);
                            if (isPermuta && typeof permuta !== 'undefined')
                                return (
                                    <li
                                        key={matricula}
                                        style={{
                                            display: 'flex',
                                            gap: '8px',
                                            borderBottom: '1px solid #ccc',
                                            paddingBottom: '4px',
                                            marginBottom: '4px',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: '8px',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>
                                                {efetivo[permuta?.matricula]
                                                    ?.name ||
                                                    permuta?.matricula}
                                            </span>
                                            <span
                                                style={{
                                                    backgroundColor: 'orange',
                                                    padding: '2px 4px',
                                                    borderRadius: '4px',
                                                    color: 'white',
                                                }}
                                            >
                                                Permuta
                                            </span>
                                        </div>
                                        <span
                                            style={{
                                                fontStyle: 'italic',
                                                color: '#555',
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            Permutado com{' '}
                                            <b>{efetivo[matricula]?.name}</b>{' '}
                                            pelo dia {permuta?.dia}
                                        </span>
                                    </li>
                                );
                            return (
                                <li
                                    key={matricula}
                                    style={{
                                        display: 'flex',
                                        gap: '8px',
                                        alignItems: 'center',
                                        borderBottom: '1px solid #ccc',
                                        paddingBottom: '4px',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {efetivo[matricula]?.name || matricula} -
                                    <span
                                        style={{
                                            backgroundColor: 'green',
                                            padding: '2px 4px',
                                            borderRadius: '4px',
                                            color: 'white',
                                        }}
                                    >
                                        Ordinário
                                    </span>
                                </li>
                            );
                        }
                    )}
            </ul>
        </div>
    );
};
export default ListaMilitaresDoDia;
