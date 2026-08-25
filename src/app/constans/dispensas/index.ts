import { Servico } from '@/app/types/Servico';
import dispensasDezembro from './2025/dispensasDezembro';
import dispensasNovembro from './2025/dispensasNovembro';
import dispensasJunho from './2026/dispensasJunho';
import dispensasAgosto from './2026/dispensaAgosto';
import dispensasSetembro from './2026/dispensasSetembro';

const dispensas: Record<string, Record<string, Array<Servico>>> = {
    '2025': {
        '11': dispensasNovembro,
        '12': dispensasDezembro,
    },
    '2026': {
        '6': dispensasJunho,
        '8': dispensasAgosto,
        '9': dispensasSetembro,
    },
};
export default dispensas;
