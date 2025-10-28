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
                    <Guarnicoes />
                </div>
                <Escala onlyView/>
            </div>
        </main>
    );
}
