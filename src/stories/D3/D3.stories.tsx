import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import D3Component from './D3';
import * as ReactDOM from 'react-dom';
import data from './data';


export default {
    title: 'D3/D3',
};

type LogoProp = {
    textColor?: string
}

export const D3: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    return (
        <D3Component width={window.innerWidth} height={window.innerHeight} data={data} />
    )
};

// https://danmarshall.github.io/google-font-to-svg-path/