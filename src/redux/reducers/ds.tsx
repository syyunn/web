import { SELECT_DS, DS_ACtionType } from "../actionTypes";

const initialState = {
    ds: 2,
};

export default function (state = initialState, action: DS_ACtionType) {
    switch (action.type) {
        case SELECT_DS: {
            const { ds } = action.payload;
            return {
                ds: ds
            };
        }
        default:
            return state;
    }
}
