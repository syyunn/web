import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export default {
    title: 'Images/Image',
};

type ImageProps = { url?: string }

export const Image = ({ url = "https://deepwto-web-api9a69179d4be7446a8d669a50296ce2deapi-dev.s3.amazonaws.com/GovGradCAM/Screen+Shot+2020-03-22+at+3.53.16+PM.png" }: ImageProps) => {
    return (
        <img src={url} className="mw-100" alt="night sky over water" />
    );
};
