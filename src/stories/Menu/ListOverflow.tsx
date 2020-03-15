import React from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { selectDS } from "../../redux/actions";
import { SELECT_DS, DS } from "../../redux/actionTypes";

type ListOverflowProps = {
    prefix: String
    dss: Array<number | string>
}

export const ListOverflow: React.FC<ListOverflowProps> = props => {

    const { prefix, dss } = props
    const dispatch = useDispatch();
    const getDS = (state: DS) => state.ds
    const curr_ds = useSelector(getDS)
    console.log("curr_ds_val: ", curr_ds) //about logging default ds value 

    return (
        <nav className="pv2-ns ph4">
            <div className="nowrap overflow-x-auto">
                <button className="add-todo" onClick={() =>
                    dispatch({
                        type: SELECT_DS,
                        payload: "test"
                    })
                }>
                    Add Todo
                </button>
                {
                    dss.map(ds => <a className="link dim gray f5 f4-ns dib mr3" href="#" title="Link 1">{prefix}{ds}</a>)
                }
            </div>
        </nav>)
}

export default connect(
    null,
    { selectDS }
)(ListOverflow);

