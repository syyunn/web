import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Logo, WTOLogo } from '../Assets/Logo.stories';
import { Heading } from '../Typography/Text.stories'

export default {
    title: 'Layouts/NavHeader',
};

type NavigationHeaderProps = {
    height?: number,
    bgColor?: string,
    bbColor?: string,
    logo?: React.ReactNode
    text?: React.ReactNode
}

export const NavigationHeader: FunctionComponent<NavigationHeaderProps> = ({
    height = 55,
    bgColor = "yellow",
    bbColor = "black",
    logo = null,
    text = null,
}) => {
    const nav_cx = classNames(
        `z-4 top-0 bb w-100 relative bg-${bgColor} b--${bbColor}`,
    );
    const div_cx = classNames('w-100 ph4-l center flex justify-between items-center pv2');
    const div_logo_wrapper_cx = classNames('flex flex-grow-0 items-center');
    const a_logo_wrapper_cx = classNames('flex items-center no-underline')
    const div_logo_left_wrapper_cx = classNames('flex flex-shrink-0 items-center ml3 sans-serif');
    return (
        <nav className={nav_cx}>
            <div className={div_cx} style={{ height }}>
                <div className={div_logo_wrapper_cx}>
                    <a className={a_logo_wrapper_cx} href="/" style={{ lineHeight: 0 }}>
                        {logo}
                    </a>
                    {/* {text} */}
                </div>
                <div className={div_logo_left_wrapper_cx}>
                    {/* {text} */}
                </div>
            </div>
        </nav>
    );
};

export const NavigationHeaderWithLogo = () => NavigationHeader({ height: 70, logo: Logo({ textColor: "navy" }), bgColor: "white" });
export const NavigationHeaderWithLogoWithoutBorderBottomLine = () => NavigationHeader({ height: 70, logo: WTOLogo({ textColor: "navy" }), bgColor: "white", bbColor: 'white' });
export const NavigationHeaderWithLogoWithoutBorderBottomLineWithHeading = () => NavigationHeader({ height: 70, logo: Logo({ textColor: "navy" }), bgColor: "white", bbColor: 'white', text: Heading({ text: "Level 1 Heading" }) });
export const NavigationHeaderWithTextLogoWithoutBorderBottomLine = () => NavigationHeader({ height: 70, logo: Heading({ text: "DeepWTO : Learn to Predict Citable Articles in WTO using Deep Learning " }), bgColor: "white", bbColor: 'silver', text: Heading({ text: "Level 1 Heading" }) });
