import { Checkbox } from "@fluentui/react-components";
import { Rule } from "../schema/Rule";

const Rules = ({ rule, setRule, setRuleGrid, size }: {
    rule: Rule,
    setRule: (rule: Rule) => void
    setRuleGrid: (ruleGrid: string[][]) => void
    size: number
}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            padding: "10px"
        }}>
            <Checkbox
                label={"Q"}
                checked={rule.is_quad}
                onChange={() => {
                    setRule({ ...rule, is_quad: !rule.is_quad });
                }} />
            <Checkbox
                label={"C"}
                checked={rule.is_connect}
                onChange={() => {
                    setRule({ ...rule, is_connect: !rule.is_connect });
                }} />
            <Checkbox
                label={"L"}
                checked={rule.is_lie}
                onChange={() => {
                    setRule({ ...rule, is_lie: !rule.is_lie });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "L")));
                }} />
            <Checkbox
                label={"T"}
                checked={rule.is_triple}
                onChange={() => {
                    setRule({ ...rule, is_triple: !rule.is_triple });
                }} />
            <Checkbox
                label={"O"}
                checked={rule.is_out}
                onChange={() => {
                    setRule({ ...rule, is_out: !rule.is_out });
                }} />
            <Checkbox
                label={"D"}
                checked={rule.is_dual}
                onChange={() => {
                    setRule({ ...rule, is_dual: !rule.is_dual });
                }} />
            <Checkbox
                label={"S"}
                checked={rule.is_snake}
                onChange={() => {
                    setRule({ ...rule, is_snake: !rule.is_snake });
                }} />
            <Checkbox
                label={"B"}
                checked={rule.is_balance}
                onChange={() => {
                    setRule({ ...rule, is_balance: !rule.is_balance });
                }} />
            <Checkbox
                label={"W"}
                checked={rule.is_wall}
                onChange={() => {
                    setRule({ ...rule, is_wall: !rule.is_wall });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "W")));
                }} />
            <Checkbox
                label={"N"}
                checked={rule.is_neutral}
                onChange={() => {
                    setRule({ ...rule, is_neutral: !rule.is_neutral });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "N")));
                }} />
            <Checkbox
                label={"X"}
                checked={rule.is_xross}
                onChange={() => {
                    setRule({ ...rule, is_xross: !rule.is_xross });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "X")));
                }} />
            <Checkbox
                label={"P"}
                checked={rule.is_partial}
                onChange={() => {
                    setRule({ ...rule, is_partial: !rule.is_partial });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "P")));
                }} />
            <Checkbox
                label={"E"}
                checked={rule.is_eye}
                onChange={() => {
                    setRule({ ...rule, is_eye: !rule.is_eye });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "E")));
                }} />
            <Checkbox
                label={"M"}
                checked={rule.is_multiple}
                onChange={() => {
                    setRule({ ...rule, is_multiple: !rule.is_multiple });
                    setRuleGrid(Array.from({ length: size }, () => Array.from({ length: size }, () => "M")));
                }} />
        </div >
    );
}

export default Rules;