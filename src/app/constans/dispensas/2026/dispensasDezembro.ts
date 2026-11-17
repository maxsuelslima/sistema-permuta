import { Servico } from '@/app/types/Servico';

const dispensasDezembro: Array<Servico> = [];
Array.from({ length: 3 }, (_, index) => {
    const dia = (index + 7).toString();
    const matricula = '725103-3';
    dispensasDezembro.push({ dia, matricula });
});
export default dispensasDezembro;
