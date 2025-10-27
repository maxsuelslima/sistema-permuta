import { FC, useState } from 'react';
import { efetivo } from '../constans';
import { Permuta } from '../types/Permuta';

const ListaPermutas: FC<{
    permutas: Array<Permuta>;
    removerPermuta: (id: string) => void;
    onlyView?: boolean;
}> = ({ permutas, removerPermuta, onlyView }) => {
    const [militarSelecionado, setMilitarSelecionado] = useState<string>('');

    return (
        <div style={{ marginTop: '1rem', padding: '1rem 2rem' }}>
            <h1>Permutas</h1>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="filtro">Filtrar por militar: </label>
                <select
                    id="filtro"
                    value={militarSelecionado}
                    onChange={(e) => setMilitarSelecionado(e.target.value)}
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
                {permutas
                    .filter((permuta) => {
                        if (militarSelecionado === '') return true;
                        return permuta.servicos.some(
                            (s) => s.matricula === militarSelecionado
                        );
                    })
                    .map((permuta) => (
                        <li key={permuta.id} style={{ marginBottom: '0.5rem' }}>
                            {permuta.servicos
                                .map(
                                    (s) =>
                                        `${efetivo[s.matricula]?.name || 'Militar desconhecido'} (dia ${s.dia})`
                                )
                                .join(' ↔ ')}{' '}
                            <button
                                onClick={() => {
                                    if (onlyView) return;
                                    removerPermuta(permuta.id);
                                }}
                                style={{
                                    marginLeft: '1rem',
                                    color: 'white',
                                    backgroundColor: 'red',
                                    border: 'none',
                                    padding: '0.2rem 0.5rem',
                                    cursor: 'pointer',
                                    display: onlyView ? 'none' : 'inline-block',
                                }}
                            >
                                Remover
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default ListaPermutas;
