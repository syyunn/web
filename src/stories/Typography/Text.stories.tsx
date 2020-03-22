import React, { FunctionComponent } from 'react';

export default {
    title: 'Typography/Text',
};

type HeadingProp = {
    // textColor?: string
    text?: string
}

export const Heading: FunctionComponent<HeadingProp> = ({ text = "Level 1 Heading" }) => {
    return (
        <h1 className="f2 fw6 lh-title navy avenir">
            {text}
        </h1>
    )
};
