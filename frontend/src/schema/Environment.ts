import { Rule } from "./Rule";

export type Environment = {
    grid_array: number[][][],
    all_mines_count: number,
    coffeences: number[][],
    is_quad: boolean,
    is_connect: boolean,
    is_lie: boolean,
    is_triple: boolean,
    is_out: boolean,
    is_dual: boolean,
};

export const convertEnvironment = (gridNumbers: number[], all_mines_count: number, size: number, rule: Rule): Environment => {
    const grid_array:number[][][] = [];
    for (let i = 0; i < size; i++) {
        grid_array.push(gridNumbers.slice(i * size, (i + 1) * size).map((val) => [val]));
    }
    return {
        grid_array: grid_array,
        all_mines_count: all_mines_count,
        coffeences: Array.from({ length: size }, () => Array.from({ length: size }, () => 1)),
        is_quad: rule.is_quad,
        is_connect: rule.is_connect,
        is_lie: rule.is_lie,
        is_triple: rule.is_triple,
        is_out: rule.is_out,
        is_dual: rule.is_dual,
    };
}
