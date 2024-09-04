import React from 'react';
import './Grid.css';
import SelectedGridVal from './SelectedGridVal';
const Grid:
    React.FC<{
        size: number,
        gridNumbers: number[][],
        setGridNumbers: (gridNumbers: number[][]) => void,
        gridStatus: number[],
        selectedId: number | null
        setSelectedId: (selectedId: number | null) => void
    }> = ({ size, gridNumbers, setGridNumbers, gridStatus, selectedId, setSelectedId }) => {
        // N x N grid
        if (gridNumbers.length !== size * size) {
            throw new Error("gridNumbers.length !== size * size");
        }
        const printGridNumber = (gridNumbers: number[]) => {
            return gridNumbers.map((val) => {
                if (val === -1) {
                    return "";
                }
                if (val === -2) {
                    return "?";
                }
                if (val === -3) {
                    return "🚩";
                }
                return val.toString()
            }).join(", ");
        }

        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div className="grid-container" style={{
                    gridTemplateColumns: `repeat(${size}, 1fr)`,
                }}>
                    {gridNumbers.map((number, index) => (
                        <div key={index} className={"grid-item " + (index === selectedId ? "editing" :
                            (gridStatus[index] === 0 && gridNumbers[index][0] === -1) ? "safe" : "default")} onClick={
                                () => {
                                    setSelectedId(index);
                                }
                            }>
                            {printGridNumber(number)}
                        </div>
                    ))}
                </div>
                {
                    selectedId !== null &&
                    (<>
                        <SelectedGridVal
                            index={selectedId}
                            gridNumbers={gridNumbers}
                            setGridNumbers={setGridNumbers}
                            setSelectedId={setSelectedId} />
                    </>)
                }
            </div >
        );
    };

export default Grid;