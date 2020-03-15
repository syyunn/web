export const SELECT_DS = "SELECT_DS";
export const SELECT_ARTICLE = "SELECT_ARTICLE";

export interface STATE {
    select: {
        ds: string,
        article: string
    }
}

export interface SELECT_DS_ACTION {
    type: typeof SELECT_DS
    payload: STATE
}

export interface SELECT_ARTICLE_ACTION {
    type: typeof SELECT_ARTICLE
    payload: STATE
}

export type DS_ActionType = SELECT_DS_ACTION | SELECT_ARTICLE_ACTION
