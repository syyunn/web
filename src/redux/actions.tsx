import { SELECT_DS } from "./actionTypes";

export const selectDS = (ds: String) => ({
    type: SELECT_DS,
    payload: {
        ds: ds
    }
});
