import { Servico } from '@/app/types/Servico';

const dispensasDezembro: Array<Servico> = [];
for (let dia = 7; dia <= 15; dia++) {
    dispensasDezembro.push({
        dia: String(dia),
        matricula: '725254-4',
    });
}
export default dispensasDezembro;
