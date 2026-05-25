import { Servico } from '@/app/types/Servico';

const dispensasNovembro: Array<Servico> = [];

Array.from({ length: 8 }, (_, i) => i + 1).forEach((dia) => {
    dispensasNovembro.push({
        dia: String(dia + 14),
        matricula: '725258-7',
    });
});
Array.from({ length: 25 }, (_, i) => i + 1).forEach((dia) => {
    dispensasNovembro.push({
        dia: String(dia + 5),
        matricula: '725243-9',
    });
});
Array.from({ length: 30 }, (_, i) => i + 1).forEach((dia) => {
    dispensasNovembro.push({
        dia: String(dia),
        matricula: '725247-1',
    });
});

export default dispensasNovembro;
