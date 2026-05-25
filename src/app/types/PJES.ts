import efetivo from '../constans/efetivo';

export type PJES = {
    dia: string;
    matricula: keyof typeof efetivo;
    turno: 'P1' | 'P2' | 'P';
};
