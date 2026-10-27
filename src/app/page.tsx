'use client';
import Guarnicoes from './Guarnicoes';
import './globals.css';
import Escala from './components/Escala';
import { NextPage } from 'next';
const Home: NextPage = () => {
    return (
        <main>
            <div
                style={{
                    width: '100%',
                }}
            >
                {/*                 <div>
                    <Guarnicoes mes={8} ano={2026} />
                </div> */}
                <Escala onlyView={false} />
            </div>
        </main>
    );
};
export default Home;
