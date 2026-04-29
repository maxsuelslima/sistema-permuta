import { FC } from 'react';
import { efetivo, guarnicoes, listaAdventistas } from './constans';

const Guarnicoes: FC<{ ano: number; mes: number }> = ({
    ano = 2026,
    mes = 1,
}) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
            }}
        >
            {guarnicoes[ano]?.[mes]?.map((guarnicao, index) => (
                <div key={index}>
                    <h2>Guarnição {index + 1}</h2>
                    <ul>
                        {guarnicao.map((id) => {
                            const militar = efetivo[id];
                            const isAdventist = listaAdventistas.includes(id);
                            return (
                                <li
                                    key={id}
                                    style={{
                                        color: isAdventist ? 'green' : 'black',
                                    }}
                                >
                                    {militar?.name} ({id}){' '}
                                    {isAdventist ? '🌿' : ''}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};
export default Guarnicoes;
