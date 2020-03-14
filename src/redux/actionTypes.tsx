export const SELECT_DS = "SELECT_DS";

export interface DS {
    ds: string
}

export interface SELECT_DS_ACTION {
    type: typeof SELECT_DS
    payload: DS
}

export type DS_ACtionType = SELECT_DS_ACTION
