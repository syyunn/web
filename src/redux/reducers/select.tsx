import { SELECT_DS, DS_ActionType, SELECT_ARTICLE } from "../actionTypes";

const initialState = {
    ds: 2,
    article: "Article I"
};

export default function (state = initialState, action: DS_ActionType) {
    switch (action.type) {
        case SELECT_DS: {
            console.log("select_ds: ", action.payload)
            return {
                ...state,
                ds: action.payload
            };
        }

        case SELECT_ARTICLE: {
            console.log("select_article: ", action.payload)
            return {
                ...state,
                article: action.payload
            };
        }

        default:
            return state;
    }
}
