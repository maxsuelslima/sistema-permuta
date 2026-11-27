import { Servico } from '@/app/types/Servico';

const dispensasDezembro: Array<Servico> = [];
Array.from({ length: 3 }, (_, index) => {
    const dia = (index + 7).toString();
    const matricula = '725103-3';
    dispensasDezembro.push({ dia, matricula });
});
Array.from({ length: 15 }, (_, index) => {
    const dia = (index + 1).toString();
    const matricula = '718121-3';
    dispensasDezembro.push({ dia, matricula });
});
export default dispensasDezembro;
