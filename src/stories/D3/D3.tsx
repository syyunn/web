import * as d3 from 'd3';

type ContainerElemType = SVGSVGElement

type D3PropTypes = {
    data: string[]
    width: number
    height: number
}

class D3Component {

    containerEl: ContainerElemType
    props: D3PropTypes
    // svg: SVGSVGElement

    constructor(containerEl: ContainerElemType, props: D3PropTypes) {

        this.containerEl = containerEl;
        this.props = props;

        d3.select(this.containerEl)
            .append('svg').attr('width', this.props.width)
            .attr('height', this.props.height);

        // init other vis elements like scales and axes here.
    }

    // updateThings = (props) => { /*...*/ }

    // resize = (width, height) => { /*...*/ }

}

export default D3Component;