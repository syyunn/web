import React, { useRef, useState } from 'react';
import { select, selectAll, Selection } from 'd3-selection';
import { useEffect } from '@storybook/addons';
import { scaleLinear } from 'd3-scale'

export default {
    title: 'D3/Select',
};

export const Select: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        // select(svgRef.current)
        //     .append('rect') //this is to handle rect comp not with React but with D3
        //     .attr('width', 100)
        //     .attr('height', 100)
        //     .attr('fill', 'blue')

        selectAll('rect')
            .attr('width', 100)
            .attr('height', 100)
            .attr('fill', 'blue')
            .attr('x', (_, i) => i * 100)
    })

    return (
        <div>
            <svg ref={svgRef} >
                <rect />
                <rect />
                <rect />
            </svg>
        </div>
    )
}
