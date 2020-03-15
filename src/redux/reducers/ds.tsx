import { SELECT_DS, DS_ACtionType } from "../actionTypes";

const initialState = {
    ds: 2,
};

export default function (state = initialState, action: DS_ACtionType) {
    switch (action.type) {
        case SELECT_DS: {
            console.log("select_ds: ", action.payload)
            return {
                ds: action.payload
            };
        }
        default:
            return state;
    }
}
