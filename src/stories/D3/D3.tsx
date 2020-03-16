import * as d3 from 'd3';

class D3Component {

    containerEl;
    props;
    svg;

    constructor(containerEl, props) {

        this.containerEl = containerEl;
        this.props = props;

        this.svg = d3.select(containerEl)
            .append('svg').attr('width', width)
            .attr('height', height);

        // init other vis elements like scales and axes here.
    }

    updateThings = (props) => { /*...*/ }

    resize = (width, height) => { /*...*/ }

}

export default D3Component;