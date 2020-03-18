import React, { useRef, useState, useEffect } from 'react'
import { select, Selection } from 'd3-selection'
import { axisLeft, axisBottom } from 'd3-axis'
import { scaleLinear, scaleBand } from 'd3-scale'
import { max } from 'd3-array'

export default {
    title: 'D3/Axis',
}

const data = [
    {
        name: 'Article I',
        units: 0.98,
    },
    {
        name: 'Article III: 4',
        units: 0.87,
    },
    {
        name: 'Article III: 2',
        units: 0.76,
    },
    {
        name: 'Article III: 1',
        units: 0.74,
    },
    {
        name: 'Article XI: 1',
        units: 0.69,
    },
    {
        name: 'Article XX: 1',
        units: 0.59,
    },
    {
        name: 'Article XX: 3',
        units: 0.5,
    },
    {
        name: 'Article XX: 9',
        units: 0.37,
    },
    {
        name: 'Article XX: 10',
        units: 0.3,
    },
    {
        name: 'Article XX: 11',
        units: 0.2,
    },
    {
        name: 'Article XX: 12',
        units: 0.1,
    },

]

export const Axis: React.FC = () => {
    const dimensions = {
        width: 660,
        height: 600,
        marginLeft: 100,
        marginBottom: 100,
        chartHeight: 500,
        chartWidth: 500,
    }
    const svgRef = useRef<null | SVGSVGElement>(null)
    const [selection, setSelection] = useState<null | Selection<
        SVGSVGElement | null,
        unknown,
        null,
        undefined
    >>(null)

    const y = scaleLinear()
        .domain([0, 1])
        .range([dimensions.height - dimensions.marginBottom, 0])

    const x = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, dimensions.width - dimensions.marginLeft])
        .padding(0.1)

    /**
     * generates axis functions for the given scales
     * when called, axis are rendered at the origin
     * appy transforms to place the axis where they need to be
     * modifications can be aplied to the functions to style the axis
     */
    const xAxis = axisBottom(x)
    const yAxis = axisLeft(y)
        .ticks(10)
        .tickFormat(d => `${d}`)

    useEffect(() => {
        if (!selection) {
            setSelection(select(svgRef.current))
        } else {
            /**
             * we need to call so we can pass in the current selection
             * calling an axis will return the current seleciton
             * i have separated the groups and put them into variables
             * for readability
             */
            const xAxisGroup = selection
                .append('g')
                .attr(
                    'transform',
                    `translate(${dimensions.marginLeft}, ${
                    dimensions.chartHeight
                    })`
                )
                .call(xAxis)
            /**
             * you can grab the selection of texts
             * in the xAxisGroup to style them
             */
            xAxisGroup
                .selectAll('text')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')
                .attr('font-size', '15px')

            const yAxisGroup = selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
                .call(yAxis)

            const charts = selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', x.bandwidth)
                .attr('height', d => dimensions.chartHeight - y(d.units))
                .attr('x', d => x(d.name)!)
                .attr('y', d => y(d.units))
                .attr('fill', 'orange')
        }
    }, [selection])
    return (
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
    )
}

const compare = [
    {
        name: 'Truth',
        units: 1,
    },
    {
        name: 'Model Prediction',
        units: 0.87,
    }
]

export const Compare: React.FC = () => {
    const dimensions = {
        width: 200,
        height: 600,
        marginLeft: 100,
        marginBottom: 100,
        chartHeight: 500,
        chartWidth: 500,
    }
    const svgRef = useRef<null | SVGSVGElement>(null)
    const [selection, setSelection] = useState<null | Selection<
        SVGSVGElement | null,
        unknown,
        null,
        undefined
    >>(null)

    const y = scaleLinear()
        .domain([0, 1])
        .range([dimensions.height - dimensions.marginBottom, 0])

    const x = scaleBand()
        .domain(compare.map(d => d.name))
        .range([0, dimensions.width - dimensions.marginLeft])
        .padding(0.1)

    /**
     * generates axis functions for the given scales
     * when called, axis are rendered at the origin
     * appy transforms to place the axis where they need to be
     * modifications can be aplied to the functions to style the axis
     */
    const xAxis = axisBottom(x)
    const yAxis = axisLeft(y)
        .ticks(10)
        .tickFormat(d => `${d}`)

    useEffect(() => {
        if (!selection) {
            setSelection(select(svgRef.current))
        } else {
            /**
             * we need to call so we can pass in the current selection
             * calling an axis will return the current seleciton
             * i have separated the groups and put them into variables
             * for readability
             */
            const xAxisGroup = selection
                .append('g')
                .attr(
                    'transform',
                    `translate(${dimensions.marginLeft}, ${
                    dimensions.chartHeight
                    })`
                )
                .call(xAxis)
            /**
             * you can grab the selection of texts
             * in the xAxisGroup to style them
             */
            xAxisGroup
                .selectAll('text')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')
                .attr('font-size', '15px')

            const yAxisGroup = selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
                .call(yAxis)

            const charts = selection
                .append('g')
                .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
                .selectAll('rect')
                .data(compare)
                .enter()
                .append('rect')
                .attr('width', x.bandwidth)
                .attr('height', d => dimensions.chartHeight - y(d.units))
                .attr('x', d => x(d.name)!)
                .attr('y', d => y(d.units))
                .attr('fill', 'orange')
        }
    }, [selection])
    return (
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
    )
}