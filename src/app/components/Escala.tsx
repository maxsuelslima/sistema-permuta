import { FC, useEffect, useState } from 'react';
import { gerarServicoMensal, ServicoMensal } from '../utils';
import { aplicarPermutas, TabelaServicosMensais } from './TabelaServicosMensais';
import ListaPermutas from './ListaPermutas';
import { efetivo, escalaOutubro, escalaOutubro2, escalaOutubro3 } from '../constans';
export type Dispensa = {
    matricula: string;
    dia: number;
};
const dispensas: Array<Dispensa> = [{
    matricula: '725241-2',
    dia: 5
}, {
    matricula: '725239-0',
    dia: 21
}];
export type Servico = {
    matricula: string;
    dia: number;
};

export type Permutas = Array<Permuta>;
export type Permuta = {
    id: string;
    servicos: Array<Servico>;
};


const Escala: FC<{
    mes: number;
    ano: number;
}> = ({ mes, ano }) => {
    const servicosMensais: ServicoMensal = gerarServicoMensal({ mes, ano });
    const [permutas, setPermutas] = useState<Permutas>([]);
    const [permuta, setPermuta] = useState<Servico>({
        dia: -1,
        matricula: '',
    });
    const isEditingPermuta = permuta.dia !== -1 && permuta.matricula !== '';
    function handlePermuta(args: { diaIndex: number; matricula: string }) {
        const { diaIndex, matricula } = args;
        if (isEditingPermuta) {
            adicionarPermuta({
                servicos: [
                    { dia: permuta.dia, matricula: permuta.matricula },
                    { dia: diaIndex, matricula },
                ],
            });
            localStorage.setItem('permutas', JSON.stringify(permutas));
            setPermuta({ dia: -1, matricula: '' });
        } else {
            setPermuta({ dia: diaIndex, matricula });
        }
    }
    useEffect(() => {
      if (typeof window !== 'undefined') {
            const storedPermutas = localStorage.getItem('permutas');
            if (storedPermutas) {
              setPermutas(JSON.parse(storedPermutas));
            }
        }
    }, []);

    function adicionarPermuta(args: { servicos: Array<Servico> }) {
        const { servicos } = args;
        const isValida = validarPermuta({
            permuta: [servicos[0], servicos[1]],
            servicosMensais,
            permutas,
        });
        if (!isValida) {
            alert('Permuta inválida');
            return;
        }
        const id = servicos.map((s) => `${s.matricula}-${s.dia}`).join('|');
        setPermutas((prev) => [...prev, { id, servicos }]);
    }

    function removerPermuta(id: string) {
        setPermutas((prev) => prev.filter((p) => p.id !== id));
    }
    /**
     * militaresComEscalaIdeal são aqueles que, após aplicar todas as permutas,
     * não possuem 4 dias consecutivos de serviço no mês.
     * e que todos os dias de serviço fazer parte de uma sequência de 3 dias consecutivos.
     * 
     */
    console.log(permutas)

    return (
        <div style={{ marginTop: '2rem', padding: '1rem' }}>
            <div style={{ overflowX: 'auto' }}>
                <TabelaServicosMensais
                    servicosMensais={servicosMensais}
                    permutas={escalaOutubro3}
                    dispensas={dispensas}
                    handlePermuta={handlePermuta}
                    removerPermuta={removerPermuta}
                    isEditingPermuta={isEditingPermuta}
                    permutaAtiva={permuta}
                />
             {/*     <button onClick={() => {
                    setPermutas([]);
                    localStorage.removeItem('permutas');
                }} style={{ marginTop: '1rem', marginLeft: '1rem' }}>Limpar Permutas</button>
                <button onClick={() => {
                  setPermutas(escalaOutubro2);
                  window.localStorage.setItem('permutas', JSON.stringify(escalaOutubro2));
                }} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                  resetar
                </button>  */}
            </div>
            <ListaPermutas
                permutas={escalaOutubro3}
                removerPermuta={removerPermuta}
            />
        </div>
    );
};

