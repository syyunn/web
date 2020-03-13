import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export default {
    title: 'Layouts/NavBreadcrums',
};

type NavigationHeaderProps = {
    height?: number,
    bgColor?: string,
    bbColor?: string,
    logo?: React.ReactNode
}

export const DSNav: FunctionComponent<NavigationHeaderProps> = ({
    // height = 55,
    // bgColor = "yellow",
    // bbColor = "black",
    // logo = null,
}) => {
    // const nav_cx = classNames(
    //     `z-4 top-0 bb w-100 relative bg-${bgColor} b--${bbColor}`,
    // );
    // const div_cx = classNames('w-100 ph4-l center flex justify-between items-center pv2');
    return (
        <header className="bg-black fixed w-100 ph3 pv3 pv3-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim near-white dib mr3" href="#" title="Home">DS</a>
                <a className="link dim near-white dib mr3" href="#" title="Home">2</a>
                <a className="link dim near-white dib mr3" href="#" title="About">18</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">22</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">22</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">31</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">34</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">46</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">56</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">58</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">60</a>
                <a className="link dim near-white dib mr3" href="#" title="Store">62</a>
            </nav>
        </header>
    );
};


export const ArtNav: FunctionComponent<NavigationHeaderProps> = ({
    // height = 55,
    // bgColor = "yellow",
    // bbColor = "black",
    // logo = null,
}) => {
    // const nav_cx = classNames(
    //     `z-4 top-0 bb w-100 relative bg-${bgColor} b--${bbColor}`,
    // );
    // const div_cx = classNames('w-100 ph4-l center flex justify-between items-center pv2');
    return (
        <header className="bg-dark-gray fixed w-100 ph3 pv3 pv3-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim white dib mr3" href="#" title="Home">Article</a>
                <a className="link dim white dib mr3" href="#" title="Home">I</a>
                <a className="link dim white dib mr3" href="#" title="About">I:1</a>
                <a className="link dim white dib mr3" href="#" title="Store">II</a>
                <a className="link dim white dib mr3" href="#" title="Store">II:1</a>
                <a className="link dim white dib mr3" href="#" title="Store">31</a>
                <a className="link dim white dib mr3" href="#" title="Store">34</a>
                <a className="link dim white dib mr3" href="#" title="Store">46</a>
                <a className="link dim white dib mr3" href="#" title="Store">56</a>
                <a className="link dim white dib mr3" href="#" title="Store">58</a>
                <a className="link dim white dib mr3" href="#" title="Store">60</a>
                <a className="link dim white dib mr3" href="#" title="Store">62</a>
            </nav>
        </header>
    );
};

// export const NavDoubleStacked: FunctionComponent<NavigationHeaderProps> = ({
//     // height = 55,
//     // bgColor = "yellow",
//     // bbColor = "black",
//     // logo = null,
// }) => {
//     // const nav_cx = classNames(
//     //     `z-4 top-0 bb w-100 relative bg-${bgColor} b--${bbColor}`,
//     // );
//     // const div_cx = classNames('w-100 ph4-l center flex justify-between items-center pv2');
//     return (
//         <>
//             <DSNav />
//             <ArtNav />
//         </>
//     );
// };