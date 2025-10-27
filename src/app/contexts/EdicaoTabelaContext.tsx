import { createContext } from 'react';

const EdicaoTabelaContext = createContext<{
    dia: number;
    matricula: string;
} | null>(null);

export default EdicaoTabelaContext;