interface ArgsValidarPermuta {
  permuta: [Servico, Servico]; // sempre 2 militares
  servicosMensais: ServicoMensal;
  permutas: Permutas;
}

export function validarPermuta({
  permuta,
  servicosMensais,
  permutas
}: ArgsValidarPermuta): boolean {
  const [militarA, militarB] = permuta;

  // 3. O militar não pode permutar com ele mesmo
  if (militarA.matricula === militarB.matricula) {
    return false;
  }

  // Função auxiliar: verifica se militar já participou de uma permuta em um dia
  const jaPermutouNoDia = (matricula: string, dia: number) =>
    permutas.some((p) =>
      p.servicos.some(
        (s) => s.matricula === matricula && s.dia === dia
      )
    );

  // 🔴 Nova função auxiliar: verifica se o serviço realmente pertence ao militar na escala original
  const pertenceEscalaOriginal = (matricula: string, dia: number) =>
    servicosMensais.servicos[matricula]?.includes(String(dia));

  // 1. Ambos os militares têm serviço no dia que querem permutar
  if (
    !pertenceEscalaOriginal(militarA.matricula, militarA.dia) &&
    !jaPermutouNoDia(militarA.matricula, militarA.dia)
  ) {
    // militar A não tem esse serviço originalmente nem por histórico de permuta → inválido
    return false;
  }
  if (
    !pertenceEscalaOriginal(militarB.matricula, militarB.dia) &&
    !jaPermutouNoDia(militarB.matricula, militarB.dia)
  ) {
    return false;
  }

  // 2. Nenhum dos militares já tenha permutado o serviço no dia que querem permutar
  if (jaPermutouNoDia(militarA.matricula, militarA.dia)) return false;
  if (jaPermutouNoDia(militarB.matricula, militarB.dia)) return false;

  // 4. O militar não pode permutar dias que já tenha permutado
  if (jaPermutouNoDia(militarA.matricula, militarB.dia)) return false;
  if (jaPermutouNoDia(militarB.matricula, militarA.dia)) return false;

  // 5. O militar não pode permutar pra um dia que ele já tenha serviço
  if (servicosMensais.servicos[militarA.matricula]?.includes(String(militarB.dia))) {
    return false;
  }
  if (servicosMensais.servicos[militarB.matricula]?.includes(String(militarA.dia))) {
    return false;
  }

  // 6. O militar não pode permutar pra um dia que ele já tenha permutado
  if (jaPermutouNoDia(militarA.matricula, militarB.dia)) return false;
  if (jaPermutouNoDia(militarB.matricula, militarA.dia)) return false;
  const todosOsServicosMilitaresA = aplicarPermutas({
    servicos: servicosMensais.servicos[militarA.matricula] || [],
    permutas,
    matricula: militarA.matricula,
  });
  const todosOsServicosMilitaresB = aplicarPermutas({
    servicos: servicosMensais.servicos[militarB.matricula] || [],
    permutas,
    matricula: militarB.matricula,
  });
  const isDiaDeServicoMilitarA = todosOsServicosMilitaresA.find(d => d.dia === String(militarB.dia));
  const isDiaDeServicoMilitarB = todosOsServicosMilitaresB.find(d => d.dia === String(militarA.dia));
  if (isDiaDeServicoMilitarA !== undefined || isDiaDeServicoMilitarB !== undefined) {
    return false;
  }
  return true;
}
function sequenciaQuatroOuMais(dias: string[]): string[] {
  const nums = dias.map(d => Number(d));
  const n = nums.length;
  const found = new Set<string>();

  for (let i = 0; i < n; i++) {
    for (let j = i + 3; j < n; j++) { // mínimo 4 elementos
      const slice = nums.slice(i, j + 1);

      // verifica se todos são consecutivos
      let consecutivo = true;
      for (let k = 1; k < slice.length; k++) {
        if (slice[k] - slice[k - 1] !== 1) {
          consecutivo = false;
          break;
        }
      }

      if (consecutivo) {
        found.add(slice.join(","));
      }
    }
  }

  return [...found];
}

export default Escala;
