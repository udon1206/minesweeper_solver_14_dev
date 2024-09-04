import { Checkbox } from "@fluentui/react-components";
import { Rule } from "../schema/Rule";

const Rules = ({ rule, setRule }: {
    rule: Rule,
    setRule: (rule: Rule) => void
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
                }} />
        </div >
    );
}

export default Rules;