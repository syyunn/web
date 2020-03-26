import React from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { STATE } from "../../redux/actionTypes"

type ListOverflowProps = {
    type: String
    prefix: String
    data: Array<number | string>
    bb: Boolean
    hoverColor: string
}

export const ListOverflow: React.FC<ListOverflowProps> = props => {

    const { type, prefix, data, bb, hoverColor } = props
    const dispatch = useDispatch();
    const getSTATE = (state: STATE) => state
    const curr_state = useSelector(getSTATE)

    // console.log("curr_state: ", curr_state.select.ds, curr_state.select.article) //about logging default ds value 
    const navClass = bb ? "avenir mw10 bb bt b--silver ph2" : "avenir mw10 bt b--silver ph2"

    const classSelected = `f6 f5-l link bg-${hoverColor} black-80 hover-bg-${hoverColor} dib pa3 ph4-l`
    const classNonSelected = `f6 f5-l link bg-animate black-80 hover-bg-${hoverColor} dib pa3 ph4-l`
    return (
        <nav className={navClass}>
            <div className="nowrap overflow-x-auto">
                {
                    data.map(item =>
                        (item == curr_state.select.ds) || (item == curr_state.select.article) ?
                            <a className={classSelected} onClick={() =>
                                dispatch({
                                    type: type,
                                    payload: item
                                })
                            }>{prefix}{item}</a> :
                            <a className={classNonSelected} onClick={() =>
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
    null,
)(ListOverflow);
