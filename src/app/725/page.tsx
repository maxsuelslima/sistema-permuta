'use client'
import { NextPage } from "next";
import Guarnicoes from "../Guarnicoes";
import Escala from "../components/Escala";


const Escalas: NextPage = () => {
    return (
        <main>
            <div
                style={{
                    width: '100%',
                }}
            >
                <div>
                    <Guarnicoes mes={8} ano={2026} />
                </div>
                <Escala onlyView={false} enable725={true} />
            </div>
        </main>
    );
}
export default Escalas;