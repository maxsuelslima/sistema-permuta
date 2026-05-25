import { Servico } from '@/app/types/Servico';
import dispensasDezembro from './2025/dispensasDezembro';
import dispensasNovembro from './2025/dispensasNovembro';
import dispensasJunho from './2026/dispensasJunho';

const dispensas: Record<string, Record<string, Array<Servico>>> = {
    '2025': {
        '11': dispensasNovembro,
        '12': dispensasDezembro,
    },
    '2026': {
        '6': dispensasJunho,
    },
};
export default dispensas;
