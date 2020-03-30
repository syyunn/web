import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export default {
    title: 'Menu/NavHeaderBreadCrums',
};

type BreadCrumProps = {
    // height?: number,
    // bgColor?: string,
    // bbColor?: string,
    // logo?: React.ReactNode
    // text?: React.ReactNode
}

export const NavHeaderBreadCrums: FunctionComponent<BreadCrumProps> = ({
    // height = 55,
    // bgColor = "yellow",
    // bbColor = "black",
    // logo = null,
    // text = null,
}) => {
    return (
        <header className="bg-white black-80 avenir">
            <nav className="mw10 ph2 nowrap overflow-x-auto">
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="https://drive.google.com/open?id=17k95fKqb_yzfutN0198X_d_KNuF-dvzw">About</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-green bg-light-green dib pa3 ph4-l" href="/">Demo</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa3 ph4-l" href="https://github.com/syyunn/DeepWTO">Github</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-blue dib pa3 ph4-l" href="mailto:syyun@snu.ac.kr">Email: syyun@snu.ac.kr</a>
                {/* <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Shop</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">About</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a> */}
            </nav>
        </header>
    );
};
