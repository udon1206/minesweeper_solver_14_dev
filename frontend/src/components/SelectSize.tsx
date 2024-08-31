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

const SelectSizeDropDown = ({ size, setSize, setGridNumbers }: {
    size: number;
    setSize: (size: number) => void;
    setGridNumbers: (gridNumbers: number[]) => void;
}) => {
    const options = [
        { key: "5", value: 5 },
        { key: "6", value: 6 },
        { key: "7", value: 7 },
        { key: "8", value: 8 },
    ];
    const styles = useStyles();

    const handleOptionSelect = (_event: SelectionEvents, data: OptionOnSelectData) => {
        if (data.optionText === undefined) {
            return;
        }
        const nextSize = parseInt(data.optionText, 10);
        setSize(nextSize);
        setGridNumbers(Array.from({ length: nextSize * nextSize }, () => -1));
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