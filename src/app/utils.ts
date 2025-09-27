import { guarnicoes } from './constans';

export type ServicoMensal = {
    mes: number;
    ano: number;
    servicos: Record<string, Array<string>>;
};

function gerarServicoMensal({
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
export { gerarServicoMensal };
