import React, { useRef, useState, useEffect } from 'react'
import { select, Selection } from 'd3-selection'
import { axisLeft, axisBottom } from 'd3-axis'
import { scaleLinear, scaleBand } from 'd3-scale'
import { event, interpolateViridis } from 'd3'

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { STATE } from "../../redux/actionTypes"

import API, { graphqlOperation } from '@aws-amplify/api';
import awsconfig from '../../aws-exports';
import { getInvokabilities } from '../../graphqlQueries'
import { PrevNextButton, Pagination } from '../Buttons/Nav.stories'

import './Tooltip.css';

API.configure(awsconfig);

export default {
    title: 'D3/ChromaticScales',
}

type ChromaScaleType = { data: number[], text: string[] }

export const ChromaScale = ({ data = [0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7,], text = ["In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "we", "loved", "charming", "around", "the", "corner", "dev", "we", "loved", "charming", "around", "the", "corner", "dev"] }: ChromaScaleType) => {
    const [page, setPage] = useState<number>(0);

    const unit = 20
    const marginTop = unit * 1
    const marginLeft = unit * 2
    const marginBottom = unit * 1
    const rectWidth = 90
    const widthNumRects = 20
    const vertMarginBtwRects = unit * 1.5
    const lineLength = 5
    const textLength = 20
    const allowRows = 6
    const onePageDataNum = widthNumRects * allowRows
    const totalPages = Math.ceil(text.length / onePageDataNum)

    let currPageData = data.slice(page * onePageDataNum, (page + 1) * onePageDataNum)
    let currPageText = text.slice(page * onePageDataNum, (page + 1) * onePageDataNum)

    const dimensions = {
        svgWidth: rectWidth * widthNumRects + marginLeft,
        svgHeight: allowRows * (rectWidth + lineLength + vertMarginBtwRects) + marginBottom
    }

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
    const article = curr_state.select.article

    useEffect(() => {
        setPage(0)
    }, [ds, article]);

    useEffect(() => {
        // console.log("dataEffect", currPageData)
        if (!selection) {
            setSelection(select(svgRef.current))
        } else {
            selection
                .selectAll("g > *").remove()

            const rects = selection
                .selectAll("rects")
                .data(currPageData)
                .enter()

            const rects_color = rects
                .append("g")
                .append("rect")
                .attr("x", function (d, i) {
                    return marginLeft + (i % widthNumRects) * rectWidth
                })
                .attr("y", function (d, i) {
                    return marginTop + Math.floor(i / widthNumRects) * (rectWidth + vertMarginBtwRects);
                })
                .attr("width", rectWidth)
                .attr("height", rectWidth)
                .attr("fill", function (d, i) {
                    return interpolateViridis(d)
                        ;
                })

            const rects_line = rects
                .append("g")
                .append("line")
                .style("stroke", "#111111")
                .style("stroke-width", 1)
                .attr("x1", function (d, i) {
                    return marginLeft + (i % widthNumRects) * rectWidth + rectWidth * 0.5
                })
                .attr("y1", function (d, i) {
                    return marginTop + rectWidth + Math.floor(i / widthNumRects) * (rectWidth + vertMarginBtwRects);
                })
                .attr("x2", function (d, i) {
                    return marginLeft + (i % widthNumRects) * rectWidth + rectWidth * 0.5
                })
                .attr("y2", function (d, i) {
                    return marginTop + rectWidth + Math.floor(i / widthNumRects) * (rectWidth + vertMarginBtwRects) + lineLength;
                })

            const rects_text = selection
                .selectAll("rects")
                .data(currPageText)
                .enter()
                .append("g")
                .append("text")
                .attr('text-anchor', 'middle')
                .text(function (d, i) {
                    return d
                })
                .attr("x", function (d, i) {
                    return marginLeft + (i % widthNumRects) * rectWidth + rectWidth * 0.5
                })
                .attr("y", function (d, i) {
                    return marginTop + rectWidth + Math.floor(i / widthNumRects) * (rectWidth + vertMarginBtwRects) + textLength;
                })
        }
    }, [selection, currPageData])

    return (
        <div>
            <div className="pl5 pl5-ns">
                <svg ref={svgRef} width={dimensions.svgWidth} height={dimensions.svgHeight} />
            </div>
            <div className="flex pl5-ns pr5-ns justify-center mb3" >
                <div className="flex items-center justify-center">
                    <a
                        onClick={() =>
                            (page > 0) ? setPage(page - 1) : null
                        }
                        className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                        <svg
                            className="w1"
                            data-icon="chevronLeft"
                            viewBox="0 0 32 32"
                            style={{ fill: "currentcolor" }}
                        >
                            <title>
                                chevronLeft icon
                    </title>
                            <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
                        </svg>
                        <span className="pl1">
                            Prev
                </span>
                    </a>
                    <h1 className="no-underline inline-flex items-center mr4 ">
                        {page + 1}/ {totalPages}
                    </h1>
                    <a onClick={() =>
                        (page + 1 < totalPages) ? setPage(page + 1) : null
                    }
                        className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                    >
                        <span className="pr1" >
                            Next
                </span>
                        <svg
                            className="w1"
                            data-icon="chevronRight"
                            viewBox="0 0 32 32"
                            style={{ fill: "currentcolor" }}
                        >
                            <title>
                                chevronRight icon
                    </title>
                            <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
                        </svg>
                    </a >
                </div >            </div>
        </div>
    )
}

export const ChromaScaleDefault = () => ChromaScale({ data: [0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.2056794, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7, 0.0007233462, 0.5, 1, 0.7, 0.4, 0.3, 0.6, 0.9, 1, 0.5, 0.6, 0.34, 0.17, 1, 0.5, 0.7], text: ["In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "we", "loved", "charming", "around", "the", "corner", "dev", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "In", "Feb", "We", "were", "able", "fix", "the", "car", "well", "since", "we", "loved", "charming", "around", "the", "corner", "dev", "we", "loved", "charming", "around", "the", "corner", "dev", "we", "loved", "charming", "around", "the", "corner", "dev"] })
