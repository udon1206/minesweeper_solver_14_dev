export type Result = {
    is_feasible: boolean,
    finished: boolean,
    result: {
        r: number,
        c: number,
        flag: boolean,
    }[]
}

export const IsResult = (obj: any): obj is Result => {
    if (obj === null || typeof obj !== "object") {
        return false;
    }
    if (typeof obj.is_feasible !== "boolean") {
        return false;
    }
    if (typeof obj.finished !== "boolean") {
        return false;
    }
    if (!Array.isArray(obj.result)) {
        return false;
    }
    for (const e of obj.result) {
        if (typeof e.r !== "number") {
            return false;
        }
        if (typeof e.c !== "number") {
            return false;
        }
        if (typeof e.flag !== "boolean") {
            return false;
        }
    }
    return true;
}