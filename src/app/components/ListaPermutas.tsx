import { FC } from 'react';
import { efetivo } from '../constans';
import { Permutas, Servico } from './Escala';

const ListaPermutas: FC<{
    permutas: Permutas;
    removerPermuta: (id: string) => void;
}> = ({ permutas, removerPermuta }) => {
    return (
        <div style={{ marginTop: '1rem', padding: '1rem 2rem' }}>
            <h1>Permutas</h1>
            {permutas.length === 0 && <p>Nenhuma permuta realizada.</p>}
            <ul>
                {permutas.map((p, index) => {
                    return (
                        <li key={index}>
                            {p.servicos
                                .map(
                                    (s) =>
                                        `${efetivo[s.matricula].name} (dia ${s.dia})`
                                )
                                .join(' <-> ')}
                            <button
                                style={{ marginLeft: '1rem', display: 'none' }}
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
