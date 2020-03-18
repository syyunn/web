import React, { useRef, useState, useEffect } from 'react'
import { select, Selection, selectAll } from 'd3-selection'

export default {
    title: 'D3/DataJoin',
};

const data = [{ width: 200, height: 150, color: 'orange' }]

export const DataJoin: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [selection, setSelection] = useState<null | Selection<
        SVGSVGElement | null,
        unknown,
        null,
        undefined
    >>(null)

    useEffect(() => {
        if (!selection) {
            setSelection(select(svgRef.current))
        } else {
            selection
                .data(data)
                .append('rect')
                .attr('height', d => d.height)
                .attr('width', d => d.width)
                .attr('fill', d => d.color)

        }
    }, [selection])

    return (
        <div>
            <svg ref={svgRef} >
            </svg>
        </div>
    )
}
