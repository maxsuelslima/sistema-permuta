export type Militar = {
    isAdventist: boolean;
    name: string;
    id: string;
    matricula: string;
};
const efetivo: Record<string, Militar> = {
    '725239-0': {
        isAdventist: false,
        name: 'GUILHERME OLIVEIRA',
        id: '725239-0',
        matricula: '725239-0',
    },
    '725241-2': {
        isAdventist: false,
        name: 'RIBEIRO',
        id: '725241-2',
        matricula: '725241-2',
    },
    '725243-9': {
        isAdventist: true,
        name: 'COELHO',
        id: '725243-9',
        matricula: '725243-9',
    },
    '725244-7': {
        isAdventist: false,
        name: 'RHUAN',
        id: '725244-7',
        matricula: '725244-7',
    },
    '725245-5': {
        isAdventist: false,
        name: 'ANTÔNIO',
        id: '725245-5',
        matricula: '725245-5',
    },
    '725246-3': {
        isAdventist: false,
        name: 'FÁBIO SANTOS',
        id: '725246-3',
        matricula: '725246-3',
    },
    '725247-1': {
        isAdventist: false,
        name: 'SANTIAGO',
        id: '725247-1',
        matricula: '725247-1',
    },
    '725248-0': {
        isAdventist: false,
        name: 'BRUNO HENRIQUE',
        id: '725248-0',
        matricula: '725248-0',
    },
    '725250-1': {
        isAdventist: false,
        name: 'ANDRADE',
        id: '725250-1',
        matricula: '725250-1',
    },
    '725252-8': {
        isAdventist: false,
        name: 'CARVALHO',
        id: '725252-8',
        matricula: '725252-8',
    },
    '725254-4': {
        isAdventist: false,
        name: 'VIEIRA',
        id: '725254-4',
        matricula: '725254-4',
    },
    '725255-2': {
        isAdventist: false,
        name: 'J. MOURA',
        id: '725255-2',
        matricula: '725255-2',
    },
    '725257-9': {
        isAdventist: false,
        name: 'PABLO GONÇALVES',
        id: '725257-9',
        matricula: '725257-9',
    },
    '725258-7': {
        isAdventist: false,
        name: 'LIMA',
        id: '725258-7',
        matricula: '725258-7',
    },
    '725260-9': {
        isAdventist: false,
        name: 'DIONÍSIO',
        id: '725260-9',
        matricula: '725260-9',
    },
    '725261-7': {
        isAdventist: false,
        name: 'ÁLVARO SOUZA',
        id: '725261-7',
        matricula: '725261-7',
    },
    '725262-5': {
        isAdventist: false,
        name: 'JOÃO OLIVEIRA',
        id: '725262-5',
        matricula: '725262-5',
    },
    '725263-3': {
        isAdventist: true,
        name: 'JOÃO VICTOR',
        id: '725263-3',
        matricula: '725263-3',
    },
    '725265-0': {
        isAdventist: false,
        name: 'CHALAÇA',
        id: '725265-0',
        matricula: '725265-0',
    },
};
const guarnicoes: Array<Array<string>> = [
    ['725239-0', '725241-2', '725243-9', '725244-7', '725245-5'],
    ['725246-3', '725247-1', '725248-0', '725250-1', '725252-8'],
    ['725254-4', '725255-2', '725257-9', '725258-7'],
    ['725260-9', '725261-7', '725262-5', '725263-3', '725265-0'],
];

