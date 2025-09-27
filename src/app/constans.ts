const efetivo: Record<
    string,
    {
        isAdventist: boolean;
        name: string;
        id: string;
        matricula: string;
    }
> = {
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

export { efetivo, guarnicoes };
