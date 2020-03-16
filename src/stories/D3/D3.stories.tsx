import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import D3Component from './D3';


export default {
    title: 'D3/D3',
};

type D3Prop = {
}

export const D3: FunctionComponent<D3Prop> = () => {
    const [data, setData] = useState(['a']);
    const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(600);

    const refElement = useRef(null);

    useEffect(() => {
        // fetch data here, below is just mock.
        Promise.resolve().then(() => setData(['a', 'b', 'c']))
    }, [])

    // useEffect hook - creates new d3 component whenever data changes
    useEffect(() => {
        if (data && data.length) {
            // vis = new D3Component(refElement.current, { data, width, height });
            new D3Component(refElement.current, { data, width, height });
        }
    }, [data]);

    return (
        <div id='vis-container' ref={refElement} />
    );

};
