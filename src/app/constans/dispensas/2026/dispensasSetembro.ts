import { Servico } from '@/app/types/Servico';

const dispensasSetembro: Array<Servico> = [];
const matriculasFerias = ['725262-5', '725260-9'];
Array.from({ length: 30 }, (_, i) => {
    const dia = (i + 1).toString();
    matriculasFerias.forEach((matricula) => {
        dispensasSetembro.push({ dia, matricula });
    });
});
const matriculasCAS = ['707401-8', '707086-1'];
Array.from({ length: 4 }, (_, index) => {
    matriculasCAS.forEach((matricula) => {
        dispensasSetembro.push({ dia: (index + 1).toString(), matricula });
    });
});
Array.from({ length: 7 }, (_, index) => {
    matriculasCAS.forEach((matricula) => {
        dispensasSetembro.push({ dia: (index + 13).toString(), matricula });
    });
});
Array.from({ length: 4 }, (_, index) => {
    matriculasCAS.forEach((matricula) => {
        dispensasSetembro.push({ dia: (index + 27).toString(), matricula });
    });
});
export default dispensasSetembro;
