import recuperarGuarnicoesDoMes from './constans/guarnicoes';
import ServicosMensais from './types/ServicosMensais';

const escalaEspecialFevereiro: ServicosMensais = {
    1: ['2', '6', '10', '14', '18', '22', '26'], // Alfa
    2: ['3', '7', '13', '15', '19', '23', '27'], // Bravo
    3: ['4', '8', '12', '16', '20', '24', '28'], // Charlie
    4: ['1', '5', '9', '11', '17', '21', '25'], // Delta
};

export function gerarEscalaMensalOrdinaria({
    mes,
    ano,
}: {
    mes: string;
    ano: string;
}): ServicosMensais {
    const diasNoMes = new Date(parseInt(ano), parseInt(mes), 0).getDate();
    const dicionarioDiasServicos: Record<string, Array<string>> = {};
    const dataReferencial = new Date(2025, 9, 1); // 1 de outubro de 2025
    const diffDias = Math.floor(
        (new Date(parseInt(ano), parseInt(mes) - 1, 1).getTime() -
            dataReferencial.getTime()) /
            (1000 * 60 * 60 * 24)
    );
    const guarnicoesDoMes = recuperarGuarnicoesDoMes({ ano, mes });
    const indexGuarnicaoInicial = diffDias % guarnicoesDoMes.length;
    for (let dia = 1; dia <= diasNoMes; dia++) {
        if (mes === '2' && ano === '2026') {
            dicionarioDiasServicos[dia.toString()] =
                escalaEspecialFevereiro[parseInt(String(dia)) % 4];
            continue;
        }
        const indexGuarnicao =
            (indexGuarnicaoInicial + dia - 1) % guarnicoesDoMes.length;
        dicionarioDiasServicos[dia.toString()] =
            guarnicoesDoMes[indexGuarnicao];
    }

    return dicionarioDiasServicos;
}

