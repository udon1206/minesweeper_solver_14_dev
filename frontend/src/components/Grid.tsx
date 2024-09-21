import React from 'react';
import './Grid.css';
import SelectedGridVal from './SelectedGridVal';
import SelectedRuleGrid from './SelectedRuleGrid';
const Grid:
    React.FC<{
        size: number,
        gridNumbers: number[][],
        setGridNumbers: (gridNumbers: number[][]) => void,
        gridStatus: number[],
        selectedId: number | null
        setSelectedId: (selectedId: number | null) => void,
        ruleGrid: string[][],
        setRuleGrid: (ruleGrid: string[][]) => void
    }> = ({ size, gridNumbers, setGridNumbers, gridStatus, selectedId, setSelectedId, ruleGrid, setRuleGrid }) => {
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
                            <span>{printGridNumber(number)}</span>
                            <span style={{
                                position: "absolute",
                                bottom: "5px",
                                right: "5px",
                                fontSize: "12px",
                            }}>{ruleGrid[Math.floor(index / size)][index % size]}</span>
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
                        <SelectedRuleGrid
                            r={Math.floor(selectedId / size)}
                            c={selectedId % size}
                            ruleGrid={ruleGrid}
                            setRuleGrid={setRuleGrid} />
                    </>)
                }
            </div >
        );
    };

export default Grid;