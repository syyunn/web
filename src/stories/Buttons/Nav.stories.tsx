import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export default {
    title: 'Buttons/SignIn',
};

type SignInProp = {
    buttonColor?: string
}

export const PrevNextButton: FunctionComponent<SignInProp> = ({ buttonColor = "blue" }) => {
    return (
        <div className="flex items-center justify-center pb4 w-100 pr6">
            <a
                href="#0"
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
            <div className="f5 no-underline inline-flex items-center pa3 mr4">
                <h1> 1/ 51 </h1>
            </div>
            <a
                href="#0"
                className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
            >
                <span className="pr1">
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
        </div >
    );
};

export const Pagination: FunctionComponent<SignInProp> = ({ buttonColor = "blue" }) => {
    return (
        <div className="tc cf mt4">
            <h1> 1/ 51 </h1>
        </div>
    );
};

