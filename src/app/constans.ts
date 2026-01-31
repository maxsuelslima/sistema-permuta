import { Militar } from './types/Militar';
import { Permuta } from './types/Permuta';
import { Servico } from './types/Servico';

const efetivo: Record<string, Militar> = {
    '707401-8': {
        name: 'CLODOALDO',
        id: '707401-8',
        matricula: '707401-8',
        patente: '4',
    },
    '707086-1': {
        name: 'ANCELMO',
        id: '707086-1',
        matricula: '707086-1',
        patente: '4',
    },
    '710298-4': {
        name: 'ANDRÉ BEZERRA',
        id: '710298-4',
        matricula: '710298-4',
        patente: '3',
    },
    '711045-6': {
        name: 'GLAUBER',
        id: '711045-6',
        matricula: '711045-6',
        patente: '2',
    },
    '718268-6': {
        name: 'DANILO',
        id: '718268-6',
        matricula: '718268-6',
        patente: '2',
    },
    '725239-0': {
        name: 'GUILHERME OLIVEIRA',
        id: '725239-0',
        matricula: '725239-0',
        patente: '1',
    },
    '725241-2': {
        name: 'RIBEIRO',
        id: '725241-2',
        matricula: '725241-2',
        patente: '1',
    },
    '725243-9': {
        name: 'COELHO',
        id: '725243-9',
        matricula: '725243-9',
        patente: '1',
    },
    '725244-7': {
        name: 'RHUAN',
        id: '725244-7',
        matricula: '725244-7',
        patente: '1',
    },
    '725245-5': {
        name: 'ANTÔNIO',
        id: '725245-5',
        matricula: '725245-5',
        patente: '1',
    },
    '725246-3': {
        name: 'FÁBIO SANTOS',
        id: '725246-3',
        matricula: '725246-3',
        patente: '1',
    },
    '725247-1': {
        name: 'SANTIAGO',
        id: '725247-1',
        matricula: '725247-1',
        patente: '1',
    },
    '725248-0': {
        name: 'BRUNO HENRIQUE',
        id: '725248-0',
        matricula: '725248-0',
        patente: '1',
    },
    '725250-1': {
        name: 'ANDRADE',
        id: '725250-1',
        matricula: '725250-1',
        patente: '1',
    },
    '725252-8': {
        name: 'CARVALHO',
        id: '725252-8',
        matricula: '725252-8',
        patente: '1',
    },
    '725254-4': {
        name: 'VIEIRA',
        id: '725254-4',
        matricula: '725254-4',
        patente: '1',
    },
    '725255-2': {
        name: 'J. MOURA',
        id: '725255-2',
        matricula: '725255-2',
        patente: '1',
    },
    '725257-9': {
        name: 'PABLO GONÇALVES',
        id: '725257-9',
        matricula: '725257-9',
        patente: '1',
    },
    '725258-7': {
        name: 'LIMA',
        id: '725258-7',
        matricula: '725258-7',
        patente: '1',
    },
    '725260-9': {
        name: 'DIONÍSIO',
        id: '725260-9',
        matricula: '725260-9',
        patente: '1',
    },
    '725261-7': {
        name: 'ÁLVARO SOUZA',
        id: '725261-7',
        matricula: '725261-7',
        patente: '1',
    },
    '725262-5': {
        name: 'JOÃO OLIVEIRA',
        id: '725262-5',
        matricula: '725262-5',
        patente: '1',
    },
    '725263-3': {
        name: 'JOÃO VICTOR',
        id: '725263-3',
        matricula: '725263-3',
        patente: '1',
    },
    '725265-0': {
        name: 'CHALAÇA',
        id: '725265-0',
        matricula: '725265-0',
        patente: '1',
    },
};

export const listaAdventistas = ['725243-9', '725263-3'];
export const listaMotoristas: Record<string, { dataDeInclusao?: Date }> = {
    '707401-8': {
        dataDeInclusao: new Date('2023-11-01'),
    },
    '711045-6': {
        dataDeInclusao: new Date('2024-06-15'),
    },
    '725261-7': {
        dataDeInclusao: new Date('2025-12-01'),
    },
    '711014-6': {
        dataDeInclusao: new Date('2024-01-20'),
    },
};

export const pantenteDictionary: Record<
    string,
    {
        name: string;
        abbreviation: string;
    }
> = {
    '1': {
        name: 'Soldado',
        abbreviation: 'SD',
    },
    '2': {
        name: 'Cabo',
        abbreviation: 'CB',
    },
    '3': {
        name: 'Terceiro Sargento',
        abbreviation: '3° SGT',
    },
    '4': {
        name: 'Segundo Sargento',
        abbreviation: '2° SGT',
    },
    '5': {
        name: 'Primeiro Sargento',
        abbreviation: '1° SGT',
    },
    '6': {
        name: 'Subtenente',
        abbreviation: 'ST',
    },
    '7': {
        name: 'Aspirante',
        abbreviation: 'ASP',
    },
    '8': {
        name: 'Segundo Tenente',
        abbreviation: '2° TEN',
    },
    '9': {
        name: 'Primeiro Tenente',
        abbreviation: '1° TEN',
    },
    '10': {
        name: 'Capitão',
        abbreviation: 'CAP',
    },
    '11': {
        name: 'Major',
        abbreviation: 'MAJ',
    },
    '12': {
        name: 'Tenente Coronel',
        abbreviation: 'TEN CEL',
    },
    '13': {
        name: 'Coronel',
        abbreviation: 'CEL',
    },
};

export const listaPatentes = {
    '725239-0': '1',
    '725241-2': '1',
    '725243-9': '1',
    '725244-7': '1',
    '725245-5': '1',
    '725246-3': '1',
    '725247-1': '1',
    '725248-0': '1',
    '725250-1': '1',
    '725252-8': '1',
    '725254-4': '1',
    '725255-2': '1',
    '725257-9': '1',
    '725258-7': '1',
    '725260-9': '1',
    '725261-7': '1',
    '725262-5': '1',
    '725263-3': '1',
    '725265-0': '1',
};

