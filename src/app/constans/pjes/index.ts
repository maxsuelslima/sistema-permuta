import { PJES } from '@/app/types/PJES';
import pjesMaio from './2026/pjesMaio';
import pjesJunho from './2026/pjesJunho';
import pjesJulho from './2026/pjesJulho';
import pjesAgosto from './2026/pjesAgosto';
import pjesSetembro from './2026/pjesSetembro';

const pjes: Record<string, Record<string, Array<PJES>>> = {
    '2026': {
        '5': pjesMaio,
        '6': pjesJunho,
        '7': pjesJulho,
        '8': pjesAgosto,
        '9': pjesSetembro,
    },
};
export default pjes;
