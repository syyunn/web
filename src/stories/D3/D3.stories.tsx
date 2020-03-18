import React, { useRef } from 'react';
import { select, selectAll } from 'd3';
import { useEffect } from '@storybook/addons';


export default {
    title: 'D3/D3',
};

export const D3: React.FC = () => {
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
