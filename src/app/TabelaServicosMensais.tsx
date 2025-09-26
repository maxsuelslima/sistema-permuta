import { FC, useState } from "react";
import { efetivo, guarnicoes } from "./constans";


type Servico = {
    dono: string;
    permuta: string | null;
}
type ServicoMensal = Array<Array<Servico>>

function gerarServicoMensal({
  mes,
  ano
}:{
  mes: number;
  ano: number;
}): ServicoMensal{
  // Lógica para gerar a escala com base no mês
  // no mes de outubro (10) no dia 1 é a guarnição 0 e assim por diante
  // cada guarnição tem 5 soldados, exceto a 3 que tem 4
  // cada soldado trabalha 1 dia e folga 4
  // essa função retorna um array de arrays, onde cada array interno representa os soldados que trabalham naquele dia	
  const diasNoMes = new Date(ano, mes, 0).getDate();
  const escalaMensal: ServicoMensal = [];
  for(let dia = 1; dia <= diasNoMes; dia++){
    const guarnicaoIndex = (dia - 1) % guarnicoes.length;
    const guarnicao = guarnicoes[guarnicaoIndex];
    const servicoDia: Array<Servico> = guarnicao.map(soldado => ({
      dono: soldado,
      permuta: null
    }));
    escalaMensal.push(servicoDia);
  }
  return escalaMensal;
}
type dispensa = {
  matricula: string;
  dia: number;
}
const TabelaServicosMensais: FC<{
  mes: number;
  ano: number;
  dispensas?: dispensa[];
}> = ({ mes, ano, dispensas }) => {
  const [escalaMensal, setEscalaMensal] = useState<ServicoMensal>(gerarServicoMensal({mes, ano}));
  const [permutas, setPermutas] = useState<Array<{dia: number; de: string; para: string}>>([]);
  const [permuta, setPermuta] = useState<{
    dia: number;
    matricula: string;
  }>({
    dia: -1,
    matricula: ''
  });
  const isEditingPermuta = permuta.dia !== -1 && permuta.matricula !== '';
  function handleOnClickCelula({
    diaIndex,
    matricula
  }:{
    diaIndex: number;
    matricula: string;
  }) {
    if(isEditingPermuta){
      setEscalaMensal(prev => {
        const novaEscala = [...prev];
        const servicosDoDia = [...novaEscala[permuta.dia]];
        const servicoASerTrocadoIndex = servicosDoDia.findIndex(s => s.dono === permuta.matricula);
        if(servicoASerTrocadoIndex !== -1){
          servicosDoDia[servicoASerTrocadoIndex].permuta = matricula;
          novaEscala[permuta.dia] = servicosDoDia;
          novaEscala[diaIndex] = novaEscala[diaIndex].map(s => {
            if(s.dono === matricula){
              return {
                ...s,
                permuta: permuta.matricula
              }
            }
            return s;
          });
          return novaEscala;
        }
        return prev;
      });
      setPermutas(prev => ([...prev, {
        dia: permuta.dia,
        de: permuta.matricula,
        para: matricula
      }]));
      setPermuta({
        dia: -1,
        matricula: ''
      });
    } else {
      // iniciar permuta
      setPermuta({
        dia: diaIndex,
        matricula
      });
    }
  }

  return (
    <div>
      <div>
              <table style={{borderCollapse: 'collapse', width: '100%'}}>
      <thead>
        <tr>
          {
            Array.from({length: escalaMensal.length}, (_, i) => (
              <th key={i} style={{border: '1px solid black', padding: '8px', whiteSpace: 'nowrap'}}>
                {i + 1} - {new Date(ano, mes - 1, i + 1).toLocaleDateString('pt-BR', { weekday: 'short' })}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        <tr>
          {
            escalaMensal.map((servicoDia, index) => (
                <td key={index} style={{border: '1px solid black', verticalAlign: 'top', whiteSpace: 'nowrap', cursor: 'pointer'}}>
                  {servicoDia.map((servico, idx) => {
                    const isDispensado = dispensas?.some(d => d.matricula === servico.dono && d.dia === index + 1);
                    
                    if(isDispensado){
                      return null
                    }
                    const isAllowedPermuta = servico.permuta === null;
                    return (
                      <div key={idx} 
                        style={{padding: '6px 12px', borderBottom: '1px solid #ccc',
                          backgroundColor: isEditingPermuta && permuta.matricula === servico.dono ? '#ffeb3b' : isAllowedPermuta ? '#e0f7fa' : '#a6a5a5',
                          cursor: isAllowedPermuta ? 'pointer' : 'not-allowed',
                          opacity: isDispensado ? 0.5 : 1
                        }}
                        onClick={() => handleOnClickCelula({diaIndex: index, matricula: servico.dono})}
                      >
                        {
                          servico.permuta ?
                          <>
                            {efetivo.find(s => s.id === servico.permuta)?.name || servico.permuta} ({servico.permuta})
                            < br />
                            <span style={{color: 'lightgrey', fontSize: '0.8rem', fontWeight: 'bold'}}> (permuta de {efetivo.find(s => s.id === servico.dono)?.name || servico.dono} ({servico.dono}))</span>
                          </>
                          :
                          <>
                            {efetivo.find(s => s.id === servico.dono)?.name || servico.dono} ({servico.dono}) {efetivo.find(s => s.id === servico.dono)?.isAdventist ? '🌿' : ''}
                          </>
                        }
 
                    </div>
                    )
                  })}
                </td>
            ))}
        </tr>
      </tbody>
    </table>
      </div>
      <div style={{marginTop: '1rem', padding: '1rem 2rem'}}>
        <h1>Permutas</h1>
        {permutas.length === 0 && <p>Nenhuma permuta realizada.</p>}
        <ul>
          {permutas.map((p, index) => (
            <li key={index}>
              {efetivo.find(s => s.id === p.de)?.name || p.de} ({p.de}) permuta com {efetivo.find(s => s.id === p.para)?.name || p.para} ({p.para}) no dia {p.dia + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { TabelaServicosMensais };