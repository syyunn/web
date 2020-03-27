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
import { getInvokabilities } from '../../graphqlQueries'

import './Tooltip.css';

API.configure(awsconfig);

export default {
    title: 'D3/GroupedBarChart',
}

type GBCProps = { split: string }

export const GBC = ({ split = "test" }: GBCProps) => {
    const explain = (split == "test") ? "- test cases represent the model's classification power since the model has never seen the true label of those cases during the training process." :
        "- train cases are not representing the model's classification power since the model has already seen the true label of those cases during the training process."

    const upper_split = (split == "test") ? "Test" : "Train"

    const [data, setData] = useState([{ "name": 'Article I', "pred": 1, "label": 0.0 }]);

    const numData = data.length
    const unit = 20
    const marginLeft = unit * 3.5

    const dimensions = {
        svgWidth: Math.max(marginLeft + 100 * numData, 6600),
        svgHeight: 600,
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 20,
    }

    const marginBottom = unit * 5
    const marginTop = unit * 5
    const marginTitle = unit * 4
    const label = ["model prediction", "label - either 1 or 0. If none, the article is not invoked for the case."]
    const colors = ["steelblue", "lightblue"]

    const y = scaleLinear()
        .domain([0, 1]) // y-axis label's range
        .range([dimensions.svgHeight - marginBottom, marginTop + marginTitle]) // since the prior one is bigger it runs from btm to up for 0 to 1 // default is 0 to 1 for up to btm

    const yAxis = axisLeft(y)
        .ticks(10)
        .tickFormat(d => `${d}`)

    const svgRef = useRef<null | SVGSVGElement>(null)
    const [selection, setSelection] = useState<null | Selection<
        SVGSVGElement | null,
        unknown,
        null,
        undefined
    >>(null)

    const getSTATE = (state: STATE) => state
    const curr_state = useSelector(getSTATE)
    const ds = parseInt(curr_state.select.ds)

    useEffect(() => {
        async function updateData(ds: number, split: string, version: string) {
            const result = await API.graphql(graphqlOperation(getInvokabilities, { ds_split: ds.toString() + "_" + split, version: version }));
            const newData = JSON.parse(result.data.getInvokabilities.scores.replace(/'/g, '"'))
            if (data !== newData) {
                // console.log(data, newData)
                setData(newData)
            }
        }
        updateData(ds, split, "1.0.0")
    }, [ds]);

    useEffect(() => {
        // console.log("dataEffect", data)
        if (!selection) {
            setSelection(select(svgRef.current))
        } else {
            selection
                .selectAll("g > *").remove()
            const x = scaleBand()
                .domain(data.map(d => d.name))
                .range([0, 100 * numData])

            const xAxis = axisBottom(x)

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
                .attr('fill', 'steelblue') //darkorange
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
                .attr('fill', 'lightblue')
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

            const legend = selection
                .selectAll("legend")
                .data(label)
                .enter()

            const legend_rects = legend
                .append("rect")
                .attr("x", marginLeft)
                .attr("y", function (d, i) {
                    return unit * 0.5 + i * unit * 1.5 + marginTitle - unit * 0.75;
                })
                .attr("width", 20)
                .attr("height", 20)
                .attr("fill", function (d, i) {
                    return colors[i];
                })

            const legend_sub_rects = legend
                .append("rect")
                .attr("x", function (d, i) {
                    return marginLeft + i * unit * 2;
                })
                .attr("y",
                    unit * 0.5 + 2 * unit * 1.5 + marginTitle - unit * 0.75
                )
                .attr("width", 20)
                .attr("height", 20)
                .attr("fill", function (d, i) {
                    return colors[i];
                })

            const rects_line = legend
                .append("line")
                .style("stroke", "#111111")
                .style("stroke-width", 1.5)
                .attr("x1",
                    marginLeft + unit * 1.25
                )
                .attr("y1", function (d, i) {
                    return unit * 0.5 + 2 * unit * 1.5 + marginTitle - unit * 0.75 + unit * 0.5
                })
                .attr("x2", marginLeft + unit * 1.75)
                .attr("y2", function (d, i) {
                    return unit * 0.5 + 2 * unit * 1.5 + marginTitle - unit * 0.75 + unit * 0.5
                })

            const legend_txts = legend
                .append("text")
                .attr("font-weight", 300)
                .attr("y", function (d, i) {
                    return unit * 1.25 + i * unit * 1.5 + marginTitle - unit * 0.75;
                })
                .attr("x", marginLeft + unit * 1.25)
                .attr("text-anchor", "start")
                .text(function (d, i) {
                    return label[i];
                });

            const legend_subExplanation = legend
                .append("text")
                .attr("font-weight", 300)
                .attr("y", unit * 1.25 + 2 * unit * 1.5 + marginTitle - unit * 0.75)
                .attr("x", marginLeft + unit * 3.25)
                // .attr("text-anchor", "start")
                .text(" model fails as much as the model prediction deviates from the label");

            const title = selection
                .selectAll("title")
                .enter()

            const title_text = legend
                .append('g')
                .append("text")
                .attr("font-size", 25)
                .attr("font-family", "avenir")
                .attr("font-weight", 600)
                .attr("y", unit)
                .attr("x", marginLeft - unit)
                .attr("text-anchor", "start")
                .text(`${upper_split} Cases For DS ${ds}`);

            const subtitle = selection
                .selectAll("subtitle")
                .enter()

            const subtitle_text = legend
                .append("text")
                .attr("font-size", 20)
                .attr("font-family", "avenir")
                .attr("fontWeight", 500)
                .attr("y", unit * 2.5)
                .attr("x", marginLeft - unit)
                .attr("text-anchor", "start")
                .text(explain);
        }
    }, [selection, data])

    return (
        <svg ref={svgRef} width={dimensions.svgWidth} height={dimensions.svgHeight} />
    )
}

// export const AxisTest = () => Axis({ color: "orange" })
// export const AxisTrain = () => Axis({ color: "gray" })
