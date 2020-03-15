import { SELECT_DS, SELECT_ARTICLE } from "./actionTypes";

export const selectDS = (ds: String) => ({
    type: SELECT_DS,
    payload: {
        ds: ds
    }
});

export const selectARTICLE = (article: String) => ({
    type: SELECT_ARTICLE,
    payload: {
        article: article
    }
});
