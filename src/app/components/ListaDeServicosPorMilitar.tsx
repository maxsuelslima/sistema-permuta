import { FC, useState } from 'react';
import { efetivo } from '../constans';
import { Permuta } from '../types/Permuta';
import { Servico } from '../types/Servico';

const ListaDeServicosPorMilitar: FC<{
    servicosOrdinariosPorMatricula: { [matricula: string]: Array<Servico> };
    permutas: Array<Permuta>;
}> = ({ servicosOrdinariosPorMatricula, permutas }) => {
    const [militarSelecionado, setMilitarSelecionado] = useState<string>('');
    const isSelected = militarSelecionado !== '';
    const diasDeServicoMilitarSelecionado: Array<string> = [];
    const detalhesPermutasMilitarSelecionado: {
        [dia: string]: Servico;
    } = {};
    (servicosOrdinariosPorMatricula[militarSelecionado] ?? []).forEach(
        ({ dia }) => {
            diasDeServicoMilitarSelecionado.push(dia);
        }
    );
    permutas.forEach(({ servicos }) => {
        const [servicoA, servicoB] = servicos;
        if (servicoA.matricula === militarSelecionado) {
            diasDeServicoMilitarSelecionado.push(servicoB.dia);
            diasDeServicoMilitarSelecionado.splice(
                diasDeServicoMilitarSelecionado.indexOf(servicoA.dia),
                1
            );
            detalhesPermutasMilitarSelecionado[servicoB.dia] = {
                dia: servicoA.dia,
                matricula: servicoB.matricula,
            };
        }
        if (servicoB.matricula === militarSelecionado) {
            diasDeServicoMilitarSelecionado.push(servicoA.dia);
            diasDeServicoMilitarSelecionado.splice(
                diasDeServicoMilitarSelecionado.indexOf(servicoB.dia),
                1
            );
            detalhesPermutasMilitarSelecionado[servicoA.dia] = {
                dia: servicoB.dia,
                matricula: servicoA.matricula,
            };
        }
    });
    diasDeServicoMilitarSelecionado.sort((a, b) => parseInt(a) - parseInt(b));
    return (
        <div>
            <h3>Serviços por Militar</h3>
            <div>
                <label htmlFor="militarSelecionado">
                    Selecione um militar:{' '}
                </label>
                <select
                    id="militarSelecionado"
                    value={militarSelecionado}
                    onChange={(e) => setMilitarSelecionado(e.target.value)}
                >
                    <option value="">Selecione um militar</option>
                    {Object.entries(efetivo).map(([matricula, militar]) => (
                        <option key={matricula} value={matricula}>
                            {militar.name}
                        </option>
                    ))}
                </select>
            </div>
            {isSelected && (
                <div>
                    <h4>
                        Serviços de {efetivo[militarSelecionado]?.name || ''}
                    </h4>
                    <ul>
                        {diasDeServicoMilitarSelecionado.map((dia) => {
                            const detalhesPermuta =
                                detalhesPermutasMilitarSelecionado[dia];
                            const permuta =
                                typeof detalhesPermuta !== 'undefined';
                            return (
                                <li key={dia}>
                                    {dia} -{' '}
                                    <span
                                        style={{
                                            color: permuta ? 'orange' : 'green',
                                        }}
                                    >
                                        {permuta ? 'Permutado' : 'Ordinário'}
                                    </span>
                                    {permuta && (
                                        <div
                                            style={{
                                                fontStyle: 'italic',
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            Detalhes da permuta:
                                            <b>
                                                {
                                                    efetivo[
                                                        detalhesPermuta
                                                            .matricula
                                                    ]?.name
                                                }
                                            </b>{' '}
                                            pelo dia {detalhesPermuta.dia}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default ListaDeServicosPorMilitar;
