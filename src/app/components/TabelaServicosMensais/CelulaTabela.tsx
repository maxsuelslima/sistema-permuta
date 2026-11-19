import { FC, ReactNode } from 'react';

export const estilos: Record<string, React.CSSProperties> = {
    ordinario: {
        backgroundColor: '#ccffcc',
        cursor: 'pointer',
        textAlign: 'center',
    },
    permuta: {
        backgroundColor: '#ccccff',
        cursor: 'pointer',
        textAlign: 'center',
    },
    dispensa: {
        backgroundColor: '#ffff99',
        cursor: '',
        textAlign: 'center',
        opacity: 0.7,
        pointerEvents: 'none',
    },
    folga: {
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        pointerEvents: 'none',
        opacity: 0.7,
    },
    folgaEstranha: {
        backgroundColor: '#ffcccc',
        cursor: 'pointer',
        textAlign: 'center',
    },
    disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
    pjes: {
        backgroundColor: '#171bf6',
        cursor: 'pointer',
        textAlign: 'center',
        color: 'white',
    },
    p1: {
        backgroundColor: '#171bf6',
        cursor: 'pointer',
        textAlign: 'center',
        color: 'white',
    },
    p2: {
        backgroundColor: '#0b0f5c',
        cursor: 'pointer',
        textAlign: 'center',
        color: 'white',
    },
};

type CelulaTabelaProps = {
    onClick: () => void;
    isDisabled: boolean;
    isSelected: boolean;
    estilo: keyof typeof estilos;
    showAdventistMarker: boolean;
    children: ReactNode;
};
const CelulaTabela: FC<CelulaTabelaProps> = ({
    onClick,
    isDisabled,
    isSelected,
    estilo,
    showAdventistMarker,
    children,
}) => {
    return (
        <td
            style={{
                border: `1px solid ${showAdventistMarker ? '#ff6600' : 'black'}`,
                cursor: isDisabled ? '' : 'pointer',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '32px',
                minHeight: '32px',
                textAlign: 'center',
                ...estilos[estilo],
                ...(isDisabled ? estilos.disabled : {}),
                animation: isSelected
                    ? 'selectedDayAnimation 2s infinite'
                    : isDisabled
                      ? 'availableDayAnimation 2s infinite'
                      : '',
            }}
            onClick={onClick}
        >
            {children}
        </td>
    );
};
export default CelulaTabela;
