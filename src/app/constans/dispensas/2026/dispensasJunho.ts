import { Servico } from '@/app/types/Servico';

const dispensasJunho: Array<Servico> = [];
Array.from({ length: 15 }, (_, i) => {
    const dia = (i + 16).toString();
    const matricula = '711014-6';
    dispensasJunho.push({ dia, matricula });
});
export default dispensasJunho;
