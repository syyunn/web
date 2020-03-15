import React from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { selectDS } from "../../redux/actions";

type ListOverflowProps = {
    type: String
    prefix: String
    data: Array<number | string>
}

export const ListOverflow: React.FC<ListOverflowProps> = props => {

    const { type, prefix, data } = props
    const dispatch = useDispatch();
    // const getDS = (state: DS) => state.ds
    // const curr_ds = useSelector(getDS)
    // console.log("curr_ds_val: ", curr_ds) //about logging default ds value 

    return (
        <nav className="pv2-ns ph4">
            <div className="nowrap overflow-x-auto">
                {
                    data.map(item => <button className="link dim gray f5 f4-ns dib mr3" onClick={() =>
                        dispatch({
                            type: type,
                            payload: item
                        })
                    }>{prefix}{item}</button>)
                }
            </div>
        </nav>)
}

export default connect(
    null,
    { selectDS }
)(ListOverflow);