export const escalaOutubro = [
    {
        id: '725260-9-4|725258-7-11',
        servicos: [
            {
                dia: 4,
                matricula: '725260-9',
            },
            {
                dia: 11,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1|725258-7-15',
        servicos: [
            {
                dia: 1,
                matricula: '725244-7',
            },
            {
                dia: 15,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725258-7-23|725248-0-30',
        servicos: [
            {
                dia: 23,
                matricula: '725258-7',
            },
            {
                dia: 30,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725258-7-7|725246-3-2',
        servicos: [
            {
                dia: 7,
                matricula: '725258-7',
            },
            {
                dia: 2,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725258-7-3|725239-0-5',
        servicos: [
            {
                dia: 3,
                matricula: '725258-7',
            },
            {
                dia: 5,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725250-1-2|725257-9-11',
        servicos: [
            {
                dia: 2,
                matricula: '725250-1',
            },
            {
                dia: 11,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725245-5-5|725257-9-15',
        servicos: [
            {
                dia: 5,
                matricula: '725245-5',
            },
            {
                dia: 15,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725257-9-23|725252-8-30',
        servicos: [
            {
                dia: 23,
                matricula: '725257-9',
            },
            {
                dia: 30,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725248-0-2|725239-0-9',
        servicos: [
            {
                dia: 2,
                matricula: '725248-0',
            },
            {
                dia: 9,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725255-2-23|725247-1-30',
        servicos: [
            {
                dia: 23,
                matricula: '725255-2',
            },
            {
                dia: 30,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725260-9-8|725246-3-14',
        servicos: [
            {
                dia: 8,
                matricula: '725260-9',
            },
            {
                dia: 14,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-6|725262-5-12',
        servicos: [
            {
                dia: 6,
                matricula: '725250-1',
            },
            {
                dia: 12,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725243-9-5|725261-7-20',
        servicos: [
            {
                dia: 5,
                matricula: '725243-9',
            },
            {
                dia: 20,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725260-9-20|725246-3-26',
        servicos: [
            {
                dia: 20,
                matricula: '725260-9',
            },
            {
                dia: 26,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725243-9-29|725252-8-22',
        servicos: [
            {
                dia: 29,
                matricula: '725243-9',
            },
            {
                dia: 22,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725247-1-6|725258-7-27',
        servicos: [
            {
                dia: 6,
                matricula: '725247-1',
            },
            {
                dia: 27,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725252-8-18|725241-2-25',
        servicos: [
            {
                dia: 18,
                matricula: '725252-8',
            },
            {
                dia: 25,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725263-3-12|725248-0-6',
        servicos: [
            {
                dia: 12,
                matricula: '725263-3',
            },
            {
                dia: 6,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725265-0-28|725255-2-19',
        servicos: [
            {
                dia: 28,
                matricula: '725265-0',
            },
            {
                dia: 19,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725247-1-14|725239-0-29',
        servicos: [
            {
                dia: 14,
                matricula: '725247-1',
            },
            {
                dia: 29,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725239-0-25|725260-9-16',
        servicos: [
            {
                dia: 25,
                matricula: '725239-0',
            },
            {
                dia: 16,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725261-7-16|725243-9-25',
        servicos: [
            {
                dia: 16,
                matricula: '725261-7',
            },
            {
                dia: 25,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725258-7-19|725241-2-29',
        servicos: [
            {
                dia: 19,
                matricula: '725258-7',
            },
            {
                dia: 29,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725257-9-7|725263-3-28',
        servicos: [
            {
                dia: 7,
                matricula: '725257-9',
            },
            {
                dia: 28,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725265-0-16|725248-0-18',
        servicos: [
            {
                dia: 16,
                matricula: '725265-0',
            },
            {
                dia: 18,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725263-3-16|725245-5-21',
        servicos: [
            {
                dia: 16,
                matricula: '725263-3',
            },
            {
                dia: 21,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725263-3-4|725246-3-22',
        servicos: [
            {
                dia: 4,
                matricula: '725263-3',
            },
            {
                dia: 22,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725265-0-20|725245-5-9',
        servicos: [
            {
                dia: 20,
                matricula: '725265-0',
            },
            {
                dia: 9,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725244-7-9|725261-7-24',
        servicos: [
            {
                dia: 9,
                matricula: '725244-7',
            },
            {
                dia: 24,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725243-9-9|725254-4-27',
        servicos: [
            {
                dia: 9,
                matricula: '725243-9',
            },
            {
                dia: 27,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725261-7-28|725247-1-26',
        servicos: [
            {
                dia: 28,
                matricula: '725261-7',
            },
            {
                dia: 26,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725243-9-17|725248-0-14',
        servicos: [
            {
                dia: 17,
                matricula: '725243-9',
            },
            {
                dia: 14,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725243-9-13|725260-9-12',
        servicos: [
            {
                dia: 13,
                matricula: '725243-9',
            },
            {
                dia: 12,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725245-5-25|725247-1-22',
        servicos: [
            {
                dia: 25,
                matricula: '725245-5',
            },
            {
                dia: 22,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-29|725260-9-24',
        servicos: [
            {
                dia: 29,
                matricula: '725245-5',
            },
            {
                dia: 24,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725248-0-26|725243-9-21',
        servicos: [
            {
                dia: 26,
                matricula: '725248-0',
            },
            {
                dia: 21,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-18|725244-7-21',
        servicos: [
            {
                dia: 18,
                matricula: '725246-3',
            },
            {
                dia: 21,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-17|725250-1-22',
        servicos: [
            {
                dia: 17,
                matricula: '725244-7',
            },
            {
                dia: 22,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725252-8-10|725262-5-28',
        servicos: [
            {
                dia: 10,
                matricula: '725252-8',
            },
            {
                dia: 28,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725255-2-15|725250-1-26',
        servicos: [
            {
                dia: 15,
                matricula: '725255-2',
            },
            {
                dia: 26,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725265-0-24|725247-1-10',
        servicos: [
            {
                dia: 24,
                matricula: '725265-0',
            },
            {
                dia: 10,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725255-2-3|725246-3-10',
        servicos: [
            {
                dia: 3,
                matricula: '725255-2',
            },
            {
                dia: 10,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725262-5-16|725241-2-9',
        servicos: [
            {
                dia: 16,
                matricula: '725262-5',
            },
            {
                dia: 9,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725252-8-2|725241-2-13',
        servicos: [
            {
                dia: 2,
                matricula: '725252-8',
            },
            {
                dia: 13,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725254-4-3|725241-2-17',
        servicos: [
            {
                dia: 3,
                matricula: '725254-4',
            },
            {
                dia: 17,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725247-1-2|725263-3-20',
        servicos: [
            {
                dia: 2,
                matricula: '725247-1',
            },
            {
                dia: 20,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725254-4-23|725244-7-25',
        servicos: [
            {
                dia: 23,
                matricula: '725254-4',
            },
            {
                dia: 25,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725245-5-1|725257-9-19',
        servicos: [
            {
                dia: 1,
                matricula: '725245-5',
            },
            {
                dia: 19,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725250-1-10|725254-4-31',
        servicos: [
            {
                dia: 10,
                matricula: '725250-1',
            },
            {
                dia: 31,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725263-3-24|725254-4-19',
        servicos: [
            {
                dia: 24,
                matricula: '725263-3',
            },
            {
                dia: 19,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725262-5-24|725255-2-7',
        servicos: [
            {
                dia: 24,
                matricula: '725262-5',
            },
            {
                dia: 7,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-8|725255-2-11',
        servicos: [
            {
                dia: 8,
                matricula: '725262-5',
            },
            {
                dia: 11,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-20|725244-7-13',
        servicos: [
            {
                dia: 20,
                matricula: '725262-5',
            },
            {
                dia: 13,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-29|725250-1-14',
        servicos: [
            {
                dia: 29,
                matricula: '725244-7',
            },
            {
                dia: 14,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725246-3-30|725243-9-1',
        servicos: [
            {
                dia: 30,
                matricula: '725246-3',
            },
            {
                dia: 1,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725244-7-5|725265-0-12',
        servicos: [
            {
                dia: 5,
                matricula: '725244-7',
            },
            {
                dia: 12,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725252-8-6|725261-7-12',
        servicos: [
            {
                dia: 6,
                matricula: '725252-8',
            },
            {
                dia: 12,
                matricula: '725261-7',
            },
        ],
    },
];
export const escalaOutubro2 = [
    {
        id: '725260-9-4|725258-7-11',
        servicos: [
            {
                dia: 4,
                matricula: '725260-9',
            },
            {
                dia: 11,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1|725258-7-15',
        servicos: [
            {
                dia: 1,
                matricula: '725244-7',
            },
            {
                dia: 15,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725258-7-23|725248-0-30',
        servicos: [
            {
                dia: 23,
                matricula: '725258-7',
            },
            {
                dia: 30,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725258-7-7|725246-3-2',
        servicos: [
            {
                dia: 7,
                matricula: '725258-7',
            },
            {
                dia: 2,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-2|725257-9-11',
        servicos: [
            {
                dia: 2,
                matricula: '725250-1',
            },
            {
                dia: 11,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725248-0-2|725239-0-9',
        servicos: [
            {
                dia: 2,
                matricula: '725248-0',
            },
            {
                dia: 9,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725255-2-23|725247-1-30',
        servicos: [
            {
                dia: 23,
                matricula: '725255-2',
            },
            {
                dia: 30,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725260-9-8|725246-3-14',
        servicos: [
            {
                dia: 8,
                matricula: '725260-9',
            },
            {
                dia: 14,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-6|725262-5-12',
        servicos: [
            {
                dia: 6,
                matricula: '725250-1',
            },
            {
                dia: 12,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725260-9-20|725246-3-26',
        servicos: [
            {
                dia: 20,
                matricula: '725260-9',
            },
            {
                dia: 26,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725247-1-6|725258-7-27',
        servicos: [
            {
                dia: 6,
                matricula: '725247-1',
            },
            {
                dia: 27,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725265-0-28|725255-2-19',
        servicos: [
            {
                dia: 28,
                matricula: '725265-0',
            },
            {
                dia: 19,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725247-1-14|725239-0-29',
        servicos: [
            {
                dia: 14,
                matricula: '725247-1',
            },
            {
                dia: 29,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725239-0-25|725260-9-16',
        servicos: [
            {
                dia: 25,
                matricula: '725239-0',
            },
            {
                dia: 16,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725261-7-16|725243-9-25',
        servicos: [
            {
                dia: 16,
                matricula: '725261-7',
            },
            {
                dia: 25,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725258-7-19|725241-2-29',
        servicos: [
            {
                dia: 19,
                matricula: '725258-7',
            },
            {
                dia: 29,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725257-9-7|725263-3-28',
        servicos: [
            {
                dia: 7,
                matricula: '725257-9',
            },
            {
                dia: 28,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725263-3-16|725245-5-21',
        servicos: [
            {
                dia: 16,
                matricula: '725263-3',
            },
            {
                dia: 21,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725263-3-4|725246-3-22',
        servicos: [
            {
                dia: 4,
                matricula: '725263-3',
            },
            {
                dia: 22,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725265-0-20|725245-5-9',
        servicos: [
            {
                dia: 20,
                matricula: '725265-0',
            },
            {
                dia: 9,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725244-7-9|725261-7-24',
        servicos: [
            {
                dia: 9,
                matricula: '725244-7',
            },
            {
                dia: 24,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725243-9-9|725254-4-27',
        servicos: [
            {
                dia: 9,
                matricula: '725243-9',
            },
            {
                dia: 27,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725261-7-28|725247-1-26',
        servicos: [
            {
                dia: 28,
                matricula: '725261-7',
            },
            {
                dia: 26,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-25|725247-1-22',
        servicos: [
            {
                dia: 25,
                matricula: '725245-5',
            },
            {
                dia: 22,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-29|725260-9-24',
        servicos: [
            {
                dia: 29,
                matricula: '725245-5',
            },
            {
                dia: 24,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725248-0-26|725243-9-21',
        servicos: [
            {
                dia: 26,
                matricula: '725248-0',
            },
            {
                dia: 21,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-18|725244-7-21',
        servicos: [
            {
                dia: 18,
                matricula: '725246-3',
            },
            {
                dia: 21,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-17|725250-1-22',
        servicos: [
            {
                dia: 17,
                matricula: '725244-7',
            },
            {
                dia: 22,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725252-8-10|725262-5-28',
        servicos: [
            {
                dia: 10,
                matricula: '725252-8',
            },
            {
                dia: 28,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725255-2-15|725250-1-26',
        servicos: [
            {
                dia: 15,
                matricula: '725255-2',
            },
            {
                dia: 26,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725265-0-24|725247-1-10',
        servicos: [
            {
                dia: 24,
                matricula: '725265-0',
            },
            {
                dia: 10,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725255-2-3|725246-3-10',
        servicos: [
            {
                dia: 3,
                matricula: '725255-2',
            },
            {
                dia: 10,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725262-5-16|725241-2-9',
        servicos: [
            {
                dia: 16,
                matricula: '725262-5',
            },
            {
                dia: 9,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725252-8-2|725241-2-13',
        servicos: [
            {
                dia: 2,
                matricula: '725252-8',
            },
            {
                dia: 13,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725247-1-2|725263-3-20',
        servicos: [
            {
                dia: 2,
                matricula: '725247-1',
            },
            {
                dia: 20,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725254-4-23|725244-7-25',
        servicos: [
            {
                dia: 23,
                matricula: '725254-4',
            },
            {
                dia: 25,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725245-5-1|725257-9-19',
        servicos: [
            {
                dia: 1,
                matricula: '725245-5',
            },
            {
                dia: 19,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725250-1-10|725254-4-31',
        servicos: [
            {
                dia: 10,
                matricula: '725250-1',
            },
            {
                dia: 31,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725263-3-24|725254-4-19',
        servicos: [
            {
                dia: 24,
                matricula: '725263-3',
            },
            {
                dia: 19,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725262-5-24|725255-2-7',
        servicos: [
            {
                dia: 24,
                matricula: '725262-5',
            },
            {
                dia: 7,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-8|725255-2-11',
        servicos: [
            {
                dia: 8,
                matricula: '725262-5',
            },
            {
                dia: 11,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-20|725244-7-13',
        servicos: [
            {
                dia: 20,
                matricula: '725262-5',
            },
            {
                dia: 13,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-29|725250-1-14',
        servicos: [
            {
                dia: 29,
                matricula: '725244-7',
            },
            {
                dia: 14,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725246-3-30|725243-9-1',
        servicos: [
            {
                dia: 30,
                matricula: '725246-3',
            },
            {
                dia: 1,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725244-7-5|725265-0-12',
        servicos: [
            {
                dia: 5,
                matricula: '725244-7',
            },
            {
                dia: 12,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725245-5-5|725257-9-15',
        servicos: [
            {
                dia: 5,
                matricula: '725245-5',
            },
            {
                dia: 15,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725258-7-3|725239-0-5',
        servicos: [
            {
                dia: 3,
                matricula: '725258-7',
            },
            {
                dia: 5,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725243-9-5|725261-7-12',
        servicos: [
            {
                dia: 5,
                matricula: '725243-9',
            },
            {
                dia: 12,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725252-8-6|725257-9-27',
        servicos: [
            {
                dia: 6,
                matricula: '725252-8',
            },
            {
                dia: 27,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725252-8-26|725254-4-15',
        servicos: [
            {
                dia: 26,
                matricula: '725252-8',
            },
            {
                dia: 15,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725254-4-3|725241-2-21',
        servicos: [
            {
                dia: 3,
                matricula: '725254-4',
            },
            {
                dia: 21,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725241-2-25|725252-8-14',
        servicos: [
            {
                dia: 25,
                matricula: '725241-2',
            },
            {
                dia: 14,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725252-8-18|725245-5-17',
        servicos: [
            {
                dia: 18,
                matricula: '725252-8',
            },
            {
                dia: 17,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725261-7-20|725254-4-7',
        servicos: [
            {
                dia: 20,
                matricula: '725261-7',
            },
            {
                dia: 7,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725248-0-6|725263-3-12',
        servicos: [
            {
                dia: 6,
                matricula: '725248-0',
            },
            {
                dia: 12,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725248-0-14|725243-9-13',
        servicos: [
            {
                dia: 14,
                matricula: '725248-0',
            },
            {
                dia: 13,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725248-0-18|725265-0-8',
        servicos: [
            {
                dia: 18,
                matricula: '725248-0',
            },
            {
                dia: 8,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725265-0-16|725252-8-22',
        servicos: [
            {
                dia: 16,
                matricula: '725265-0',
            },
            {
                dia: 22,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725257-9-23|725263-3-8',
        servicos: [
            {
                dia: 23,
                matricula: '725257-9',
            },
            {
                dia: 8,
                matricula: '725263-3',
            },
        ],
    },
];
export const escalaOutubro3 = [
    {
        id: '725260-9-4|725258-7-11',
        servicos: [
            {
                dia: 4,
                matricula: '725260-9',
            },
            {
                dia: 11,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1|725258-7-15',
        servicos: [
            {
                dia: 1,
                matricula: '725244-7',
            },
            {
                dia: 15,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725258-7-23|725248-0-30',
        servicos: [
            {
                dia: 23,
                matricula: '725258-7',
            },
            {
                dia: 30,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725258-7-7|725246-3-2',
        servicos: [
            {
                dia: 7,
                matricula: '725258-7',
            },
            {
                dia: 2,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-2|725257-9-11',
        servicos: [
            {
                dia: 2,
                matricula: '725250-1',
            },
            {
                dia: 11,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725248-0-2|725239-0-9',
        servicos: [
            {
                dia: 2,
                matricula: '725248-0',
            },
            {
                dia: 9,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725255-2-23|725247-1-30',
        servicos: [
            {
                dia: 23,
                matricula: '725255-2',
            },
            {
                dia: 30,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725260-9-8|725246-3-14',
        servicos: [
            {
                dia: 8,
                matricula: '725260-9',
            },
            {
                dia: 14,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-6|725262-5-12',
        servicos: [
            {
                dia: 6,
                matricula: '725250-1',
            },
            {
                dia: 12,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725260-9-20|725246-3-26',
        servicos: [
            {
                dia: 20,
                matricula: '725260-9',
            },
            {
                dia: 26,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725247-1-6|725258-7-27',
        servicos: [
            {
                dia: 6,
                matricula: '725247-1',
            },
            {
                dia: 27,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725265-0-28|725255-2-19',
        servicos: [
            {
                dia: 28,
                matricula: '725265-0',
            },
            {
                dia: 19,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725239-0-25|725260-9-16',
        servicos: [
            {
                dia: 25,
                matricula: '725239-0',
            },
            {
                dia: 16,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725261-7-16|725243-9-25',
        servicos: [
            {
                dia: 16,
                matricula: '725261-7',
            },
            {
                dia: 25,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725258-7-19|725241-2-29',
        servicos: [
            {
                dia: 19,
                matricula: '725258-7',
            },
            {
                dia: 29,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725257-9-7|725263-3-28',
        servicos: [
            {
                dia: 7,
                matricula: '725257-9',
            },
            {
                dia: 28,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725263-3-16|725245-5-21',
        servicos: [
            {
                dia: 16,
                matricula: '725263-3',
            },
            {
                dia: 21,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725263-3-4|725246-3-22',
        servicos: [
            {
                dia: 4,
                matricula: '725263-3',
            },
            {
                dia: 22,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725265-0-20|725245-5-9',
        servicos: [
            {
                dia: 20,
                matricula: '725265-0',
            },
            {
                dia: 9,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725244-7-9|725261-7-24',
        servicos: [
            {
                dia: 9,
                matricula: '725244-7',
            },
            {
                dia: 24,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725243-9-9|725254-4-27',
        servicos: [
            {
                dia: 9,
                matricula: '725243-9',
            },
            {
                dia: 27,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725261-7-28|725247-1-26',
        servicos: [
            {
                dia: 28,
                matricula: '725261-7',
            },
            {
                dia: 26,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-25|725247-1-22',
        servicos: [
            {
                dia: 25,
                matricula: '725245-5',
            },
            {
                dia: 22,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-29|725260-9-24',
        servicos: [
            {
                dia: 29,
                matricula: '725245-5',
            },
            {
                dia: 24,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725248-0-26|725243-9-21',
        servicos: [
            {
                dia: 26,
                matricula: '725248-0',
            },
            {
                dia: 21,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-18|725244-7-21',
        servicos: [
            {
                dia: 18,
                matricula: '725246-3',
            },
            {
                dia: 21,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-17|725250-1-22',
        servicos: [
            {
                dia: 17,
                matricula: '725244-7',
            },
            {
                dia: 22,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725252-8-10|725262-5-28',
        servicos: [
            {
                dia: 10,
                matricula: '725252-8',
            },
            {
                dia: 28,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725255-2-15|725250-1-26',
        servicos: [
            {
                dia: 15,
                matricula: '725255-2',
            },
            {
                dia: 26,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725265-0-24|725247-1-10',
        servicos: [
            {
                dia: 24,
                matricula: '725265-0',
            },
            {
                dia: 10,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725255-2-3|725246-3-10',
        servicos: [
            {
                dia: 3,
                matricula: '725255-2',
            },
            {
                dia: 10,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725262-5-16|725241-2-9',
        servicos: [
            {
                dia: 16,
                matricula: '725262-5',
            },
            {
                dia: 9,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725252-8-2|725241-2-13',
        servicos: [
            {
                dia: 2,
                matricula: '725252-8',
            },
            {
                dia: 13,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725247-1-2|725263-3-20',
        servicos: [
            {
                dia: 2,
                matricula: '725247-1',
            },
            {
                dia: 20,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725254-4-23|725244-7-25',
        servicos: [
            {
                dia: 23,
                matricula: '725254-4',
            },
            {
                dia: 25,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725245-5-1|725257-9-19',
        servicos: [
            {
                dia: 1,
                matricula: '725245-5',
            },
            {
                dia: 19,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725250-1-10|725254-4-31',
        servicos: [
            {
                dia: 10,
                matricula: '725250-1',
            },
            {
                dia: 31,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725263-3-24|725254-4-19',
        servicos: [
            {
                dia: 24,
                matricula: '725263-3',
            },
            {
                dia: 19,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725262-5-24|725255-2-7',
        servicos: [
            {
                dia: 24,
                matricula: '725262-5',
            },
            {
                dia: 7,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-8|725255-2-11',
        servicos: [
            {
                dia: 8,
                matricula: '725262-5',
            },
            {
                dia: 11,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-20|725244-7-13',
        servicos: [
            {
                dia: 20,
                matricula: '725262-5',
            },
            {
                dia: 13,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-29|725250-1-14',
        servicos: [
            {
                dia: 29,
                matricula: '725244-7',
            },
            {
                dia: 14,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725246-3-30|725243-9-1',
        servicos: [
            {
                dia: 30,
                matricula: '725246-3',
            },
            {
                dia: 1,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725244-7-5|725265-0-12',
        servicos: [
            {
                dia: 5,
                matricula: '725244-7',
            },
            {
                dia: 12,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725245-5-5|725257-9-15',
        servicos: [
            {
                dia: 5,
                matricula: '725245-5',
            },
            {
                dia: 15,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725258-7-3|725239-0-5',
        servicos: [
            {
                dia: 3,
                matricula: '725258-7',
            },
            {
                dia: 5,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725243-9-5|725261-7-12',
        servicos: [
            {
                dia: 5,
                matricula: '725243-9',
            },
            {
                dia: 12,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725252-8-6|725257-9-27',
        servicos: [
            {
                dia: 6,
                matricula: '725252-8',
            },
            {
                dia: 27,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725252-8-26|725254-4-15',
        servicos: [
            {
                dia: 26,
                matricula: '725252-8',
            },
            {
                dia: 15,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725254-4-3|725241-2-21',
        servicos: [
            {
                dia: 3,
                matricula: '725254-4',
            },
            {
                dia: 21,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725241-2-25|725252-8-14',
        servicos: [
            {
                dia: 25,
                matricula: '725241-2',
            },
            {
                dia: 14,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725252-8-18|725245-5-17',
        servicos: [
            {
                dia: 18,
                matricula: '725252-8',
            },
            {
                dia: 17,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725261-7-20|725254-4-7',
        servicos: [
            {
                dia: 20,
                matricula: '725261-7',
            },
            {
                dia: 7,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725248-0-6|725263-3-12',
        servicos: [
            {
                dia: 6,
                matricula: '725248-0',
            },
            {
                dia: 12,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725248-0-18|725265-0-8',
        servicos: [
            {
                dia: 18,
                matricula: '725248-0',
            },
            {
                dia: 8,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725265-0-16|725252-8-22',
        servicos: [
            {
                dia: 16,
                matricula: '725265-0',
            },
            {
                dia: 22,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725257-9-23|725263-3-8',
        servicos: [
            {
                dia: 23,
                matricula: '725257-9',
            },
            {
                dia: 8,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725245-5-13|725248-0-14',
        servicos: [
            {
                dia: 13,
                matricula: '725245-5',
            },
            {
                dia: 14,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725243-9-17|725247-1-14',
        servicos: [
            {
                dia: 17,
                matricula: '725243-9',
            },
            {
                dia: 14,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725239-0-29|725257-9-31',
        servicos: [
            {
                dia: 29,
                matricula: '725239-0',
            },
            {
                dia: 31,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725239-0-13|725250-1-18',
        servicos: [
            {
                dia: 13,
                matricula: '725239-0',
            },
            {
                dia: 18,
                matricula: '725250-1',
            },
        ],
    },
];

const escalaOutubro4 = [
    {
        id: '725260-9-4|725258-7-11',
        servicos: [
            {
                dia: 4,
                matricula: '725260-9',
            },
            {
                dia: 11,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1|725258-7-15',
        servicos: [
            {
                dia: 1,
                matricula: '725244-7',
            },
            {
                dia: 15,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725258-7-23|725248-0-30',
        servicos: [
            {
                dia: 23,
                matricula: '725258-7',
            },
            {
                dia: 30,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725250-1-2|725257-9-11',
        servicos: [
            {
                dia: 2,
                matricula: '725250-1',
            },
            {
                dia: 11,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725248-0-2|725239-0-9',
        servicos: [
            {
                dia: 2,
                matricula: '725248-0',
            },
            {
                dia: 9,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725255-2-23|725247-1-30',
        servicos: [
            {
                dia: 23,
                matricula: '725255-2',
            },
            {
                dia: 30,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725260-9-8|725246-3-14',
        servicos: [
            {
                dia: 8,
                matricula: '725260-9',
            },
            {
                dia: 14,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-6|725262-5-12',
        servicos: [
            {
                dia: 6,
                matricula: '725250-1',
            },
            {
                dia: 12,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725260-9-20|725246-3-26',
        servicos: [
            {
                dia: 20,
                matricula: '725260-9',
            },
            {
                dia: 26,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725247-1-6|725258-7-27',
        servicos: [
            {
                dia: 6,
                matricula: '725247-1',
            },
            {
                dia: 27,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725265-0-28|725255-2-19',
        servicos: [
            {
                dia: 28,
                matricula: '725265-0',
            },
            {
                dia: 19,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725239-0-25|725260-9-16',
        servicos: [
            {
                dia: 25,
                matricula: '725239-0',
            },
            {
                dia: 16,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725261-7-16|725243-9-25',
        servicos: [
            {
                dia: 16,
                matricula: '725261-7',
            },
            {
                dia: 25,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725258-7-19|725241-2-29',
        servicos: [
            {
                dia: 19,
                matricula: '725258-7',
            },
            {
                dia: 29,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725257-9-7|725263-3-28',
        servicos: [
            {
                dia: 7,
                matricula: '725257-9',
            },
            {
                dia: 28,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725263-3-16|725245-5-21',
        servicos: [
            {
                dia: 16,
                matricula: '725263-3',
            },
            {
                dia: 21,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725265-0-20|725245-5-9',
        servicos: [
            {
                dia: 20,
                matricula: '725265-0',
            },
            {
                dia: 9,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725244-7-9|725261-7-24',
        servicos: [
            {
                dia: 9,
                matricula: '725244-7',
            },
            {
                dia: 24,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725243-9-9|725254-4-27',
        servicos: [
            {
                dia: 9,
                matricula: '725243-9',
            },
            {
                dia: 27,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725261-7-28|725247-1-26',
        servicos: [
            {
                dia: 28,
                matricula: '725261-7',
            },
            {
                dia: 26,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-25|725247-1-22',
        servicos: [
            {
                dia: 25,
                matricula: '725245-5',
            },
            {
                dia: 22,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-29|725260-9-24',
        servicos: [
            {
                dia: 29,
                matricula: '725245-5',
            },
            {
                dia: 24,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725248-0-26|725243-9-21',
        servicos: [
            {
                dia: 26,
                matricula: '725248-0',
            },
            {
                dia: 21,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-18|725244-7-21',
        servicos: [
            {
                dia: 18,
                matricula: '725246-3',
            },
            {
                dia: 21,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-17|725250-1-22',
        servicos: [
            {
                dia: 17,
                matricula: '725244-7',
            },
            {
                dia: 22,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725252-8-10|725262-5-28',
        servicos: [
            {
                dia: 10,
                matricula: '725252-8',
            },
            {
                dia: 28,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725255-2-15|725250-1-26',
        servicos: [
            {
                dia: 15,
                matricula: '725255-2',
            },
            {
                dia: 26,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725265-0-24|725247-1-10',
        servicos: [
            {
                dia: 24,
                matricula: '725265-0',
            },
            {
                dia: 10,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725255-2-3|725246-3-10',
        servicos: [
            {
                dia: 3,
                matricula: '725255-2',
            },
            {
                dia: 10,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725262-5-16|725241-2-9',
        servicos: [
            {
                dia: 16,
                matricula: '725262-5',
            },
            {
                dia: 9,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725252-8-2|725241-2-13',
        servicos: [
            {
                dia: 2,
                matricula: '725252-8',
            },
            {
                dia: 13,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725247-1-2|725263-3-20',
        servicos: [
            {
                dia: 2,
                matricula: '725247-1',
            },
            {
                dia: 20,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725254-4-23|725244-7-25',
        servicos: [
            {
                dia: 23,
                matricula: '725254-4',
            },
            {
                dia: 25,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725245-5-1|725257-9-19',
        servicos: [
            {
                dia: 1,
                matricula: '725245-5',
            },
            {
                dia: 19,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725250-1-10|725254-4-31',
        servicos: [
            {
                dia: 10,
                matricula: '725250-1',
            },
            {
                dia: 31,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725263-3-24|725254-4-19',
        servicos: [
            {
                dia: 24,
                matricula: '725263-3',
            },
            {
                dia: 19,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725262-5-24|725255-2-7',
        servicos: [
            {
                dia: 24,
                matricula: '725262-5',
            },
            {
                dia: 7,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-8|725255-2-11',
        servicos: [
            {
                dia: 8,
                matricula: '725262-5',
            },
            {
                dia: 11,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-20|725244-7-13',
        servicos: [
            {
                dia: 20,
                matricula: '725262-5',
            },
            {
                dia: 13,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-29|725250-1-14',
        servicos: [
            {
                dia: 29,
                matricula: '725244-7',
            },
            {
                dia: 14,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725246-3-30|725243-9-1',
        servicos: [
            {
                dia: 30,
                matricula: '725246-3',
            },
            {
                dia: 1,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725244-7-5|725265-0-12',
        servicos: [
            {
                dia: 5,
                matricula: '725244-7',
            },
            {
                dia: 12,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725245-5-5|725257-9-15',
        servicos: [
            {
                dia: 5,
                matricula: '725245-5',
            },
            {
                dia: 15,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725258-7-3|725239-0-5',
        servicos: [
            {
                dia: 3,
                matricula: '725258-7',
            },
            {
                dia: 5,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725243-9-5|725261-7-12',
        servicos: [
            {
                dia: 5,
                matricula: '725243-9',
            },
            {
                dia: 12,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725252-8-6|725257-9-27',
        servicos: [
            {
                dia: 6,
                matricula: '725252-8',
            },
            {
                dia: 27,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725252-8-26|725254-4-15',
        servicos: [
            {
                dia: 26,
                matricula: '725252-8',
            },
            {
                dia: 15,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725254-4-3|725241-2-21',
        servicos: [
            {
                dia: 3,
                matricula: '725254-4',
            },
            {
                dia: 21,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725241-2-25|725252-8-14',
        servicos: [
            {
                dia: 25,
                matricula: '725241-2',
            },
            {
                dia: 14,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725252-8-18|725245-5-17',
        servicos: [
            {
                dia: 18,
                matricula: '725252-8',
            },
            {
                dia: 17,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725261-7-20|725254-4-7',
        servicos: [
            {
                dia: 20,
                matricula: '725261-7',
            },
            {
                dia: 7,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725248-0-6|725263-3-12',
        servicos: [
            {
                dia: 6,
                matricula: '725248-0',
            },
            {
                dia: 12,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725248-0-18|725265-0-8',
        servicos: [
            {
                dia: 18,
                matricula: '725248-0',
            },
            {
                dia: 8,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725265-0-16|725252-8-22',
        servicos: [
            {
                dia: 16,
                matricula: '725265-0',
            },
            {
                dia: 22,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725257-9-23|725263-3-8',
        servicos: [
            {
                dia: 23,
                matricula: '725257-9',
            },
            {
                dia: 8,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725245-5-13|725248-0-14',
        servicos: [
            {
                dia: 13,
                matricula: '725245-5',
            },
            {
                dia: 14,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725243-9-17|725247-1-14',
        servicos: [
            {
                dia: 17,
                matricula: '725243-9',
            },
            {
                dia: 14,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725239-0-29|725257-9-31',
        servicos: [
            {
                dia: 29,
                matricula: '725239-0',
            },
            {
                dia: 31,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725239-0-13|725250-1-18',
        servicos: [
            {
                dia: 13,
                matricula: '725239-0',
            },
            {
                dia: 18,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725263-3-4|725248-0-22',
        servicos: [
            {
                dia: 4,
                matricula: '725263-3',
            },
            {
                dia: 22,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725258-7-7|725246-3-22',
        servicos: [
            {
                dia: 7,
                matricula: '725258-7',
            },
            {
                dia: 22,
                matricula: '725246-3',
            },
        ],
    },
];
export const escalaOutubro5 = [
    {
        id: '725260-9-4|725258-7-11',
        servicos: [
            {
                dia: 4,
                matricula: '725260-9',
            },
            {
                dia: 11,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1|725258-7-15',
        servicos: [
            {
                dia: 1,
                matricula: '725244-7',
            },
            {
                dia: 15,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725258-7-23|725248-0-30',
        servicos: [
            {
                dia: 23,
                matricula: '725258-7',
            },
            {
                dia: 30,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725250-1-2|725257-9-11',
        servicos: [
            {
                dia: 2,
                matricula: '725250-1',
            },
            {
                dia: 11,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725248-0-2|725239-0-9',
        servicos: [
            {
                dia: 2,
                matricula: '725248-0',
            },
            {
                dia: 9,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725255-2-23|725247-1-30',
        servicos: [
            {
                dia: 23,
                matricula: '725255-2',
            },
            {
                dia: 30,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725260-9-8|725246-3-14',
        servicos: [
            {
                dia: 8,
                matricula: '725260-9',
            },
            {
                dia: 14,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-6|725262-5-12',
        servicos: [
            {
                dia: 6,
                matricula: '725250-1',
            },
            {
                dia: 12,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725260-9-20|725246-3-26',
        servicos: [
            {
                dia: 20,
                matricula: '725260-9',
            },
            {
                dia: 26,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725265-0-28|725255-2-19',
        servicos: [
            {
                dia: 28,
                matricula: '725265-0',
            },
            {
                dia: 19,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725239-0-25|725260-9-16',
        servicos: [
            {
                dia: 25,
                matricula: '725239-0',
            },
            {
                dia: 16,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725261-7-16|725243-9-25',
        servicos: [
            {
                dia: 16,
                matricula: '725261-7',
            },
            {
                dia: 25,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725258-7-19|725241-2-29',
        servicos: [
            {
                dia: 19,
                matricula: '725258-7',
            },
            {
                dia: 29,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725257-9-7|725263-3-28',
        servicos: [
            {
                dia: 7,
                matricula: '725257-9',
            },
            {
                dia: 28,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725263-3-16|725245-5-21',
        servicos: [
            {
                dia: 16,
                matricula: '725263-3',
            },
            {
                dia: 21,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725265-0-20|725245-5-9',
        servicos: [
            {
                dia: 20,
                matricula: '725265-0',
            },
            {
                dia: 9,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725244-7-9|725261-7-24',
        servicos: [
            {
                dia: 9,
                matricula: '725244-7',
            },
            {
                dia: 24,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725243-9-9|725254-4-27',
        servicos: [
            {
                dia: 9,
                matricula: '725243-9',
            },
            {
                dia: 27,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725261-7-28|725247-1-26',
        servicos: [
            {
                dia: 28,
                matricula: '725261-7',
            },
            {
                dia: 26,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-25|725247-1-22',
        servicos: [
            {
                dia: 25,
                matricula: '725245-5',
            },
            {
                dia: 22,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-29|725260-9-24',
        servicos: [
            {
                dia: 29,
                matricula: '725245-5',
            },
            {
                dia: 24,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725248-0-26|725243-9-21',
        servicos: [
            {
                dia: 26,
                matricula: '725248-0',
            },
            {
                dia: 21,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-18|725244-7-21',
        servicos: [
            {
                dia: 18,
                matricula: '725246-3',
            },
            {
                dia: 21,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-17|725250-1-22',
        servicos: [
            {
                dia: 17,
                matricula: '725244-7',
            },
            {
                dia: 22,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725252-8-10|725262-5-28',
        servicos: [
            {
                dia: 10,
                matricula: '725252-8',
            },
            {
                dia: 28,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725255-2-15|725250-1-26',
        servicos: [
            {
                dia: 15,
                matricula: '725255-2',
            },
            {
                dia: 26,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725265-0-24|725247-1-10',
        servicos: [
            {
                dia: 24,
                matricula: '725265-0',
            },
            {
                dia: 10,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725255-2-3|725246-3-10',
        servicos: [
            {
                dia: 3,
                matricula: '725255-2',
            },
            {
                dia: 10,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725262-5-16|725241-2-9',
        servicos: [
            {
                dia: 16,
                matricula: '725262-5',
            },
            {
                dia: 9,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725252-8-2|725241-2-13',
        servicos: [
            {
                dia: 2,
                matricula: '725252-8',
            },
            {
                dia: 13,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725247-1-2|725263-3-20',
        servicos: [
            {
                dia: 2,
                matricula: '725247-1',
            },
            {
                dia: 20,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725254-4-23|725244-7-25',
        servicos: [
            {
                dia: 23,
                matricula: '725254-4',
            },
            {
                dia: 25,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725245-5-1|725257-9-19',
        servicos: [
            {
                dia: 1,
                matricula: '725245-5',
            },
            {
                dia: 19,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725250-1-10|725254-4-31',
        servicos: [
            {
                dia: 10,
                matricula: '725250-1',
            },
            {
                dia: 31,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725263-3-24|725254-4-19',
        servicos: [
            {
                dia: 24,
                matricula: '725263-3',
            },
            {
                dia: 19,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725262-5-24|725255-2-7',
        servicos: [
            {
                dia: 24,
                matricula: '725262-5',
            },
            {
                dia: 7,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-8|725255-2-11',
        servicos: [
            {
                dia: 8,
                matricula: '725262-5',
            },
            {
                dia: 11,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-20|725244-7-13',
        servicos: [
            {
                dia: 20,
                matricula: '725262-5',
            },
            {
                dia: 13,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-29|725250-1-14',
        servicos: [
            {
                dia: 29,
                matricula: '725244-7',
            },
            {
                dia: 14,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725246-3-30|725243-9-1',
        servicos: [
            {
                dia: 30,
                matricula: '725246-3',
            },
            {
                dia: 1,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725244-7-5|725265-0-12',
        servicos: [
            {
                dia: 5,
                matricula: '725244-7',
            },
            {
                dia: 12,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725245-5-5|725257-9-15',
        servicos: [
            {
                dia: 5,
                matricula: '725245-5',
            },
            {
                dia: 15,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725258-7-3|725239-0-5',
        servicos: [
            {
                dia: 3,
                matricula: '725258-7',
            },
            {
                dia: 5,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725243-9-5|725261-7-12',
        servicos: [
            {
                dia: 5,
                matricula: '725243-9',
            },
            {
                dia: 12,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725252-8-6|725257-9-27',
        servicos: [
            {
                dia: 6,
                matricula: '725252-8',
            },
            {
                dia: 27,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725252-8-26|725254-4-15',
        servicos: [
            {
                dia: 26,
                matricula: '725252-8',
            },
            {
                dia: 15,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725254-4-3|725241-2-21',
        servicos: [
            {
                dia: 3,
                matricula: '725254-4',
            },
            {
                dia: 21,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725241-2-25|725252-8-14',
        servicos: [
            {
                dia: 25,
                matricula: '725241-2',
            },
            {
                dia: 14,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725252-8-18|725245-5-17',
        servicos: [
            {
                dia: 18,
                matricula: '725252-8',
            },
            {
                dia: 17,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725261-7-20|725254-4-7',
        servicos: [
            {
                dia: 20,
                matricula: '725261-7',
            },
            {
                dia: 7,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725248-0-6|725263-3-12',
        servicos: [
            {
                dia: 6,
                matricula: '725248-0',
            },
            {
                dia: 12,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725248-0-18|725265-0-8',
        servicos: [
            {
                dia: 18,
                matricula: '725248-0',
            },
            {
                dia: 8,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725265-0-16|725252-8-22',
        servicos: [
            {
                dia: 16,
                matricula: '725265-0',
            },
            {
                dia: 22,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725257-9-23|725263-3-8',
        servicos: [
            {
                dia: 23,
                matricula: '725257-9',
            },
            {
                dia: 8,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725245-5-13|725248-0-14',
        servicos: [
            {
                dia: 13,
                matricula: '725245-5',
            },
            {
                dia: 14,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725243-9-17|725247-1-14',
        servicos: [
            {
                dia: 17,
                matricula: '725243-9',
            },
            {
                dia: 14,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725239-0-29|725257-9-31',
        servicos: [
            {
                dia: 29,
                matricula: '725239-0',
            },
            {
                dia: 31,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725239-0-13|725250-1-18',
        servicos: [
            {
                dia: 13,
                matricula: '725239-0',
            },
            {
                dia: 18,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725263-3-4|725248-0-22',
        servicos: [
            {
                dia: 4,
                matricula: '725263-3',
            },
            {
                dia: 22,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725247-1-6|725255-2-31',
        servicos: [
            {
                dia: 6,
                matricula: '725247-1',
            },
            {
                dia: 31,
                matricula: '725255-2',
            },
        ],
    },
];
export const escalaAtual = [
    {
        id: '725260-9-4|725258-7-11',
        servicos: [
            {
                dia: 4,
                matricula: '725260-9',
            },
            {
                dia: 11,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725244-7-1|725258-7-15',
        servicos: [
            {
                dia: 1,
                matricula: '725244-7',
            },
            {
                dia: 15,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725258-7-23|725248-0-30',
        servicos: [
            {
                dia: 23,
                matricula: '725258-7',
            },
            {
                dia: 30,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725250-1-2|725257-9-11',
        servicos: [
            {
                dia: 2,
                matricula: '725250-1',
            },
            {
                dia: 11,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725248-0-2|725239-0-9',
        servicos: [
            {
                dia: 2,
                matricula: '725248-0',
            },
            {
                dia: 9,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725255-2-23|725247-1-30',
        servicos: [
            {
                dia: 23,
                matricula: '725255-2',
            },
            {
                dia: 30,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725260-9-8|725246-3-14',
        servicos: [
            {
                dia: 8,
                matricula: '725260-9',
            },
            {
                dia: 14,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725250-1-6|725262-5-12',
        servicos: [
            {
                dia: 6,
                matricula: '725250-1',
            },
            {
                dia: 12,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725260-9-20|725246-3-26',
        servicos: [
            {
                dia: 20,
                matricula: '725260-9',
            },
            {
                dia: 26,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725265-0-28|725255-2-19',
        servicos: [
            {
                dia: 28,
                matricula: '725265-0',
            },
            {
                dia: 19,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725239-0-25|725260-9-16',
        servicos: [
            {
                dia: 25,
                matricula: '725239-0',
            },
            {
                dia: 16,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725261-7-16|725243-9-25',
        servicos: [
            {
                dia: 16,
                matricula: '725261-7',
            },
            {
                dia: 25,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725258-7-19|725241-2-29',
        servicos: [
            {
                dia: 19,
                matricula: '725258-7',
            },
            {
                dia: 29,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725257-9-7|725263-3-28',
        servicos: [
            {
                dia: 7,
                matricula: '725257-9',
            },
            {
                dia: 28,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725263-3-16|725245-5-21',
        servicos: [
            {
                dia: 16,
                matricula: '725263-3',
            },
            {
                dia: 21,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725265-0-20|725245-5-9',
        servicos: [
            {
                dia: 20,
                matricula: '725265-0',
            },
            {
                dia: 9,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725244-7-9|725261-7-24',
        servicos: [
            {
                dia: 9,
                matricula: '725244-7',
            },
            {
                dia: 24,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725243-9-9|725254-4-27',
        servicos: [
            {
                dia: 9,
                matricula: '725243-9',
            },
            {
                dia: 27,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725261-7-28|725247-1-26',
        servicos: [
            {
                dia: 28,
                matricula: '725261-7',
            },
            {
                dia: 26,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-25|725247-1-22',
        servicos: [
            {
                dia: 25,
                matricula: '725245-5',
            },
            {
                dia: 22,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725245-5-29|725260-9-24',
        servicos: [
            {
                dia: 29,
                matricula: '725245-5',
            },
            {
                dia: 24,
                matricula: '725260-9',
            },
        ],
    },
    {
        id: '725248-0-26|725243-9-21',
        servicos: [
            {
                dia: 26,
                matricula: '725248-0',
            },
            {
                dia: 21,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725246-3-18|725244-7-21',
        servicos: [
            {
                dia: 18,
                matricula: '725246-3',
            },
            {
                dia: 21,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-17|725250-1-22',
        servicos: [
            {
                dia: 17,
                matricula: '725244-7',
            },
            {
                dia: 22,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725252-8-10|725262-5-28',
        servicos: [
            {
                dia: 10,
                matricula: '725252-8',
            },
            {
                dia: 28,
                matricula: '725262-5',
            },
        ],
    },
    {
        id: '725255-2-15|725250-1-26',
        servicos: [
            {
                dia: 15,
                matricula: '725255-2',
            },
            {
                dia: 26,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725265-0-24|725247-1-10',
        servicos: [
            {
                dia: 24,
                matricula: '725265-0',
            },
            {
                dia: 10,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725255-2-3|725246-3-10',
        servicos: [
            {
                dia: 3,
                matricula: '725255-2',
            },
            {
                dia: 10,
                matricula: '725246-3',
            },
        ],
    },
    {
        id: '725262-5-16|725241-2-9',
        servicos: [
            {
                dia: 16,
                matricula: '725262-5',
            },
            {
                dia: 9,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725252-8-2|725241-2-13',
        servicos: [
            {
                dia: 2,
                matricula: '725252-8',
            },
            {
                dia: 13,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725247-1-2|725263-3-20',
        servicos: [
            {
                dia: 2,
                matricula: '725247-1',
            },
            {
                dia: 20,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725254-4-23|725244-7-25',
        servicos: [
            {
                dia: 23,
                matricula: '725254-4',
            },
            {
                dia: 25,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725245-5-1|725257-9-19',
        servicos: [
            {
                dia: 1,
                matricula: '725245-5',
            },
            {
                dia: 19,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725250-1-10|725254-4-31',
        servicos: [
            {
                dia: 10,
                matricula: '725250-1',
            },
            {
                dia: 31,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725263-3-24|725254-4-19',
        servicos: [
            {
                dia: 24,
                matricula: '725263-3',
            },
            {
                dia: 19,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725262-5-24|725255-2-7',
        servicos: [
            {
                dia: 24,
                matricula: '725262-5',
            },
            {
                dia: 7,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-8|725255-2-11',
        servicos: [
            {
                dia: 8,
                matricula: '725262-5',
            },
            {
                dia: 11,
                matricula: '725255-2',
            },
        ],
    },
    {
        id: '725262-5-20|725244-7-13',
        servicos: [
            {
                dia: 20,
                matricula: '725262-5',
            },
            {
                dia: 13,
                matricula: '725244-7',
            },
        ],
    },
    {
        id: '725244-7-29|725250-1-14',
        servicos: [
            {
                dia: 29,
                matricula: '725244-7',
            },
            {
                dia: 14,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725246-3-30|725243-9-1',
        servicos: [
            {
                dia: 30,
                matricula: '725246-3',
            },
            {
                dia: 1,
                matricula: '725243-9',
            },
        ],
    },
    {
        id: '725244-7-5|725265-0-12',
        servicos: [
            {
                dia: 5,
                matricula: '725244-7',
            },
            {
                dia: 12,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725245-5-5|725257-9-15',
        servicos: [
            {
                dia: 5,
                matricula: '725245-5',
            },
            {
                dia: 15,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725258-7-3|725239-0-5',
        servicos: [
            {
                dia: 3,
                matricula: '725258-7',
            },
            {
                dia: 5,
                matricula: '725239-0',
            },
        ],
    },
    {
        id: '725243-9-5|725261-7-12',
        servicos: [
            {
                dia: 5,
                matricula: '725243-9',
            },
            {
                dia: 12,
                matricula: '725261-7',
            },
        ],
    },
    {
        id: '725252-8-6|725257-9-27',
        servicos: [
            {
                dia: 6,
                matricula: '725252-8',
            },
            {
                dia: 27,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725252-8-26|725254-4-15',
        servicos: [
            {
                dia: 26,
                matricula: '725252-8',
            },
            {
                dia: 15,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725254-4-3|725241-2-21',
        servicos: [
            {
                dia: 3,
                matricula: '725254-4',
            },
            {
                dia: 21,
                matricula: '725241-2',
            },
        ],
    },
    {
        id: '725241-2-25|725252-8-14',
        servicos: [
            {
                dia: 25,
                matricula: '725241-2',
            },
            {
                dia: 14,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725252-8-18|725245-5-17',
        servicos: [
            {
                dia: 18,
                matricula: '725252-8',
            },
            {
                dia: 17,
                matricula: '725245-5',
            },
        ],
    },
    {
        id: '725261-7-20|725254-4-7',
        servicos: [
            {
                dia: 20,
                matricula: '725261-7',
            },
            {
                dia: 7,
                matricula: '725254-4',
            },
        ],
    },
    {
        id: '725248-0-6|725263-3-12',
        servicos: [
            {
                dia: 6,
                matricula: '725248-0',
            },
            {
                dia: 12,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725248-0-18|725265-0-8',
        servicos: [
            {
                dia: 18,
                matricula: '725248-0',
            },
            {
                dia: 8,
                matricula: '725265-0',
            },
        ],
    },
    {
        id: '725265-0-16|725252-8-22',
        servicos: [
            {
                dia: 16,
                matricula: '725265-0',
            },
            {
                dia: 22,
                matricula: '725252-8',
            },
        ],
    },
    {
        id: '725257-9-23|725263-3-8',
        servicos: [
            {
                dia: 23,
                matricula: '725257-9',
            },
            {
                dia: 8,
                matricula: '725263-3',
            },
        ],
    },
    {
        id: '725245-5-13|725248-0-14',
        servicos: [
            {
                dia: 13,
                matricula: '725245-5',
            },
            {
                dia: 14,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725243-9-17|725247-1-14',
        servicos: [
            {
                dia: 17,
                matricula: '725243-9',
            },
            {
                dia: 14,
                matricula: '725247-1',
            },
        ],
    },
    {
        id: '725239-0-29|725257-9-31',
        servicos: [
            {
                dia: 29,
                matricula: '725239-0',
            },
            {
                dia: 31,
                matricula: '725257-9',
            },
        ],
    },
    {
        id: '725239-0-13|725250-1-18',
        servicos: [
            {
                dia: 13,
                matricula: '725239-0',
            },
            {
                dia: 18,
                matricula: '725250-1',
            },
        ],
    },
    {
        id: '725263-3-4|725248-0-22',
        servicos: [
            {
                dia: 4,
                matricula: '725263-3',
            },
            {
                dia: 22,
                matricula: '725248-0',
            },
        ],
    },
    {
        id: '725246-3-6|725258-7-7',
        servicos: [
            {
                dia: 6,
                matricula: '725246-3',
            },
            {
                dia: 7,
                matricula: '725258-7',
            },
        ],
    },
    {
        id: '725247-1-6|725255-2-31',
        servicos: [
            {
                dia: 6,
                matricula: '725247-1',
            },
            {
                dia: 31,
                matricula: '725255-2',
            },
        ],
    },
];

export { efetivo, guarnicoes };
