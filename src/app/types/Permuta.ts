import { Servico } from './Servico';

export type Permuta = {
    id: string;
    servicos: [
        {
            dia: string;
            matricula: string;
        },
        {
            dia: string;
            matricula: string;
        },
    ];
};
