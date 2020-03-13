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
    return (
        <nav className={nav_cx}>
            <div className={div_cx} style={{ height }}>
                {logo}
            </div>
        </nav>
    );
};

export const NavigationHeaderWithLogo = () => NavigationHeader({ height: 70, logo: Logo({ textColor: "navy" }), bgColor: "white" });
export const NavigationHeaderWithLogoWithoutBorderBottomLine = () => NavigationHeader({ height: 70, logo: Logo({ textColor: "navy" }), bgColor: "white", bbColor: 'white' });