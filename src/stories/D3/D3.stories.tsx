import React, { FunctionComponent, useRef } from 'react';

export default {
    title: 'D3/D3',
};

type D3Prop = {
}

export const D3: FunctionComponent<D3Prop> = () => {
    const refElement = useRef(null);
    return (
        <div id='vis-container' ref={refElement} />
    );

};
