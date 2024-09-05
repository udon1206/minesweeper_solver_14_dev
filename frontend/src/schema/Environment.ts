import { Rule } from "./Rule";

export type Environment = {
    grid_array: number[][][],
    all_mines_count: number,
    rule_grid: string[][],
    is_quad: boolean,
    is_connect: boolean,
    is_triple: boolean,
    is_out: boolean,
    is_dual: boolean,
    is_snake: boolean,
    is_balance: boolean,
};

export const convertEnvironment = (gridNumbers: number[][], all_mines_count: number, size: number, rule: Rule, rule_grid: string[][]): Environment => {
    const grid_array:number[][][] = [];
    for (let i = 0; i < size; i++) {
        grid_array.push(gridNumbers.slice(i * size, (i + 1) * size));
    }
    return {
        grid_array: grid_array,
        all_mines_count: all_mines_count,
        rule_grid: rule_grid,
        is_quad: rule.is_quad,
        is_connect: rule.is_connect,
        is_triple: rule.is_triple,
        is_out: rule.is_out,
        is_dual: rule.is_dual,
        is_snake: rule.is_snake,
        is_balance: rule.is_balance,
    };
}
