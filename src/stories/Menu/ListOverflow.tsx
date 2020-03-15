import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from "react-redux";
import { useDispatch } from "react-redux";

import { selectDS } from "../../redux/actions";
import { SELECT_DS } from "../../redux/actionTypes";

type ListOverflowProps = {
    prefix: String
    dss: Array<number | string>
}

export const ListOverflow: React.FC<ListOverflowProps> = props => {

    const { prefix, dss } = props
    const dispatch = useDispatch();

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
