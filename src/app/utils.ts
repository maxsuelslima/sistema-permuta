import { Permuta, Permutas } from './components/Escala';
import { guarnicoes, Militar } from './constans';
import { v4 as uuidv4 } from 'uuid';

export type ServicoMensal = {
    mes: number;
    ano: number;
    /**
     * servicos é um objeto onde a chave é a matricula do militar
     * e o valor é um array com os dias do mês que ele tem serviço
     */
    servicos: Record<string, Array<string>>;
};

export function gerarServicoMensal({
    mes,
    ano,
}: {
    mes: number;
    ano: number;
}): ServicoMensal {
    const diasNoMes = new Date(ano, mes, 0).getDate();
    const escalaMensal: ServicoMensal = {
        mes,
        ano,
        servicos: {},
    };
    for (let dia = 1; dia <= diasNoMes; dia++) {
        const guarnicaoIndex = (dia - 1) % guarnicoes.length;
        const guarnicao = guarnicoes[guarnicaoIndex];
        guarnicao.map((matricula) => {
            escalaMensal.servicos[matricula] =
                escalaMensal.servicos[matricula] || [];
            escalaMensal.servicos[matricula].push(dia.toString());
            return null;
        });
    }
    return escalaMensal;
}
