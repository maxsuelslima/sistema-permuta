import { FC, useState } from 'react';
import { gerarServicoMensal, ServicoMensal } from '../utils';
import { aplicarPermmutas, TabelaServicosMensais } from './TabelaServicosMensais';
import ListaPermutas from './ListaPermutas';
export type Dispensa = {
    matricula: string;
    dia: number;
};
const dispensas: Array<Dispensa> = [{
    matricula: '725241-2',
    dia: 5
}, {
    matricula: '725241-2',
    dia: 21
}];
export type Servico = {
    matricula: string;
    dia: number;
};

export type Permutas = Array<{
    id: string;
    servicos: Array<Servico>;
}>;

const Escala: FC<{
    mes: number;
    ano: number;
}> = ({ mes, ano }) => {
    const servicosMensais: ServicoMensal = gerarServicoMensal({ mes, ano });

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
    const [permutas, setPermutas] = useState<Permutas>(() => {
        if (typeof window !== 'undefined') {
            const storedPermutas = localStorage.getItem('permutas');
            if (storedPermutas) {
                return JSON.parse(storedPermutas);
            }
        }
        return [];
    });

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
    return (
        <div style={{ marginTop: '2rem', padding: '1rem' }}>
            <div style={{ overflowX: 'auto' }}>
                <TabelaServicosMensais
                    servicosMensais={servicosMensais}
                    permutas={permutas}
                    dispensas={dispensas}
                    handlePermuta={handlePermuta}
                    removerPermuta={removerPermuta}
                    isEditingPermuta={isEditingPermuta}
                    permutaAtiva={permuta}
                />
            </div>
            <ListaPermutas
                permutas={permutas}
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
  const todosOsServicosMilitaresA = aplicarPermmutas({
    servicos: servicosMensais.servicos[militarA.matricula] || [],
    permutas,
    matricula: militarA.matricula,
  });
  const todosOsServicosMilitaresB = aplicarPermmutas({
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

export default Escala;
