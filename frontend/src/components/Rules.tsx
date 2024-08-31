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
        </div >
    );
}

export default Rules;