const guarnicoes: Array<Array<string>> = [
    [
        '725239-0',
        '725241-2',
        /* '725243-9', */ '725244-7',
        '725245-5',
        '725250-1',
    ],
    ['725246-3', '725247-1', '725248-0'],
    ['725254-4', '725255-2', '725257-9', '725252-8' /* '725258-7' */],
    ['725260-9', /* '725261-7', */ '725262-5', /* '725263-3', */ '725265-0'],
];

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

export const permutasNovembro: Array<Permuta> = [
    {
        id: '1761582515650',
        servicos: [
            {
                dia: '2',
                matricula: '725244-7',
            },
            {
                dia: '9',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1761582535604',
        servicos: [
            {
                dia: '4',
                matricula: '725255-2',
            },
            {
                dia: '13',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1761582717137',
        servicos: [
            {
                dia: '29',
                matricula: '725262-5',
            },
            {
                dia: '20',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1761603741984',
        servicos: [
            {
                dia: '13',
                matricula: '725265-0',
            },
            {
                dia: '4',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '1761604375121',
        servicos: [
            {
                dia: '3',
                matricula: '725252-8',
            },
            {
                dia: '1',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1761604378186',
        servicos: [
            {
                dia: '3',
                matricula: '725250-1',
            },
            {
                dia: '1',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1761606973852',
        servicos: [
            {
                dia: '9',
                matricula: '725265-0',
            },
            {
                dia: '2',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1761606980830',
        servicos: [
            {
                dia: '8',
                matricula: '725257-9',
            },
            {
                dia: '14',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1761607010604',
        servicos: [
            {
                dia: '30',
                matricula: '725241-2',
            },
            {
                dia: '24',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '1761607637080',
        servicos: [
            {
                dia: '8',
                matricula: '725255-2',
            },
            {
                dia: '14',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1761607650460',
        servicos: [
            {
                dia: '18',
                matricula: '725244-7',
            },
            {
                dia: '25',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1761607655294',
        servicos: [
            {
                dia: '24',
                matricula: '725255-2',
            },
            {
                dia: '30',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1761614518384',
        servicos: [
            {
                dia: '10',
                matricula: '725239-0',
            },
            {
                dia: '1',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '1761614519794',
        servicos: [
            {
                dia: '6',
                matricula: '725239-0',
            },
            {
                dia: '3',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1761614522796',
        servicos: [
            {
                dia: '14',
                matricula: '725239-0',
            },
            {
                dia: '4',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1761614530793',
        servicos: [
            {
                dia: '5',
                matricula: '725263-3',
            },
            {
                dia: '11',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1761614539030',
        servicos: [
            {
                dia: '8',
                matricula: '725254-4',
            },
            {
                dia: '15',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1761614541412',
        servicos: [
            {
                dia: '13',
                matricula: '725263-3',
            },
            {
                dia: '12',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1761614553562',
        servicos: [
            {
                dia: '26',
                matricula: '725239-0',
            },
            {
                dia: '17',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '1761614563694',
        servicos: [
            {
                dia: '30',
                matricula: '725239-0',
            },
            {
                dia: '20',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1761614576454',
        servicos: [
            {
                dia: '24',
                matricula: '725254-4',
            },
            {
                dia: '29',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '1761614607985',
        servicos: [
            {
                dia: '5',
                matricula: '725260-9',
            },
            {
                dia: '2',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1761659744742',
        servicos: [
            {
                dia: '12',
                matricula: '725258-7',
            },
            {
                dia: '2',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1761659816747',
        servicos: [
            {
                dia: '8',
                matricula: '725258-7',
            },
            {
                dia: '1',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1761659819292',
        servicos: [
            {
                dia: '4',
                matricula: '725258-7',
            },
            {
                dia: '3',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1761659847079',
        servicos: [
            {
                dia: '11',
                matricula: '725246-3',
            },
            {
                dia: '5',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1761659855081',
        servicos: [
            {
                dia: '15',
                matricula: '725246-3',
            },
            {
                dia: '6',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1761659858626',
        servicos: [
            {
                dia: '10',
                matricula: '725245-5',
            },
            {
                dia: '13',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1762440144333',
        servicos: [
            {
                dia: '18',
                matricula: '725245-5',
            },
            {
                dia: '27',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1762440893886',
        servicos: [
            {
                dia: '17',
                matricula: '725265-0',
            },
            {
                dia: '23',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1762440911341',
        servicos: [
            {
                dia: '25',
                matricula: '725265-0',
            },
            {
                dia: '24',
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '1762440915330',
        servicos: [
            {
                dia: '29',
                matricula: '725265-0',
            },
            {
                dia: '22',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1762440961580',
        servicos: [
            {
                dia: '25',
                matricula: '725261-7',
            },
            {
                dia: '18',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1763075222456',
        servicos: [
            {
                dia: '28',
                matricula: '725258-7',
            },
            {
                dia: '26',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1763210967407',
        servicos: [
            {
                dia: '20',
                matricula: '725257-9',
            },
            {
                dia: '15',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1763211014603',
        servicos: [
            {
                dia: '16',
                matricula: '725254-4',
            },
            {
                dia: '27',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1763211057789',
        servicos: [
            {
                dia: '22',
                matricula: '725239-0',
            },
            {
                dia: '19',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1763211075745',
        servicos: [
            {
                dia: '17',
                matricula: '725260-9',
            },
            {
                dia: '23',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1763211946867',
        servicos: [
            {
                dia: '21',
                matricula: '725263-3',
            },
            {
                dia: '23',
                matricula: '725250-1',
            },
        ],
    },
];
const permutasDezembro: Array<Permuta> = [
    {
        id: '1764353105160',
        servicos: [
            {
                dia: '13',
                matricula: '725247-1',
            },
            {
                dia: '4',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1764353113034',
        servicos: [
            {
                dia: '29',
                matricula: '725247-1',
            },
            {
                dia: '20',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1764353198721',
        servicos: [
            {
                dia: '17',
                matricula: '725252-8',
            },
            {
                dia: '28',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1764353216489',
        servicos: [
            {
                dia: '4',
                matricula: '725239-0',
            },
            {
                dia: '7',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764353225857',
        servicos: [
            {
                dia: '9',
                matricula: '725252-8',
            },
            {
                dia: '12',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1764353287858',
        servicos: [
            {
                dia: '8',
                matricula: '725241-2',
            },
            {
                dia: '3',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '1764353311149',
        servicos: [
            {
                dia: '16',
                matricula: '725241-2',
            },
            {
                dia: '6',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '1764353347217',
        servicos: [
            {
                dia: '18',
                matricula: '725257-9',
            },
            {
                dia: '28',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1764353366395',
        servicos: [
            {
                dia: '19',
                matricula: '725261-7',
            },
            {
                dia: '24',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1764353425704',
        servicos: [
            {
                dia: '7',
                matricula: '725262-5',
            },
            {
                dia: '12',
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '1764353437293',
        servicos: [
            {
                dia: '16',
                matricula: '725243-9',
            },
            {
                dia: '11',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1764353448406',
        servicos: [
            {
                dia: '4',
                matricula: '725243-9',
            },
            {
                dia: '9',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1764353476501',
        servicos: [
            {
                dia: '28',
                matricula: '725243-9',
            },
            {
                dia: '23',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1764353496970',
        servicos: [
            {
                dia: '25',
                matricula: '725246-3',
            },
            {
                dia: '20',
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '1764353502705',
        servicos: [
            {
                dia: '13',
                matricula: '725246-3',
            },
            {
                dia: '19',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1764353511129',
        servicos: [
            {
                dia: '3',
                matricula: '725262-5',
            },
            {
                dia: '29',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1764353549114',
        servicos: [
            {
                dia: '2',
                matricula: '725258-7',
            },
            {
                dia: '9',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1764353553630',
        servicos: [
            {
                dia: '8',
                matricula: '725244-7',
            },
            {
                dia: '14',
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '1764353559294',
        servicos: [
            {
                dia: '18',
                matricula: '725258-7',
            },
            {
                dia: '25',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1764353566580',
        servicos: [
            {
                dia: '24',
                matricula: '725244-7',
            },
            {
                dia: '30',
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '1764353656276',
        servicos: [
            {
                dia: '24',
                matricula: '725245-5',
            },
            {
                dia: '29',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1764353728866',
        servicos: [
            {
                dia: '10',
                matricula: '725257-9',
            },
            {
                dia: '15',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '1764353791724',
        servicos: [
            {
                dia: '31',
                matricula: '725263-3',
            },
            {
                dia: '25',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1764353805536',
        servicos: [
            {
                dia: '27',
                matricula: '725263-3',
            },
            {
                dia: '21',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1764353847199',
        servicos: [
            {
                dia: '19',
                matricula: '725263-3',
            },
            {
                dia: '24',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1764353880323',
        servicos: [
            {
                dia: '22',
                matricula: '725257-9',
            },
            {
                dia: '31',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764353901947',
        servicos: [
            {
                dia: '26',
                matricula: '725257-9',
            },
            {
                dia: '27',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764353973117',
        servicos: [
            {
                dia: '11',
                matricula: '725261-7',
            },
            {
                dia: '1',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1764353975762',
        servicos: [
            {
                dia: '5',
                matricula: '725252-8',
            },
            {
                dia: '15',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764354117179',
        servicos: [
            {
                dia: '3',
                matricula: '725260-9',
            },
            {
                dia: '14',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354128180',
        servicos: [
            {
                dia: '30',
                matricula: '725265-0',
            },
            {
                dia: '19',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1764354156704',
        servicos: [
            {
                dia: '7',
                matricula: '725260-9',
            },
            {
                dia: '13',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1764354191406',
        servicos: [
            {
                dia: '23',
                matricula: '725260-9',
            },
            {
                dia: '29',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1764354232516',
        servicos: [
            {
                dia: '1',
                matricula: '725248-0',
            },
            {
                dia: '6',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354234678',
        servicos: [
            {
                dia: '5',
                matricula: '725248-0',
            },
            {
                dia: '10',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354244512',
        servicos: [
            {
                dia: '17',
                matricula: '725248-0',
            },
            {
                dia: '22',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354246057',
        servicos: [
            {
                dia: '26',
                matricula: '725265-0',
            },
            {
                dia: '21',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1764354549936',
        servicos: [
            {
                dia: '1',
                matricula: '725250-1',
            },
            {
                dia: '6',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354563428',
        servicos: [
            {
                dia: '4',
                matricula: '725245-5',
            },
            {
                dia: '14',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354565163',
        servicos: [
            {
                dia: '5',
                matricula: '725250-1',
            },
            {
                dia: '10',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354569219',
        servicos: [
            {
                dia: '8',
                matricula: '725245-5',
            },
            {
                dia: '13',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1764354586493',
        servicos: [
            {
                dia: '17',
                matricula: '725250-1',
            },
            {
                dia: '22',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354593127',
        servicos: [
            {
                dia: '16',
                matricula: '725245-5',
            },
            {
                dia: '30',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354598094',
        servicos: [
            {
                dia: '20',
                matricula: '725245-5',
            },
            {
                dia: '26',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354691412',
        servicos: [
            {
                dia: '2',
                matricula: '725257-9',
            },
            {
                dia: '12',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1764357325971',
        servicos: [
            {
                dia: '6',
                matricula: '725254-4',
            },
            {
                dia: '1',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1764357416480',
        servicos: [
            {
                dia: '17',
                matricula: '725247-1',
            },
            {
                dia: '22',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1764357489507',
        servicos: [
            {
                dia: '31',
                matricula: '725260-9',
            },
            {
                dia: '26',
                matricula: '725254-4',
            },
        ],
    },
];
const permutasCorrompidasDezembro = [
    {
        id: '1764353198721',
        servicos: [
            {
                dia: '17',
                matricula: '725252-8',
            },
            {
                dia: '28',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1764353216489',
        servicos: [
            {
                dia: '4',
                matricula: '725239-0',
            },
            {
                dia: '7',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764353225857',
        servicos: [
            {
                dia: '9',
                matricula: '725252-8',
            },
            {
                dia: '12',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1764353425704',
        servicos: [
            {
                dia: '7',
                matricula: '725262-5',
            },
            {
                dia: '12',
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '1764353437293',
        servicos: [
            {
                dia: '16',
                matricula: '725243-9',
            },
            {
                dia: '11',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1764353476501',
        servicos: [
            {
                dia: '28',
                matricula: '725243-9',
            },
            {
                dia: '23',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1764353656276',
        servicos: [
            {
                dia: '24',
                matricula: '725245-5',
            },
            {
                dia: '29',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1764353728866',
        servicos: [
            {
                dia: '10',
                matricula: '725257-9',
            },
            {
                dia: '15',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '1764353791724',
        servicos: [
            {
                dia: '31',
                matricula: '725263-3',
            },
            {
                dia: '25',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1764353805536',
        servicos: [
            {
                dia: '27',
                matricula: '725263-3',
            },
            {
                dia: '21',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1764353847199',
        servicos: [
            {
                dia: '19',
                matricula: '725263-3',
            },
            {
                dia: '24',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1764353880323',
        servicos: [
            {
                dia: '22',
                matricula: '725257-9',
            },
            {
                dia: '31',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764353901947',
        servicos: [
            {
                dia: '26',
                matricula: '725257-9',
            },
            {
                dia: '27',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764353973117',
        servicos: [
            {
                dia: '11',
                matricula: '725261-7',
            },
            {
                dia: '1',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1764353975762',
        servicos: [
            {
                dia: '5',
                matricula: '725252-8',
            },
            {
                dia: '15',
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '1764354117179',
        servicos: [
            {
                dia: '3',
                matricula: '725260-9',
            },
            {
                dia: '14',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354128180',
        servicos: [
            {
                dia: '30',
                matricula: '725265-0',
            },
            {
                dia: '19',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1764354156704',
        servicos: [
            {
                dia: '7',
                matricula: '725260-9',
            },
            {
                dia: '13',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1764354191406',
        servicos: [
            {
                dia: '23',
                matricula: '725260-9',
            },
            {
                dia: '29',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1764354232516',
        servicos: [
            {
                dia: '1',
                matricula: '725248-0',
            },
            {
                dia: '6',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354234678',
        servicos: [
            {
                dia: '5',
                matricula: '725248-0',
            },
            {
                dia: '10',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354244512',
        servicos: [
            {
                dia: '17',
                matricula: '725248-0',
            },
            {
                dia: '22',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1764354246057',
        servicos: [
            {
                dia: '26',
                matricula: '725265-0',
            },
            {
                dia: '21',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1764354549936',
        servicos: [
            {
                dia: '1',
                matricula: '725250-1',
            },
            {
                dia: '6',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354563428',
        servicos: [
            {
                dia: '4',
                matricula: '725245-5',
            },
            {
                dia: '14',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354565163',
        servicos: [
            {
                dia: '5',
                matricula: '725250-1',
            },
            {
                dia: '10',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354569219',
        servicos: [
            {
                dia: '8',
                matricula: '725245-5',
            },
            {
                dia: '13',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1764354586493',
        servicos: [
            {
                dia: '17',
                matricula: '725250-1',
            },
            {
                dia: '22',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354593127',
        servicos: [
            {
                dia: '16',
                matricula: '725245-5',
            },
            {
                dia: '30',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1764354598094',
        servicos: [
            {
                dia: '20',
                matricula: '725245-5',
            },
            {
                dia: '26',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725241-2-1764357520949',
        servicos: [
            {
                dia: '8',
                matricula: '725244-7',
            },
            {
                dia: '3',
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725241-2-1764357520949',
        servicos: [
            {
                dia: '16',
                matricula: '725244-7',
            },
            {
                dia: '6',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725241-2-1764357520949',
        servicos: [
            {
                dia: '18',
                matricula: '725257-9',
            },
            {
                dia: '28',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725241-2-1764357520949',
        servicos: [
            {
                dia: '19',
                matricula: '725261-7',
            },
            {
                dia: '24',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725241-2-1764357520949',
        servicos: [
            {
                dia: '2',
                matricula: '725257-9',
            },
            {
                dia: '12',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-1764357520949',
        servicos: [
            {
                dia: '8',
                matricula: '725241-2',
                id: '725241-2-1764357520949',
            },
            {
                dia: '14',
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1764357520949',
        servicos: [
            {
                dia: '24',
                matricula: '725241-2',
                id: '725241-2-1764357520949',
            },
            {
                dia: '30',
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725246-3-1764357532628',
        servicos: [
            {
                dia: '4',
                matricula: '725243-9',
            },
            {
                dia: '9',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725246-3-1764357532628',
        servicos: [
            {
                dia: '25',
                matricula: '725247-1',
            },
            {
                dia: '20',
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-1764357532628',
        servicos: [
            {
                dia: '13',
                matricula: '725247-1',
            },
            {
                dia: '19',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725246-3-1764357532628',
        servicos: [
            {
                dia: '3',
                matricula: '725262-5',
            },
            {
                dia: '29',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725247-1-1764357532628',
        servicos: [
            {
                dia: '2',
                matricula: '725258-7',
            },
            {
                dia: '9',
                matricula: '725246-3',
                id: '725246-3-1764357532628',
            },
        ],
    },
    {
        id: '725247-1-1764357532628',
        servicos: [
            {
                dia: '18',
                matricula: '725258-7',
            },
            {
                dia: '25',
                matricula: '725246-3',
                id: '725246-3-1764357532628',
            },
        ],
    },
    {
        id: '725247-1-1764357532628',
        servicos: [
            {
                dia: '6',
                matricula: '725254-4',
            },
            {
                dia: '1',
                matricula: '725246-3',
                id: '725246-3-1764357532628',
            },
        ],
    },
    {
        id: '725247-1-1764357532628',
        servicos: [
            {
                dia: '17',
                matricula: '725246-3',
                id: '725246-3-1764357532628',
            },
            {
                dia: '22',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725247-1-1764357532628',
        servicos: [
            {
                dia: '13',
                matricula: '725246-3',
                id: '725246-3-1764357532628',
            },
            {
                dia: '4',
                matricula: '725241-2',
                id: '725241-2-1764357520949',
            },
        ],
    },
    {
        id: '725247-1-1764357532628',
        servicos: [
            {
                dia: '29',
                matricula: '725246-3',
                id: '725246-3-1764357532628',
            },
            {
                dia: '20',
                matricula: '725241-2',
                id: '725241-2-1764357520949',
            },
        ],
    },
    {
        id: '1764357547627',
        servicos: [
            {
                dia: '31',
                matricula: '725260-9',
            },
            {
                dia: '26',
                matricula: '725254-4',
            },
        ],
    },
];
/*
 * caso chalaça permaneça na guarnicao charlie
 */
const permutasJaneiro = [
    {
        id: '1766769922832',
        servicos: [
            {
                dia: '1',
                matricula: '725239-0',
            },
            {
                dia: '6',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1766769924440',
        servicos: [
            {
                dia: '5',
                matricula: '725239-0',
            },
            {
                dia: '10',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1766769935359',
        servicos: [
            {
                dia: '17',
                matricula: '725239-0',
            },
            {
                dia: '22',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1766769937279',
        servicos: [
            {
                dia: '21',
                matricula: '725239-0',
            },
            {
                dia: '26',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1766770724208',
        servicos: [
            {
                dia: '2',
                matricula: '725248-0',
            },
            {
                dia: '9',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1766770726099',
        servicos: [
            {
                dia: '3',
                matricula: '725255-2',
            },
            {
                dia: '13',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1766770727781',
        servicos: [
            {
                dia: '7',
                matricula: '725255-2',
            },
            {
                dia: '14',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1766770730067',
        servicos: [
            {
                dia: '18',
                matricula: '725248-0',
            },
            {
                dia: '25',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1766770733453',
        servicos: [
            {
                dia: '19',
                matricula: '725255-2',
            },
            {
                dia: '29',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1766770738229',
        servicos: [
            {
                dia: '23',
                matricula: '725255-2',
            },
            {
                dia: '30',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1766774892644',
        servicos: [
            {
                dia: '4',
                matricula: '725262-5',
            },
            {
                dia: '14',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1766774898088',
        servicos: [
            {
                dia: '13',
                matricula: '725239-0',
            },
            {
                dia: '8',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1766774903054',
        servicos: [
            {
                dia: '20',
                matricula: '725262-5',
            },
            {
                dia: '30',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1766774906458',
        servicos: [
            {
                dia: '29',
                matricula: '725239-0',
            },
            {
                dia: '24',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1766774959030',
        servicos: [
            {
                dia: '15',
                matricula: '725254-4',
            },
            {
                dia: '1',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1766774971440',
        servicos: [
            {
                dia: '11',
                matricula: '725254-4',
            },
            {
                dia: '5',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1766774974157',
        servicos: [
            {
                dia: '2',
                matricula: '725250-1',
            },
            {
                dia: '7',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1766774977228',
        servicos: [
            {
                dia: '14',
                matricula: '725250-1',
            },
            {
                dia: '9',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1766775005235',
        servicos: [
            {
                dia: '31',
                matricula: '725254-4',
            },
            {
                dia: '17',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1766775009450',
        servicos: [
            {
                dia: '21',
                matricula: '725245-5',
            },
            {
                dia: '27',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1766775020175',
        servicos: [
            {
                dia: '18',
                matricula: '725250-1',
            },
            {
                dia: '23',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1766775023251',
        servicos: [
            {
                dia: '25',
                matricula: '725245-5',
            },
            {
                dia: '30',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1766775202464',
        servicos: [
            {
                dia: '10',
                matricula: '725246-3',
            },
            {
                dia: '4',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1766775208695',
        servicos: [
            {
                dia: '14',
                matricula: '725246-3',
            },
            {
                dia: '3',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '1766775213686',
        servicos: [
            {
                dia: '7',
                matricula: '725257-9',
            },
            {
                dia: '12',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1766775226913',
        servicos: [
            {
                dia: '16',
                matricula: '725260-9',
            },
            {
                dia: '11',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '1766775231922',
        servicos: [
            {
                dia: '19',
                matricula: '725257-9',
            },
            {
                dia: '30',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1766775233723',
        servicos: [
            {
                dia: '26',
                matricula: '725246-3',
            },
            {
                dia: '20',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1766775236041',
        servicos: [
            {
                dia: '23',
                matricula: '725257-9',
            },
            {
                dia: '28',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1766775975783',
        servicos: [
            {
                dia: '1',
                matricula: '725244-7',
            },
            {
                dia: '10',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1766775977748',
        servicos: [
            {
                dia: '5',
                matricula: '725244-7',
            },
            {
                dia: '14',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1766775980899',
        servicos: [
            {
                dia: '4',
                matricula: '725265-0',
            },
            {
                dia: '6',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1766775984459',
        servicos: [
            {
                dia: '9',
                matricula: '725244-7',
            },
            {
                dia: '12',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1766776023095',
        servicos: [
            {
                dia: '16',
                matricula: '725265-0',
            },
            {
                dia: '26',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1766776030955',
        servicos: [
            {
                dia: '17',
                matricula: '725244-7',
            },
            {
                dia: '30',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1766776041359',
        servicos: [
            {
                dia: '20',
                matricula: '725265-0',
            },
            {
                dia: '22',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1766776048882',
        servicos: [
            {
                dia: '28',
                matricula: '725265-0',
            },
            {
                dia: '25',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1766776061806',
        servicos: [
            {
                dia: '21',
                matricula: '725244-7',
            },
            {
                dia: '26',
                matricula: '725248-0',
            },
        ],
    },
];

const permutasFevereiro = [
    {
        id: '1769789161215',
        servicos: [
            {
                dia: '2',
                matricula: '725250-1',
            },
            {
                dia: '17',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789163705',
        servicos: [
            {
                dia: '4',
                matricula: '725255-2',
            },
            {
                dia: '21',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789169794',
        servicos: [
            {
                dia: '6',
                matricula: '725250-1',
            },
            {
                dia: '13',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789173958',
        servicos: [
            {
                dia: '8',
                matricula: '725255-2',
            },
            {
                dia: '25',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789179561',
        servicos: [
            {
                dia: '12',
                matricula: '725255-2',
            },
            {
                dia: '22',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1769789184301',
        servicos: [
            {
                dia: '26',
                matricula: '725250-1',
            },
            {
                dia: '20',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1769790156014',
        servicos: [
            {
                dia: '1',
                matricula: '725265-0',
            },
            {
                dia: '26',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790159921',
        servicos: [
            {
                dia: '3',
                matricula: '725248-0',
            },
            {
                dia: '18',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790161805',
        servicos: [
            {
                dia: '5',
                matricula: '725265-0',
            },
            {
                dia: '22',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790169574',
        servicos: [
            {
                dia: '7',
                matricula: '725248-0',
            },
            {
                dia: '10',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790176923',
        servicos: [
            {
                dia: '9',
                matricula: '725265-0',
            },
            {
                dia: '27',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790181225',
        servicos: [
            {
                dia: '13',
                matricula: '725265-0',
            },
            {
                dia: '23',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790184290',
        servicos: [
            {
                dia: '17',
                matricula: '725265-0',
            },
            {
                dia: '19',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790250485',
        servicos: [
            {
                dia: '4',
                matricula: '725257-9',
            },
            {
                dia: '26',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1769790255267',
        servicos: [
            {
                dia: '3',
                matricula: '725246-3',
            },
            {
                dia: '18',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1769790258065',
        servicos: [
            {
                dia: '22',
                matricula: '725239-0',
            },
            {
                dia: '8',
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '1769790263680',
        servicos: [
            {
                dia: '7',
                matricula: '725246-3',
            },
            {
                dia: '10',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1769790266911',
        servicos: [
            {
                dia: '12',
                matricula: '725257-9',
            },
            {
                dia: '27',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769790268795',
        servicos: [
            {
                dia: '20',
                matricula: '725257-9',
            },
            {
                dia: '23',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769790487206',
        servicos: [
            {
                dia: '1',
                matricula: '725260-9',
            },
            {
                dia: '12',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769790514198',
        servicos: [
            {
                dia: '2',
                matricula: '725244-7',
            },
            {
                dia: '28',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769790535744',
        servicos: [
            {
                dia: '5',
                matricula: '725260-9',
            },
            {
                dia: '20',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769790540439',
        servicos: [
            {
                dia: '6',
                matricula: '725244-7',
            },
            {
                dia: '24',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769790548055',
        servicos: [
            {
                dia: '10',
                matricula: '725244-7',
            },
            {
                dia: '25',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769790554998',
        servicos: [
            {
                dia: '21',
                matricula: '725260-9',
            },
            {
                dia: '18',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1769790591285',
        servicos: [
            {
                dia: '28',
                matricula: '725254-4',
            },
            {
                dia: '2',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769790598108',
        servicos: [
            {
                dia: '6',
                matricula: '725245-5',
            },
            {
                dia: '24',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790601531',
        servicos: [
            {
                dia: '3',
                matricula: '725247-1',
            },
            {
                dia: '12',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790603125',
        servicos: [
            {
                dia: '7',
                matricula: '725247-1',
            },
            {
                dia: '20',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790609310',
        servicos: [
            {
                dia: '10',
                matricula: '725245-5',
            },
            {
                dia: '27',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1769790611111',
        servicos: [
            {
                dia: '23',
                matricula: '725247-1',
            },
            {
                dia: '18',
                matricula: '725245-5',
            },
        ],
    },
];
const permutasFevCarvalho = [
    {
        id: '1769789161215',
        servicos: [
            {
                dia: '2',
                matricula: '725250-1',
            },
            {
                dia: '17',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789163705',
        servicos: [
            {
                dia: '4',
                matricula: '725255-2',
            },
            {
                dia: '21',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789169794',
        servicos: [
            {
                dia: '6',
                matricula: '725250-1',
            },
            {
                dia: '13',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789173958',
        servicos: [
            {
                dia: '8',
                matricula: '725255-2',
            },
            {
                dia: '25',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789179561',
        servicos: [
            {
                dia: '12',
                matricula: '725255-2',
            },
            {
                dia: '22',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1769789184301',
        servicos: [
            {
                dia: '26',
                matricula: '725250-1',
            },
            {
                dia: '20',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1769790156014',
        servicos: [
            {
                dia: '1',
                matricula: '725265-0',
            },
            {
                dia: '26',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790159921',
        servicos: [
            {
                dia: '3',
                matricula: '725248-0',
            },
            {
                dia: '18',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790161805',
        servicos: [
            {
                dia: '5',
                matricula: '725265-0',
            },
            {
                dia: '22',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790169574',
        servicos: [
            {
                dia: '7',
                matricula: '725248-0',
            },
            {
                dia: '10',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790176923',
        servicos: [
            {
                dia: '9',
                matricula: '725265-0',
            },
            {
                dia: '27',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790181225',
        servicos: [
            {
                dia: '13',
                matricula: '725265-0',
            },
            {
                dia: '23',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790184290',
        servicos: [
            {
                dia: '17',
                matricula: '725265-0',
            },
            {
                dia: '19',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790591285',
        servicos: [
            {
                dia: '28',
                matricula: '725254-4',
            },
            {
                dia: '2',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769790598108',
        servicos: [
            {
                dia: '6',
                matricula: '725245-5',
            },
            {
                dia: '24',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790601531',
        servicos: [
            {
                dia: '3',
                matricula: '725247-1',
            },
            {
                dia: '12',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790603125',
        servicos: [
            {
                dia: '7',
                matricula: '725247-1',
            },
            {
                dia: '20',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790609310',
        servicos: [
            {
                dia: '10',
                matricula: '725245-5',
            },
            {
                dia: '27',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1769790611111',
        servicos: [
            {
                dia: '23',
                matricula: '725247-1',
            },
            {
                dia: '18',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769823555004',
        servicos: [
            {
                dia: '28',
                matricula: '725252-8',
            },
            {
                dia: '1',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769823563800',
        servicos: [
            {
                dia: '24',
                matricula: '725252-8',
            },
            {
                dia: '5',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769823566705',
        servicos: [
            {
                dia: '2',
                matricula: '725244-7',
            },
            {
                dia: '8',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769823574519',
        servicos: [
            {
                dia: '9',
                matricula: '725260-9',
            },
            {
                dia: '26',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1769823593361',
        servicos: [
            {
                dia: '18',
                matricula: '725244-7',
            },
            {
                dia: '12',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769823596238',
        servicos: [
            {
                dia: '22',
                matricula: '725244-7',
            },
            {
                dia: '13',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769823600326',
        servicos: [
            {
                dia: '17',
                matricula: '725260-9',
            },
            {
                dia: '20',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769824119983',
        servicos: [
            {
                dia: '2',
                matricula: '725239-0',
            },
            {
                dia: '11',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824122842',
        servicos: [
            {
                dia: '6',
                matricula: '725239-0',
            },
            {
                dia: '19',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824126515',
        servicos: [
            {
                dia: '4',
                matricula: '725257-9',
            },
            {
                dia: '23',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824129487',
        servicos: [
            {
                dia: '8',
                matricula: '725257-9',
            },
            {
                dia: '27',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824133432',
        servicos: [
            {
                dia: '12',
                matricula: '725257-9',
            },
            {
                dia: '26',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1769824137538',
        servicos: [
            {
                dia: '20',
                matricula: '725257-9',
            },
            {
                dia: '22',
                matricula: '725239-0',
            },
        ],
    },
];
const permutasFevUpdate = [
    {
        id: '1769877506408',
        servicos: [
            {
                dia: '3',
                matricula: '725248-0',
            },
            {
                dia: '10',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769877508763',
        servicos: [
            {
                dia: '7',
                matricula: '725248-0',
            },
            {
                dia: '18',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769877512094',
        servicos: [
            {
                dia: '1',
                matricula: '725265-0',
            },
            {
                dia: '22',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769877515269',
        servicos: [
            {
                dia: '5',
                matricula: '725265-0',
            },
            {
                dia: '26',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769877520124',
        servicos: [
            {
                dia: '9',
                matricula: '725265-0',
            },
            {
                dia: '27',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769877522949',
        servicos: [
            {
                dia: '23',
                matricula: '725248-0',
            },
            {
                dia: '11',
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '1769877529942',
        servicos: [
            {
                dia: '17',
                matricula: '725265-0',
            },
            {
                dia: '19',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769877648069',
        servicos: [
            {
                dia: '6',
                matricula: '725250-1',
            },
            {
                dia: '11',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769877652457',
        servicos: [
            {
                dia: '4',
                matricula: '725255-2',
            },
            {
                dia: '25',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769877658108',
        servicos: [
            {
                dia: '8',
                matricula: '725255-2',
            },
            {
                dia: '21',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769877668803',
        servicos: [
            {
                dia: '26',
                matricula: '725250-1',
            },
            {
                dia: '12',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1769877681779',
        servicos: [
            {
                dia: '17',
                matricula: '725262-5',
            },
            {
                dia: '2',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1769877687306',
        servicos: [
            {
                dia: '20',
                matricula: '725255-2',
            },
            {
                dia: '22',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1769877758343',
        servicos: [
            {
                dia: '2',
                matricula: '725244-7',
            },
            {
                dia: '8',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769877763156',
        servicos: [
            {
                dia: '1',
                matricula: '725260-9',
            },
            {
                dia: '20',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769877769337',
        servicos: [
            {
                dia: '5',
                matricula: '725260-9',
            },
            {
                dia: '28',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769877775754',
        servicos: [
            {
                dia: '9',
                matricula: '725260-9',
            },
            {
                dia: '26',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1769877793616',
        servicos: [
            {
                dia: '12',
                matricula: '725252-8',
            },
            {
                dia: '18',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1769877796505',
        servicos: [
            {
                dia: '22',
                matricula: '725244-7',
            },
            {
                dia: '11',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769877799118',
        servicos: [
            {
                dia: '24',
                matricula: '725252-8',
            },
            {
                dia: '17',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769877827762',
        servicos: [
            {
                dia: '3',
                matricula: '725247-1',
            },
            {
                dia: '12',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769877830307',
        servicos: [
            {
                dia: '7',
                matricula: '725247-1',
            },
            {
                dia: '20',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769877832857',
        servicos: [
            {
                dia: '2',
                matricula: '725245-5',
            },
            {
                dia: '24',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769877835362',
        servicos: [
            {
                dia: '28',
                matricula: '725254-4',
            },
            {
                dia: '6',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769877844235',
        servicos: [
            {
                dia: '10',
                matricula: '725245-5',
            },
            {
                dia: '27',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1769877847268',
        servicos: [
            {
                dia: '23',
                matricula: '725247-1',
            },
            {
                dia: '18',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769878490893',
        servicos: [
            {
                dia: '2',
                matricula: '725239-0',
            },
            {
                dia: '13',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769878493469',
        servicos: [
            {
                dia: '6',
                matricula: '725239-0',
            },
            {
                dia: '19',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769878497386',
        servicos: [
            {
                dia: '4',
                matricula: '725257-9',
            },
            {
                dia: '23',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769878500036',
        servicos: [
            {
                dia: '8',
                matricula: '725257-9',
            },
            {
                dia: '27',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769878503664',
        servicos: [
            {
                dia: '12',
                matricula: '725257-9',
            },
            {
                dia: '26',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1769878506905',
        servicos: [
            {
                dia: '22',
                matricula: '725239-0',
            },
            {
                dia: '20',
                matricula: '725257-9',
            },
        ],
    },
];
const permutasFevBugadas = [
    {
        id: '1769789161215',
        servicos: [
            {
                dia: '2',
                matricula: '725250-1',
            },
            {
                dia: '17',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789163705',
        servicos: [
            {
                dia: '4',
                matricula: '725255-2',
            },
            {
                dia: '21',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789173958',
        servicos: [
            {
                dia: '8',
                matricula: '725255-2',
            },
            {
                dia: '25',
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '1769789179561',
        servicos: [
            {
                dia: '12',
                matricula: '725255-2',
            },
            {
                dia: '22',
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '1769789184301',
        servicos: [
            {
                dia: '26',
                matricula: '725250-1',
            },
            {
                dia: '20',
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '1769790156014',
        servicos: [
            {
                dia: '1',
                matricula: '725265-0',
            },
            {
                dia: '26',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790159921',
        servicos: [
            {
                dia: '3',
                matricula: '725248-0',
            },
            {
                dia: '18',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790161805',
        servicos: [
            {
                dia: '5',
                matricula: '725265-0',
            },
            {
                dia: '22',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790169574',
        servicos: [
            {
                dia: '7',
                matricula: '725248-0',
            },
            {
                dia: '10',
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '1769790176923',
        servicos: [
            {
                dia: '9',
                matricula: '725265-0',
            },
            {
                dia: '27',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790184290',
        servicos: [
            {
                dia: '17',
                matricula: '725265-0',
            },
            {
                dia: '19',
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '1769790591285',
        servicos: [
            {
                dia: '28',
                matricula: '725254-4',
            },
            {
                dia: '2',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769790598108',
        servicos: [
            {
                dia: '6',
                matricula: '725245-5',
            },
            {
                dia: '24',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790601531',
        servicos: [
            {
                dia: '3',
                matricula: '725247-1',
            },
            {
                dia: '12',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790603125',
        servicos: [
            {
                dia: '7',
                matricula: '725247-1',
            },
            {
                dia: '20',
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '1769790609310',
        servicos: [
            {
                dia: '10',
                matricula: '725245-5',
            },
            {
                dia: '27',
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '1769790611111',
        servicos: [
            {
                dia: '23',
                matricula: '725247-1',
            },
            {
                dia: '18',
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '1769823555004',
        servicos: [
            {
                dia: '28',
                matricula: '725252-8',
            },
            {
                dia: '1',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769823563800',
        servicos: [
            {
                dia: '24',
                matricula: '725252-8',
            },
            {
                dia: '5',
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '1769823566705',
        servicos: [
            {
                dia: '2',
                matricula: '725244-7',
            },
            {
                dia: '8',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769823574519',
        servicos: [
            {
                dia: '9',
                matricula: '725260-9',
            },
            {
                dia: '26',
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '1769823593361',
        servicos: [
            {
                dia: '18',
                matricula: '725244-7',
            },
            {
                dia: '12',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769823600326',
        servicos: [
            {
                dia: '17',
                matricula: '725260-9',
            },
            {
                dia: '20',
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '1769824122842',
        servicos: [
            {
                dia: '6',
                matricula: '725239-0',
            },
            {
                dia: '19',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824126515',
        servicos: [
            {
                dia: '4',
                matricula: '725257-9',
            },
            {
                dia: '23',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824129487',
        servicos: [
            {
                dia: '8',
                matricula: '725257-9',
            },
            {
                dia: '27',
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '1769824133432',
        servicos: [
            {
                dia: '12',
                matricula: '725257-9',
            },
            {
                dia: '26',
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '1769824137538',
        servicos: [
            {
                dia: '20',
                matricula: '725257-9',
            },
            {
                dia: '22',
                matricula: '725239-0',
            },
        ],
    },
];

const dispensasDezembro: Array<Servico> = [];
for (let dia = 7; dia <= 15; dia++) {
    dispensasDezembro.push({
        dia: String(dia),
        matricula: '725254-4',
    });
}
const pjesDezembro: Array<Servico> = [];
const permutasCadastradas: Record<string, Record<string, Array<Permuta>>> = {
    '2025': {
        '11': permutasNovembro,
        '12': permutasCorrompidasDezembro,
    },
    '2026': {
        '1': permutasJaneiro,
        '2': permutasFevBugadas,
    },
};
const dispensas: Record<string, Record<string, Array<Servico>>> = {
    '2025': {
        '11': dispensasNovembro,
        '12': dispensasDezembro,
    },
};
const pjes: Record<string, Record<string, Array<Servico>>> = {
    '2025': {
        '12': pjesDezembro,
    },
};
export {
    efetivo,
    guarnicoes,
    dispensasNovembro,
    permutasCadastradas,
    dispensas,
    pjes,
};
