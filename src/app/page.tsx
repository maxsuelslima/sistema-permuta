'use client';
import Guarnicoes from './Guarnicoes';
import './globals.css';
import Escala from './components/Escala';
export default function Home() {
    return (
        <main>
            <div
                style={{
                    width: '100%',
                }}
            >
                <div>
                    <Guarnicoes mes={5} ano={2026} />
                </div>
                <Escala onlyView={false} />
            </div>
        </main>
    );
}
