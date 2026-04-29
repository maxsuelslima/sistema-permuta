import ServicosMensais from './types/ServicosMensais';
// sabendo que no mes 10 do ano de 2025 a guarnicao alfa é a primeira a entrar em servico no dia 1
// e que a cada dia a proxima guarnicao entra em servico, retornando a primeira apos a ultima
// e sabendo que existem 4 guarnicoes: alfa, bravo, charlie e delta
// gere um dicionario onde a chave é o dia do mes e o valor é um array com as matriculas dos militares de cada guarnicao que estao de servico naquele dia

const escalaEspecialFevereiro: ServicosMensais = {
    1: ['2', '6', '10', '14', '18', '22', '26'], // Alfa
    2: ['3', '7', '13', '15', '19', '23', '27'], // Bravo
    3: ['4', '8', '12', '16', '20', '24', '28'], // Charlie
    4: ['1', '5', '9', '11', '17', '21', '25'], // Delta
};

export function gerarEscalaMensalOrdinaria({
    mes,
    ano,
    guarnicoes,
}: {
    mes: string;
    ano: string;
    guarnicoes: Array<Array<string>>;
}): ServicosMensais {
    const diasNoMes = new Date(parseInt(ano), parseInt(mes), 0).getDate();
    const dicionarioDiasServicos: Record<string, Array<string>> = {};
    const dataReferencial = new Date(2025, 9, 1); // 1 de outubro de 2025
    const diffDias = Math.floor(
        (new Date(parseInt(ano), parseInt(mes) - 1, 1).getTime() -
            dataReferencial.getTime()) /
            (1000 * 60 * 60 * 24)
    );
    const guarnicaoInicialIndex =
        ((diffDias % guarnicoes.length) + guarnicoes.length) %
        guarnicoes.length;

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const guarnicaoIndex =
            (guarnicaoInicialIndex + dia - 1) % guarnicoes.length;
        const guarnicaoDoDia = guarnicoes[guarnicaoIndex];
        guarnicaoDoDia.map((matricula) => {
            if (!dicionarioDiasServicos[dia]) {
                dicionarioDiasServicos[dia] = [];
            }
            dicionarioDiasServicos[dia].push(matricula);
        });
    }
    if (Number(mes) === 2 && ano === '2026') {
        Object.keys(escalaEspecialFevereiro).map((guarnicaoIndex) => {
            const matriculas = guarnicoes[parseInt(guarnicaoIndex) - 1];
            const diasServicoGuarnicao =
                escalaEspecialFevereiro[guarnicaoIndex];
            diasServicoGuarnicao.map((dia) => {
                dicionarioDiasServicos[dia] = matriculas;
            });
        });
    }
    return dicionarioDiasServicos;
}
