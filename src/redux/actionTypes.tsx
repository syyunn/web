export const SELECT_DS = "SELECT_DS";
export const SELECT_ARTICLE = "SELECT_ARTICLE";

export interface DS {
    ds: string
}

export interface ARTICLE {
    article: string
}

export interface SELECT_DS_ACTION {
    type: typeof SELECT_DS
    payload: DS
}

export interface SELECT_ARTICLE_ACTION {
    type: typeof SELECT_ARTICLE
    payload: ARTICLE
}

export type DS_ActionType = SELECT_DS_ACTION | SELECT_ARTICLE_ACTION
