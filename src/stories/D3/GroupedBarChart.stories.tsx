import React, { useRef, useState, useEffect } from 'react'
import { select, Selection } from 'd3-selection'
import { axisLeft, axisBottom } from 'd3-axis'
import { scaleLinear, scaleBand } from 'd3-scale'

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { STATE } from "../../redux/actionTypes"

import API, { graphqlOperation } from '@aws-amplify/api';
import awsconfig from '../../aws-exports';
import { getGovGradCam } from '../../graphqlQueries'

API.configure(awsconfig);

// async function getGradCAMImgs(ds_art: string) {
//     console.log("ds_art fetching..", ds_art)
//     const Resolved = await API.graphql(graphqlOperation(getGovGradCam, { ds_art: ds_art }));
//     return Resolved
// }

export default {
    title: 'D3/GroupedBarChart',
}

const data = [
    {
        name: 'Article I',
        pred: 0.98,
        label: 1
    },
    {
        name: 'Article II',
        pred: 0.5,
        label: 0.1
    },
    {
        name: 'Article III',
        pred: 0.5,
        label: 0.25
    },
    {
        name: 'Article IV',
        pred: 0.5,
        label: 0.25
    },
]

type AxisProps = { color: string }

export const GBC = ({ color = "orange" }: AxisProps) => {
    // const getSTATE = (state: STATE) => state
    // const curr_state = useSelector(getSTATE)
    // const ds_art = curr_state.select.ds + "_" + curr_state.select.article
    // getGradCAMImgs(ds_art).then(res => console.log(res.data.getGovGradCAM.image))
    const unit = 20
    const numData = data.length
    const marginLeft = unit * 5
    const marginBottom = unit * 5

    const dimensions = {
        svgWidth: marginLeft + 100 * numData,
        svgHeight: 600,
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 20,
    }

    const svgRef = useRef<null | SVGSVGElement>(null)
    const [selection, setSelection] = useState<null | Selection<
        SVGSVGElement | null,
        unknown,
        null,
        undefined
    >>(null)

    const y = scaleLinear()
        .domain([0, 1]) // y-axis label's range
        .range([dimensions.svgHeight - marginBottom, unit * 2]) // since the prior one is bigger it runs from btm to up for 0 to 1 // default is 0 to 1 for up to btm

    const x = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, dimensions.svgWidth - marginLeft])

    const xAxis = axisBottom(x)
    const yAxis = axisLeft(y)
        .ticks(10)
        .tickFormat(d => `${d}`)

    useEffect(() => {
        if (!selection) {
            setSelection(select(svgRef.current))
        } else {
            const xAxisGroup = selection
                .append('g')
                .attr(
                    'transform',
                    `translate(${marginLeft}, ${
                    dimensions.chartHeight
                    })`
                )
                .call(xAxis)

            xAxisGroup
                .selectAll('text')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')
                .attr('font-size', '15px')

            const yAxisGroup = selection
                .append('g')
                .attr('transform', `translate(${marginLeft}, 0)`)
                .call(yAxis)

            const charts_pred = selection
                .append('g')
                .attr('transform', `translate(${marginLeft + unit * 1.5}, 0)`)
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', unit)
                .attr('height', d => dimensions.chartHeight - y(d.pred))
                .attr('x', d => x(d.name)!)
                .attr('y', d => y(d.pred))
                .attr('fill', color)

            const charts_label = selection
                .append('g')
                .attr('transform', `translate(${marginLeft + unit * 2.5}, 0)`)
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', unit)
                .attr('height', d => dimensions.chartHeight - y(d.label))
                .attr('x', d => x(d.name)!)
                .attr('y', d => y(d.label))
                .attr('fill', 'gray')
        }
    }, [selection])
    return (
        <svg ref={svgRef} width={dimensions.svgWidth} height={dimensions.svgHeight} />
    )
}

// export const AxisTest = () => Axis({ color: "orange" })
// export const AxisTrain = () => Axis({ color: "gray" })
