import {
    Dropdown,
    Input,
    makeStyles,
    Option,
    OptionOnSelectData,
    SelectionEvents,
    shorthands,
} from "@fluentui/react-components";
import React from "react";


const SelectedGridVal = ({ index, gridNumbers, setGridNumbers, setSelectedId }: {
    index: number,
    gridNumbers: number[][],
    setGridNumbers: (gridNumbers: number[][]) => void;
    setSelectedId: (selectedId: number | null) => void;
}) => {

    const convertStringToGridNumbers = (str: string) => {
        return str.split(",").map((e) => parseInt(e, 10));
    }
    const [tmpString, setTmpString] = React.useState("");

    return (
        <div>
            <Input type="text" value={tmpString} onChange={
                (e) => {
                    setTmpString(e.target.value);
                }
            } />
            <button className="confirm-button" onClick={(e) => {
                const newGridNumbers = [...gridNumbers];
                newGridNumbers[index] = convertStringToGridNumbers(tmpString);
                setGridNumbers(newGridNumbers);
            }}>確定</button>
        </div>
    );
}

export default SelectedGridVal;