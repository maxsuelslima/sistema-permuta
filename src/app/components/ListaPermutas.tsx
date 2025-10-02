import { FC, useState } from 'react';
import { efetivo } from '../constans';
import { Permutas, Servico } from './Escala';

const ListaPermutas: FC<{
    permutas: Permutas;
    removerPermuta: (id: string) => void;
}> = ({ permutas, removerPermuta }) => {
    const [filtro, setFiltro] = useState<string>('');
    return (
        <div style={{ marginTop: '1rem', padding: '1rem 2rem' }}>
            <h1>Permutas</h1>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="filtro">Filtrar por militar: </label>
                <select
                    id="filtro"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="">Todos</option>
                    {Object.values(efetivo).map((militar) => (
                        <option
                            key={militar.matricula}
                            value={militar.matricula}
                        >
                            {militar.name}
                        </option>
                    ))}
                </select>
            </div>
            {permutas.length === 0 && <p>Nenhuma permuta realizada.</p>}
            <ul>
                {permutas.map((p, index) => {
                    if (filtro) {
                        const envolveFiltro = p.servicos.some(
                            (s) => s.matricula === filtro
                        );
                        if (!envolveFiltro) {
                            return null;
                        }
                    }
                    return (
                        <li key={index}>
                            {p.servicos
                                .map((s) => {
                                    return `${efetivo[s.matricula].name} ${s.matricula} (dia ${s.dia})`;
                                })
                                .join(' <-> ')}
                            <button
                                style={{ marginLeft: '1rem' }}
                                onClick={() => removerPermuta(p.id)}
                            >
                                Remover
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default ListaPermutas;
