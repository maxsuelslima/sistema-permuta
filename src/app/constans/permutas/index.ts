import { Permuta } from '@/app/types/Permuta';
import permutasCorrompidasDezembro from './2025/permutasDezembro';
import permutasNovembro from './2025/permutasNovembro';
import { permutasAbrilAlternativas } from './2026/permutasAbril';
import permutasFevUpdate from './2026/permutasFevereiro';
import permutasJaneiro from './2026/permutasJaneiro';
import { permutasMaio } from './2026/permutasMaio';
import { permutasMarco } from './2026/permutasMarco';
import permutasJunho from './2026/permutasJunho';
import permutasJulho from './2026/permutasJulho';

const permutasCadastradas: Record<string, Record<string, Array<Permuta>>> = {
    '2025': {
        '11': permutasNovembro,
        '12': permutasCorrompidasDezembro,
    },
    '2026': {
        '1': permutasJaneiro,
        '2': permutasFevUpdate,
        '3': permutasMarco,
        '4': permutasAbrilAlternativas,
        '5': permutasMaio,
        '6': permutasJunho,
        '7': permutasJulho,
    },
};
export default permutasCadastradas;
