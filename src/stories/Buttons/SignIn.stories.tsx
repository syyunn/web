import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export default {
    title: 'Buttons/SignIn',
};

type SignInProp = {
    buttonColor?: string
}

export const Button: FunctionComponent<SignInProp> = ({ buttonColor = "blue" }) => {
    const button_cx = classNames(`bg-animate pointer fw6 items-center br2 bn justify-center pa2 f6 bg-${buttonColor} ma0 white pa2 inline-flex`)

    return (
        <button className={button_cx} style={{ minWidth: "70px" }}>
            <div className="dn">Sign in</div>
            <div className="dib">Sign in</div>
        </button >
    );
};
