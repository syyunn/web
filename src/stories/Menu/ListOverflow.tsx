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
        <nav className="avenir mw10 bb bt b--silver ph2">
            <div className="nowrap overflow-x-auto">
                {
                    data.map(item =>
                        (item == curr_state.select.ds) || (item == curr_state.select.article) ?
                            <a className="f6 f5-l link bg-lightest-blue black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() =>
                                dispatch({
                                    type: type,
                                    payload: item
                                })
                            }>{prefix}{item}</a> :
                            <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() =>
                                dispatch({
                                    type: type,
                                    payload: item
                                })
                            }>{prefix}{item}</a>
                    )
                }
            </div>
        </nav>)
}

export default connect(
    null,
    { selectDS }
)(ListOverflow);
