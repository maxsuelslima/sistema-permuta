import { efetivo, guarnicoes } from "./constans";

const Guarnicoes = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem'
    }}>
      {guarnicoes.map((guarnicao, index) => (
        <div key={index}>
          <h2>Guarnição {index + 1}</h2>
          <ul>
            {guarnicao.map((id) => {
              const soldado = efetivo.find(s => s.id === id);
              return (
                <li key={id} style={{
                  color: soldado?.isAdventist ? 'green' : 'black'
                }}>
                  {soldado?.name} ({id}) {soldado?.isAdventist ? '🌿' : ''}
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