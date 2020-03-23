import React, { useRef, useState, useEffect } from 'react'
import { select, Selection } from 'd3-selection'
import { axisLeft, axisBottom } from 'd3-axis'
import { scaleLinear, scaleBand } from 'd3-scale'
import { event } from 'd3'

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { STATE } from "../../redux/actionTypes"

import API, { graphqlOperation } from '@aws-amplify/api';
import awsconfig from '../../aws-exports';
import { getGovGradCam } from '../../graphqlQueries'

import './Tooltip.css';

API.configure(awsconfig);

// async function getGradCAMImgs(ds_art: string) {
//     console.log("ds_art fetching..", ds_art)
//     const Resolved = await API.graphql(graphqlOperation(getGovGradCam, { ds_art: ds_art }));
//     return Resolved
// }

export default {
    title: 'D3/GroupedBarChart',
}

const data = [{ 'name': 'Article I', 'pred': 0.9509826, 'label': 0.0 }, { 'name': 'Article II', 'pred': 0.9472938, 'label': 0.0 }, { 'name': 'Article XI', 'pred': 0.9252749, 'label': 1.0 }, { 'name': 'Article III:4', 'pred': 0.9197453, 'label': 0.0 }, { 'name': 'Article I:1', 'pred': 0.91217214, 'label': 0.0 }, { 'name': 'Article XIII', 'pred': 0.871275, 'label': 1.0 }, { 'name': 'Article XXIII:1', 'pred': 0.4944687, 'label': 0.0 }, { 'name': 'Article XVI', 'pred': 0.4297645, 'label': 0.0 }, { 'name': 'Article XIX:1', 'pred': 0.15072678, 'label': 0.0 }, { 'name': 'Article XXIII', 'pred': 0.112864695, 'label': 0.0 }, { 'name': 'Article XXIII:1(b)', 'pred': 0.08849422, 'label': 0.0 }, { 'name': 'Article XI:1', 'pred': 0.06774592, 'label': 0.0 }, { 'name': 'Article XIX', 'pred': 0.067383535, 'label': 0.0 }, { 'name': 'Article XXVIII', 'pred': 0.061205868, 'label': 0.0 }, { 'name': 'Article XXII:1', 'pred': 0.029826483, 'label': 0.0 }, { 'name': 'Article VI', 'pred': 0.026944472, 'label': 0.0 }, { 'name': 'Article III:2', 'pred': 0.019636044, 'label': 0.0 }, { 'name': 'Article XX', 'pred': 0.014175044, 'label': 0.0 }, { 'name': 'Article VIII', 'pred': 0.009276686, 'label': 0.0 }, { 'name': 'Article X', 'pred': 0.008591365, 'label': 0.0 }, { 'name': 'Article III:1', 'pred': 0.0068693548, 'label': 0.0 }, { 'name': 'Article XIII:1', 'pred': 0.0051824506, 'label': 0.0 }, { 'name': 'Article XIII:2', 'pred': 0.005178307, 'label': 0.0 }, { 'name': 'Article X:3(a)', 'pred': 0.004808769, 'label': 0.0 }, { 'name': 'Article VII', 'pred': 0.0025049066, 'label': 0.0 }, { 'name': 'Article II:1(b)', 'pred': 0.0021809207, 'label': 0.0 }, { 'name': 'Article XVII:1', 'pred': 0.0019983458, 'label': 0.0 }, { 'name': 'Article XIX:2', 'pred': 0.001985235, 'label': 0.0 }, { 'name': 'Article X:3', 'pred': 0.0018678593, 'label': 0.0 }, { 'name': 'Article X:1', 'pred': 0.0016513811, 'label': 0.0 }, { 'name': 'Article XXIV', 'pred': 0.0016507934, 'label': 0.0 }, { 'name': 'Article II:1(a)', 'pred': 0.0007501796, 'label': 0.0 }, { 'name': 'Article VIII:1', 'pred': 0.0006618214, 'label': 0.0 }, { 'name': 'Article XXIII:1(a)', 'pred': 0.00062386645, 'label': 0.0 }, { 'name': 'Article XXII', 'pred': 0.000505111, 'label': 0.0 }, { 'name': 'Article VII:1', 'pred': 0.00035969014, 'label': 0.0 }, { 'name': 'Article VIII:4', 'pred': 0.00024998002, 'label': 0.0 }, { 'name': 'Article XVI:1', 'pred': 0.00017839645, 'label': 0.0 }, { 'name': 'Article VII:2', 'pred': 0.00014606396, 'label': 0.0 }, { 'name': 'Article II:3', 'pred': 7.986965e-05, 'label': 0.0 }, { 'name': 'Article VI:1', 'pred': 6.906774e-05, 'label': 0.0 }, { 'name': 'Article VI:2', 'pred': 3.699616e-05, 'label': 0.0 }, { 'name': 'Article VI:2(b)', 'pred': 3.699616e-05, 'label': 0.0 }, { 'name': 'Article VI:6', 'pred': 3.6483514e-05, 'label': 0.0 }, { 'name': 'Article XIX:3', 'pred': 6.510771e-06, 'label': 0.0 }, { 'name': 'Article IX', 'pred': 5.9830154e-06, 'label': 0.0 }, { 'name': 'Article IV', 'pred': 2.5794288e-06, 'label': 0.0 }, { 'name': 'Article XVI:4', 'pred': 2.2755637e-06, 'label': 0.0 }, { 'name': 'Article XV', 'pred': 2.256142e-06, 'label': 0.0 }, { 'name': 'Article V:7', 'pred': 1.6120748e-06, 'label': 0.0 }, { 'name': 'Article XVII:1(c)', 'pred': 1.2437589e-06, 'label': 0.0 }, { 'name': 'Article XVIII:10', 'pred': 1.1088734e-06, 'label': 0.0 }, { 'name': 'Article XIII:3(b)', 'pred': 9.719627e-07, 'label': 0.0 }, { 'name': 'Article V:2', 'pred': 9.27089e-07, 'label': 0.0 }, { 'name': 'Article III:7', 'pred': 8.505987e-07, 'label': 0.0 }, { 'name': 'Article VI:5(a)', 'pred': 8.087172e-07, 'label': 0.0 }, { 'name': 'Article XXI', 'pred': 5.975666e-07, 'label': 0.0 }, { 'name': 'Article XXIV:6', 'pred': 3.8946015e-07, 'label': 0.0 }, { 'name': 'Article VIII:3', 'pred': 3.7054963e-07, 'label': 0.0 }, { 'name': 'Article V:3', 'pred': 3.578778e-07, 'label': 0.0 }, { 'name': 'Article XVIII', 'pred': 2.6343753e-07, 'label': 0.0 }, { 'name': 'Article XXIV:5(b)', 'pred': 1.9286078e-07, 'label': 0.0 }, { 'name': 'Article V:4', 'pred': 1.1659064e-07, 'label': 0.0 }, { 'name': 'Article V', 'pred': 1.654514e-08, 'label': 0.0 }, { 'name': 'Article V:5', 'pred': 7.2156667e-09, 'label': 0.0 }]


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
                .attr('class', 'hoverPred')
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', unit)
                .attr('height', d => dimensions.chartHeight - y(d.pred))
                .attr('x', d => x(d.name)!)
                .attr('y', d => y(d.pred))
                .attr('fill', '#ff8c00')
                .on("mouseover", d => {
                    div.style("display", "inline")
                    div.text(d.pred * 100 + "%")
                }
                )
                .on("mousemove", () => {
                    div.style("left", event.pageX - 12 + "px")
                    div.style("top", event.pageY - 12 + "px")
                })
                .on("mouseout", () => {
                    div.style("display", "none")
                })


            var div = select("body")
                .append("div")
                .attr("class", "tooltip")
                .style("display", "none")

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
                .attr('fill', '#98abc5')
                // .attr('fill-opacity', d => d.label != 0 ? 1 : 0.1)
                .on("mouseover", d => {
                    div.style("display", "inline")
                    div.text(d.label * 100 + "%")
                }
                )
                .on("mousemove", () => {
                    div.style("left", event.pageX - 12 + "px")
                    div.style("top", event.pageY - 12 + "px")
                })
                .on("mouseout", () => {
                    div.style("display", "none")
                })

            // const charts_text = selection
            //     .append('g')
            //     .attr('transform', `translate(${marginLeft + unit * 3}, ${-1 * unit * 0.5})`)
            //     .selectAll('rect')
            //     .data(data)
            //     .enter()
            //     .append("text")
            //     .text(d => d.label < 0.0000001 ? d.label * 100 + "" : null)
            //     .attr("text-anchor", "middle")
            //     .attr('x', d => x(d.name)!)
            //     .attr('y', d => y(d.label))
            //     .attr("font-family", "sans-serif")
            //     .attr("font-size", "11px")
            //     .attr("font-color", "black")
            // .attr("writing-mode", "sideways-lr")




            // function mouseover(d: Object) {
            //     div.style("display", "inline");
            //     div.text(d.pred)
            // }

            // const hoverBar = selection
            //     .selectAll(".hoverPred")
            //     .data(data)
            //     .enter()
            //     .append('text')
            //     .text(d => d.pred)

            // function mouseover(d: Object) {
            //     selection.style("display", "inline");
            //     div.text(d.Stage)
            // }

        }
    }, [selection])
    return (
        <svg ref={svgRef} width={dimensions.svgWidth} height={dimensions.svgHeight} />
    )
}

// export const AxisTest = () => Axis({ color: "orange" })
// export const AxisTrain = () => Axis({ color: "gray" })
