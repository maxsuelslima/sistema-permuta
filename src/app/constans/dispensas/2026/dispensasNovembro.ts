import { Servico } from '@/app/types/Servico';

const dispensasNovembro: Array<Servico> = [];

Array.from({ length: 22 }, (_, index) => {
    const matricula = '726109-8';
    const dia = (index + 9).toString();
    dispensasNovembro.push({ dia, matricula });
});
Array.from({ length: 7 }, (_, index) => {
    const matricula = '725203-0';
    const dia = (index + 24).toString();
    dispensasNovembro.push({ dia, matricula });
});
export default dispensasNovembro;
