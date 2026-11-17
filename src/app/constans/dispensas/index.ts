import { Servico } from '@/app/types/Servico';
import dispensasDezembro2025 from './2025/dispensasDezembro';
import dispensasJunho from './2026/dispensasJunho';
import dispensasAgosto from './2026/dispensaAgosto';
import dispensasSetembro from './2026/dispensasSetembro';
import dispensasNovembro from './2026/dispensasNovembro';
import dispensasDezembro from './2026/dispensasDezembro';

const dispensas: Record<string, Record<string, Array<Servico>>> = {
    '2025': {
        '12': dispensasDezembro2025,
    },
    '2026': {
        '6': dispensasJunho,
        '8': dispensasAgosto,
        '9': dispensasSetembro,
        '11': dispensasNovembro,
        '12': dispensasDezembro,
    },
};
export default dispensas;
