import React from "react";
import SelectSizeDropDown from "./components/SelectSize";
import Grid from "./components/Grid";
import axios from "axios";
import { Button, Input } from "@fluentui/react-components";
import { convertEnvironment } from "./schema/Environment";
import { IsResult } from "./schema/Result";
import { Rule } from "./schema/Rule";
import Rules from "./components/Rules";
const App = () => {
  const [size, setSize] = React.useState(5);
  const [gridNumbers, setGridNumbers] = React.useState(Array.from({ length: size * size }, () => [-1]));
  const [gridStatus, setGridStatus] = React.useState(Array.from({ length: size * size }, () => -1));
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [allMinesCount, setAllMinesCount] = React.useState(10);
  const [rules, setRules] = React.useState<Rule>({
    is_quad: false,
    is_connect: false,
    is_lie: false,
    is_triple: false,
    is_out: false,
    is_dual: false,
    is_snake: false,
    is_balance: false,
    is_wall: false,
    is_neutral: false,
    is_xross: false,
    is_partial: false,
    is_eye: false,
    is_multiple: false
  });
  const [ruleGrid, setRuleGrid] = React.useState(Array.from({ length: size }, () => Array.from({ length: size }, () => "V")));
  const url = "http://127.0.0.1:8000/solve";

  return (
    <>
      <div style={{
        position: "absolute",
        top: "10px",
        left: "0px"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          padding: "10px"
        }}>
          <SelectSizeDropDown
            size={size}
            setSize={setSize}
            setGridNumbers={setGridNumbers}
            setSelectedId={setSelectedId}
            setGridStatus={setGridStatus}
            setAllMinesCount={setAllMinesCount}
            setRuleGrid={setRuleGrid} />
          <Input type="number" value={allMinesCount.toString()} onChange={(e) => {
            setAllMinesCount(parseInt(e.target.value));
          }
          } />
          <Button onClick={() => {
            axios.post(url, convertEnvironment(gridNumbers, allMinesCount, size, rules, ruleGrid))
              .then((res) => {
                if (IsResult(res.data)) {
                  console.log(res.data);
                  const newGridNumbers = [...gridNumbers];
                  for (const e of res.data.result) {
                    if (e.flag) {
                      newGridNumbers[e.r * size + e.c][0] = -3;
                    }
                  }
                  setGridNumbers(newGridNumbers);
                  // Grid status をリセット
                  //setGridStatus(Array.from({ length: size * size }, () => -1));
                  // Grid status を更新
                  const newGridStatus = [...gridStatus];
                  for (const e of res.data.result) {
                    if (e.flag) {
                      newGridStatus[e.r * size + e.c] = 1;
                    }
                    else {
                      newGridStatus[e.r * size + e.c] = 0;
                    }
                  }
                  setGridStatus(newGridStatus);
                }
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });
          }
          }
            appearance="primary">Solve</Button>
        </div>
        <Rules rule={rules} setRule={setRules} setRuleGrid={setRuleGrid} size={size} />
        <Grid size={size}
          gridNumbers={gridNumbers}
          setGridNumbers={setGridNumbers}
          gridStatus={gridStatus}
          selectedId={selectedId}
          setSelectedId={setSelectedId} />
      </div>
    </>
  );
}

export default App;