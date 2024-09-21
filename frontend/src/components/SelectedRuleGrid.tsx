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

const SelectedRuleGrid = ({ r, c, ruleGrid, setRuleGrid }: {
    r: number;
    c: number;
    ruleGrid: string[][];
    setRuleGrid: (ruleGrid: string[][]) => void;
}) => {
    const options = [
        { key: "V", value: "V" },
        { key: "M", value: "M" },
        { key: "L", value: "L" },
        { key: "W", value: "W" },
        { key: "N", value: "N" },
        { key: "X", value: "X" },
        { key: "P", value: "P" },
        { key: "E", value: "E" },
    ];
    const styles = useStyles();

    const handleOptionSelect = (_event: SelectionEvents, data: OptionOnSelectData) => {
        if (data.optionText === undefined) {
            return;
        }
        // ruleGrid を DeepCopy
        const nextRuleGrid = JSON.parse(JSON.stringify(ruleGrid));
        nextRuleGrid[r][c] = data.optionText;
        setRuleGrid(nextRuleGrid);
    };
    return (
        <div className={styles.dropDown}>
            <Dropdown
                placeholder="Select an animal"
                value={ruleGrid[r][c]}
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

export default SelectedRuleGrid;