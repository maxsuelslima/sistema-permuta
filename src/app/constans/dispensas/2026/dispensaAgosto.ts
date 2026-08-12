import { Servico } from '@/app/types/Servico';

const dispensasAgosto: Array<Servico> = [];
const matriculasFerias = ['725245-5', '725257-9', '725265-0', '725261-7'];
Array.from({ length: 30 }, (_, index) => {
    matriculasFerias.forEach((matricula) => {
        const dia = (index + 1).toString();
        dispensasAgosto.push({ dia, matricula });
    });
});
const matriculasCAS = ['707401-8', '707086-1'];
Array.from({ length: 8 }, (_, index) => {
    matriculasCAS.forEach((matricula) => {
        const dia = (index + 1).toString();
        dispensasAgosto.push({ dia, matricula });
    });
    matriculasCAS.forEach((matricula) => {
        const dia = (index + 15).toString();
        dispensasAgosto.push({ dia, matricula });
    });
});
matriculasCAS.forEach((matricula) => {
    const dia = '30';
    dispensasAgosto.push({ dia, matricula });
    dispensasAgosto.push({ dia: '31', matricula });
});
Array.from({ length: 9 }, (_, index) => {
    const matricula = '711045-6';
    const dia = (index + 13).toString();
    dispensasAgosto.push({ dia, matricula });
})
export default dispensasAgosto;
