import { efetivo, guarnicoes, listaAdventistas } from './constans';

const Guarnicoes = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
            }}
        >
            {guarnicoes.map((guarnicao, index) => (
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
