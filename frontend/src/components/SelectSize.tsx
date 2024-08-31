import {
    Dropdown,
    makeStyles,
    Option,
    OptionOnSelectData,
    SelectionEvents,
    shorthands,
} from "@fluentui/react-components";
import { all } from "axios";

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

const SelectSizeDropDown = ({ size, setSize, setGridNumbers, setGridStatus, setSelectedId, setAllMinesCount }: {
    size: number;
    setSize: (size: number) => void;
    setGridNumbers: (gridNumbers: number[]) => void;
    setGridStatus: (gridStatus: number[]) => void;
    setSelectedId: (selectedId: number | null) => void;
    setAllMinesCount: (allMinesCount: number) => void;
}) => {
    const options = [
        { key: "5", value: 5, allMinesCount: 10 },
        { key: "6", value: 6, allMinesCount: 14 },
        { key: "7", value: 7, allMinesCount: 20 },
        { key: "8", value: 8, allMinesCount: 26 },
    ];
    const styles = useStyles();

    const handleOptionSelect = (_event: SelectionEvents, data: OptionOnSelectData) => {
        if (data.optionText === undefined) {
            return;
        }
        const nextSize = parseInt(data.optionText, 10);
        setSize(nextSize);
        setGridNumbers(Array.from({ length: nextSize * nextSize }, () => -1));
        setGridStatus(Array.from({ length: nextSize * nextSize }, () => -1));
        setSelectedId(null);
        setAllMinesCount(options.find(option => option.value === nextSize)?.allMinesCount ?? 10);
    };
    return (
        <div className={styles.dropDown}>
            <Dropdown
                placeholder="Select an animal"
                value={size.toString()}
                onOptionSelect={handleOptionSelect}
            >
                {options.map((option) => (
                    <Option key={option.key}>
                        {option.key}
                    </Option>
                ))}
            </Dropdown>
        </div>
    );
};

export default SelectSizeDropDown;