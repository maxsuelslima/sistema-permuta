'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Guarnicoes from './Guarnicoes';
import Escala from './components/Escala';
import './globals.css';

export default function Home() {
    const [mes, setMes] = useState(new Date());

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <h1>Escala - 10</h1>
            </div>
            <div className={styles.center}>
                <div className={styles.grid}>
                    <Guarnicoes />
                </div>
                <Escala mes={10} ano={mes.getFullYear()} />
            </div>
        </main>
    );
}
