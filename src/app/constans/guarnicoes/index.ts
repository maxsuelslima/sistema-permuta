import guarnicoesAbril from './2026/guarnicoeAbril';
import guarnicoesFevereiro from './2026/guarnicoesFevereiro';
import guarnicoesJaneiro from './2026/guarnicoesJaneiro';
import guarnicoesMaio from './2026/guarnicoesMaio';
import guarnicoesMarco from './2026/guarnicoesMarco';

const guarnicoes: Record<string, Record<string, Array<Array<string>>>> = {
    '2026': {
        '1': guarnicoesJaneiro,
        '2': guarnicoesFevereiro,
        '3': guarnicoesMarco,
        '4': guarnicoesAbril,
        '5': guarnicoesMaio,
    },
};
function recuperarGuarnicoesDoMes({ ano, mes }: { ano: string; mes: string }) {
    const guarnicoesDoMes = guarnicoes[ano]?.[mes];
    if (typeof guarnicoesDoMes !== 'undefined') {
        return guarnicoesDoMes;
    }
    const ultimoAnoDisponivel = Object.keys(guarnicoes).sort().reverse()[0];
    const ultimoMesDisponivel = Object.keys(guarnicoes[ultimoAnoDisponivel])
        .sort()
        .reverse()[0];
    return guarnicoes[ultimoAnoDisponivel][ultimoMesDisponivel];
}
export default recuperarGuarnicoesDoMes;
