import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Logo } from '../Assets/Logo.stories';

export default {
    title: 'Layouts/NavHeader',
};

type NavigationHeaderProps = {
    height?: number,
    bgColor?: string,
    bbColor?: string,
    logo?: React.ReactNode
}

export const NavigationHeader: FunctionComponent<NavigationHeaderProps> = ({
    height = 55,
    bgColor = "yellow",
    bbColor = "black",
    logo = null,
}) => {
    const nav_cx = classNames(
        `z-4 top-0 bb w-100 relative bg-${bgColor} b--${bbColor}`,
    );
    const div_cx = classNames('w-100 ph4-l center flex justify-between items-center pv2');
    const div_logo_wrapper_cx = classNames('flex flex-grow-1 items-center');
    const a_logo_wrapper_cx = classNames('flex items-center no-underline')
    const div_logo_left_wrapper_cx = classNames('flex flex-shrink-0 items-center ml3 sans-serif bg-red');
    return (
        <nav className={nav_cx}>
            <div className={div_cx} style={{ height }}>
                <div className={div_logo_wrapper_cx}>
                    <a className={a_logo_wrapper_cx} href="/" style={{ lineHeight: 0 }}>
                        {logo}
                    </a>
                </div>
                <div className={div_logo_left_wrapper_cx}>
                </div>
            </div>
        </nav>
    );
};

export const NavigationHeaderWithLogo = () => NavigationHeader({ height: 70, logo: Logo({ textColor: "navy" }), bgColor: "white" });
export const NavigationHeaderWithLogoWithoutBorderBottomLine = () => NavigationHeader({ height: 70, logo: Logo({ textColor: "navy" }), bgColor: "white", bbColor: 'white' });