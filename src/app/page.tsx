'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Guarnicoes from "./Guarnicoes";
import { TabelaServicosMensais } from "./TabelaServicosMensais";




export default function Home() {
  const [mes, setMes] = useState(new Date())
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Sistema de Escalas - CBMPE
        </p>
      </div>
      <div className={styles.center}>
        <h1>Escala de Guarnições - {mes.getMonth() + 1}</h1>
      </div>
      <div className={styles.center}>
        <div className={styles.grid}>
          <Guarnicoes />
        </div>
          <div style={{marginTop: '2rem', overflowX: 'auto', padding: '1rem'}}>
            <TabelaServicosMensais mes={10} ano={2025} dispensas={[{
              matricula: '725241-2',
              dia: 5
            },{
              matricula: '725239-0',
              dia: 21
            }]} />
          </div>
      </div>
    </main>
  );
}

