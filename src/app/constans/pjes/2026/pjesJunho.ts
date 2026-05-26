import { PJES } from '@/app/types/PJES';

let pjesJunho: Array<PJES> = [
    {
        dia: '2',
        matricula: '711045-6',
        turno: 'P',
    },
    {
        dia: '3',
        matricula: '725262-5',
        turno: 'P',
    },
    {
        dia: '7',
        matricula: '725262-5',
        turno: 'P',
    },
    {
        dia: '6',
        matricula: '711045-6',
        turno: 'P',
    },
    {
        dia: '4',
        matricula: '707401-8',
        turno: 'P',
    },
    {
        dia: '8',
        matricula: '707401-8',
        turno: 'P',
    },
    {
        dia: '12',
        matricula: '707401-8',
        turno: 'P',
    },
    {
        dia: '16',
        matricula: '707401-8',
        turno: 'P',
    },
    {
        dia: '20',
        matricula: '707401-8',
        turno: 'P',
    },
    {
        dia: '28',
        matricula: '707401-8',
        turno: 'P',
    },
    {
        dia: '24',
        matricula: '725245-5',
        turno: 'P',
    },
    {
        dia: '17',
        matricula: '725261-7',
        turno: 'P',
    },
    {
        dia: '21',
        matricula: '725261-7',
        turno: 'P',
    },
    {
        dia: '25',
        matricula: '725261-7',
        turno: 'P',
    },
    {
        dia: '29',
        matricula: '725261-7',
        turno: 'P',
    },
    {
        dia: '10',
        matricula: '711045-6',
        turno: 'P',
    },
    {
        dia: '14',
        matricula: '711045-6',
        turno: 'P',
    },
    {
        dia: '18',
        matricula: '711045-6',
        turno: 'P',
    },
    {
        dia: '22',
        matricula: '711045-6',
        turno: 'P',
    },
    {
        dia: '30',
        matricula: '725258-7',
        turno: 'P',
    },
    {
        dia: '26',
        matricula: '725255-2',
        turno: 'P',
    },
    {
        dia: '19',
        matricula: '725262-5',
        turno: 'P',
    },
    {
        dia: '15',
        matricula: '725262-5',
        turno: 'P',
    },
    {
        dia: '11',
        matricula: '718268-6',
        turno: 'P',
    },
    {
        dia: '23',
        matricula: '718268-6',
        turno: 'P',
    },
    {
        dia: '27',
        matricula: '718268-6',
        turno: 'P',
    },
];
function permutar({ pjes, dias }: { pjes: Array<PJES>; dias: Array<string> }) {
    const diaA = dias[0];
    const diaB = dias[1];
    const indexA = pjes.findIndex((pje) => pje.dia === diaA);
    const indexB = pjes.findIndex((pje) => pje.dia === diaB);
    if (indexA === -1 || indexB === -1) {
        throw new Error('Dias não encontrados');
    }
    // troca as matriculas
    const temp = pjes[indexA].matricula;
    pjes[indexA].matricula = pjes[indexB].matricula;
    pjes[indexB].matricula = temp;
    return pjes;
}

[
    ['12', '21'],
    ['17', '28'],
    ['27', '18'],
    ['20', '23'],
    ['4', '11'],
].forEach((dias) => {
    pjesJunho = permutar({ pjes: pjesJunho, dias });
});

export default pjesJunho;
