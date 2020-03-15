import React from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { selectDS } from "../../redux/actions";
import { STATE } from "../../redux/actionTypes"

type ListOverflowProps = {
    type: String
    prefix: String
    data: Array<number | string>
}

export const ListOverflow: React.FC<ListOverflowProps> = props => {

    const { type, prefix, data } = props
    const dispatch = useDispatch();
    const getSTATE = (state: STATE) => state
    const curr_state = useSelector(getSTATE)

    console.log("curr_state: ", curr_state.select.ds, curr_state.select.article) //about logging default ds value 

    return (
        <nav className="pv2-ns ph4">
            <div className="nowrap overflow-x-auto">
                {
                    data.map(item =>
                        (item == curr_state.select.ds) || (item == curr_state.select.article) ?
                            <button className="link dim red f5 f4-ns dib mr3" onClick={() =>
                                dispatch({
                                    type: type,
                                    payload: item
                                })
                            }>{prefix}{item}</button> :
                            <button className="link dim gray f5 f4-ns dib mr3" onClick={() =>
                                dispatch({
                                    type: type,
                                    payload: item
                                })
                            }>{prefix}{item}</button>
                    )
                }
            </div>
        </nav>)
}

export default connect(
    null,
    { selectDS }
)(ListOverflow);
