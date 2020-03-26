import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { NavigationHeader, NavigationHeaderWithLogo, NavigationHeaderWithLogoWithoutBorderBottomLine, NavigationHeaderWithTextLogoWithoutBorderBottomLine } from './NavHeader.stories';
import { GovGradCAM, ArticleGradCAM, Invokability, Comparison } from '../Articles/Article.stories'
import { ListOverflowDS, ListOverflowArticle, ListOverflowDSNoBB, ListOverflowDSLightYellow } from '../Menu/ListOverflow.stories'
import { NavHeaderBreadCrums } from '../Menu/BreadCrums.stories'
import { Axis } from '../D3/Axis.stories'

export default {
    title: 'Layouts/Entire',
};

type EntireScreenProps = { components?: null | FunctionComponent<any>[] }

export const EntireScreen = ({ components = null }: EntireScreenProps) => {
    const div_cx = classNames('flex flex-column min-vh-100');
    return (
        <div className={div_cx}>
            {components ? components.map((Component, key: number) => (<Component key={key} />)) : null}
        </div>
    );
};

export const Entire = () => EntireScreen({ components: [NavigationHeaderWithTextLogoWithoutBorderBottomLine, NavHeaderBreadCrums, ListOverflowDS, Invokability, ListOverflowDSNoBB, ListOverflowArticle, GovGradCAM, ListOverflowDSNoBB, ListOverflowArticle, ArticleGradCAM] });
