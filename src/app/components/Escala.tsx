import { FC, useState } from 'react';
import { gerarServicoMensal, ServicoMensal } from '../utils';
import { TabelaServicosMensais } from './TabelaServicosMensais';
import ListaPermutas from './ListaPermutas';
export type Dispensa = {
    matricula: string;
    dia: number;
};
const dispensas: Array<Dispensa> = [];
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

    const [permuta, setPermuta] = useState<{
        dia: number;
        matricula: string;
    }>({
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
            setPermuta({ dia: -1, matricula: '' });
        } else {
            setPermuta({ dia: diaIndex, matricula });
        }
    }
    const [permutas, setPermutas] = useState<Permutas>([]);

    function adicionarPermuta(args: { servicos: Array<Servico> }) {
        const { servicos } = args;
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
export default Escala;
