'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Guarnicoes from './Guarnicoes';
import Escala, { Permutas } from './components/Escala';
import './globals.css';

function checaDiferençaArrayPermutas(arr1: Permutas, arr2: Permutas) {
}

export default function Home() {
    const [mes, setMes] = useState(new Date());
    console.log()
    return (
        <main>
            <div style={{
                width: '100%',
            }}>
                <div>
                <h1>Escala - 10</h1>
            </div>
            <div>
                <div>
                    <Guarnicoes />
                </div>
                <Escala mes={10} ano={mes.getFullYear()} />
            </div>
            </div>
        </main>
    );
}
