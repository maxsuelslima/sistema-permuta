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
    guarnicaoQueIncia,
    servicoExtra,
}: {
    mes: string;
    ano: string;
    guarnicaoQueIncia?: '1' | '2' | '3' | '4';
    servicoExtra?: Record<string, Array<string>>;
}): ServicosMensais {
    const diasNoMes = new Date(parseInt(ano), parseInt(mes), 0).getDate();
    const dicionarioDiasServicos: Record<string, Array<string>> = {};
    const guarnicoesDoMes = recuperarGuarnicoesDoMes({ ano, mes });

    if (typeof guarnicaoQueIncia === 'string') {
        new Array(diasNoMes).fill(0).forEach((_, index) => {
            const dia = index + 1;
            const indexGuarnicao =
                (parseInt(guarnicaoQueIncia) - 1 + index) %
                Object.keys(guarnicoesDoMes).length;
            dicionarioDiasServicos[dia.toString()] =
                guarnicoesDoMes[`${indexGuarnicao}`];
        });
        if (servicoExtra) {
            Object.keys(servicoExtra).forEach((dia) => {
                if (!dicionarioDiasServicos[dia]) {
                    dicionarioDiasServicos[dia] = [];
                }
                dicionarioDiasServicos[dia] = dicionarioDiasServicos[
                    dia
                ].concat(servicoExtra[dia]);
            });
        }
        return dicionarioDiasServicos;
    }
    const dataReferencial = new Date(2025, 9, 1); // 1 de outubro de 2025
    const diffDias = Math.floor(
        (new Date(parseInt(ano), parseInt(mes) - 1, 1).getTime() -
            dataReferencial.getTime()) /
            (1000 * 60 * 60 * 24)
    );
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
    if (servicoExtra) {
        for (const [dia, matriculas] of Object.entries(servicoExtra)) {
            if (!dicionarioDiasServicos[dia]) {
                dicionarioDiasServicos[dia] = [];
            }
            dicionarioDiasServicos[dia].push(...matriculas);
        }
    }
    return dicionarioDiasServicos;
}
