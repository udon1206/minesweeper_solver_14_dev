import React from "react";

import {
    Dropdown,
    makeStyles,
    Option,
    OptionOnSelectData,
    SelectionEvents,
    shorthands,
} from "@fluentui/react-components";

const useStyles = makeStyles({
    dropDown: {
        // Stack the label above the field with a gap
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        ...shorthands.gap("2px"),
        maxWidth: "400px",
    },
});


const SelectedGridVal = ({ index, gridNumbers, setGridNumbers, setSelectedId }: {
    index: number,
    gridNumbers: number[],
    setGridNumbers: (gridNumbers: number[]) => void;
    setSelectedId: (selectedId: number | null) => void;
}) => {
    const options = [
        { key: "-3", value: "🚩" },
        { key: "-2", value: "?" },
        { key: "-1", value: "" },
        { key: "0", value: "0" },
        { key: "1", value: "1" },
        { key: "2", value: "2" },
        { key: "3", value: "3" },
        { key: "4", value: "4" },
        { key: "5", value: "5" },
        { key: "6", value: "6" },
        { key: "7", value: "7" },
        { key: "8", value: "8" },
        { key: "9", value: "9" },
    ];

    const styles = useStyles();

    const handleOptionSelect = (_event: SelectionEvents, data: OptionOnSelectData) => {
        if (data.optionText === undefined) {
            return;
        }
        const value = options.find(option => option.value === data.optionText)?.key ?? "";
        const nextVal = parseInt(value, 10);
        setGridNumbers([
            ...gridNumbers.slice(0, index),
            nextVal,
            ...gridNumbers.slice(index + 1),
        ]);
        setSelectedId(null);
    };

    return (
        <div className={styles.dropDown}>
            <Dropdown
                placeholder="Select Value"
                value={options.find(option => option.key === gridNumbers[index].toString())?.value ?? ""}
                onOptionSelect={handleOptionSelect}
            >
                {options.map((option) => (
                    <Option key={option.key}>
                        {option.value}
                    </Option>
                ))}
            </Dropdown>
        </div>
    );
}

export default SelectedGridVal;