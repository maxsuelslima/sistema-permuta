export const patentes: Record<string, string> = {
    1: 'Soldado',
    2: 'Cabo',
    3: 'Terceiro Sargento',
    4: 'Segundo Sargento',
    5: 'Primeiro Sargento',
    6: 'Subtenente',
    7: 'Aspirante',
    8: 'Segundo Tenente',
    9: 'Primeiro Tenente',
    10: 'Capitão',
    11: 'Major',
    12: 'Tenente Coronel',
    13: 'Coronel',
};

export type Militar = {
    name: string;
    id: string;
    matricula: string;
    patente: keyof typeof patentes;
};
