import { PJES } from '@/app/types/PJES';
import pjesMaio from './2026/pjesMaio';
import pjesJunho from './2026/pjesJunho';

const pjes: Record<string, Record<string, Array<PJES>>> = {
    '2026': {
        '5': pjesMaio,
        '6': pjesJunho,
    },
};
export default pjes;
