import React, { FunctionComponent } from 'react';
import { Axis, Compare } from '../D3/Axis.stories'
import { Image } from '../Images/Image.stories'
import { PrevNextButton, Pagination } from '../Buttons/Nav.stories'

export default {
    title: 'Articles/Article',
};

type LogoProp = {
    textColor?: string
}

export const Article: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    var art = 'Article III\nNational Treatment on Internal Taxation and Regulation\n4. The products of the territory of any contracting party imported into the territory of any other contracting party shall not be subject, directly or indirectly, to internal taxes or other internal charges of any kind in excess of those applied, directly or indirectly, to like domestic products. Moreover, no contracting party shall otherwise apply internal taxes or other internal charges to imported or domestic products in a manner contrary to the principles set forth in paragraph 1.'
    return (
        <article className="cf mh4 bb b--silver">
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="f1 lh-title fw9 mb3 mt0 pt3 tc">
                    Korea - Various Measures on Beef
                </h1>
                <p className="f4 lh-copy pv3 mt0-ns fw5 mid-gray ph1-ns" style={{ whiteSpace: "pre-wrap" }}>
                    {text.replace(/(?:\r\n|\r|\n)/g, ' ')}
                </p>
            </header>
            <header className="fn fl-ns w-50-ns pr4-ns ph4-ns bl b--silver">
                <h1 className="f1 lh-title fw9 mb3 mt0 pt3 tc">
                    {/* Article III: 4 */}
                    Invokability
                </h1>
                {/* <p className="f4 lh-copy pv3 mt0-ns fw5 mid-gray ph1-ns" style={{ whiteSpace: "pre-wrap" }}>
                    {art.replace(/(?:\r\n|\r|\n)/g, ' ')}
                </p> */}
                <Axis />
            </header>
        </article>
    )
};

export const ArticleSole: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    var art = 'Article III\nNational Treatment on Internal Taxation and Regulation\n4. The products of the territory of any contracting party imported into the territory of any other contracting party shall not be subject, directly or indirectly, to internal taxes or other internal charges of any kind in excess of those applied, directly or indirectly, to like domestic products. Moreover, no contracting party shall otherwise apply internal taxes or other internal charges to imported or domestic products in a manner contrary to the principles set forth in paragraph 1.'
    return (
        <article className="cf mh4 bb b--silver">
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="f1 lh-title fw9 mb3 mt0 pt3 tc">
                    Article III: 4
                </h1>
                <p className="f4 lh-copy pv3 mt0-ns fw5 mid-gray ph1-ns" style={{ whiteSpace: "pre-wrap" }}>
                    {art.replace(/(?:\r\n|\r|\n)/g, ' ')}
                </p>
            </header>
            <header className="fn fl-ns w-50-ns pr4-ns ph4-ns bl b--silver">
                <h1 className="f1 lh-title fw9 mb3 mt0 pt3 tc">
                    {/* Article III: 4 */}
                    Prediction
                </h1>
                {/* <p className="f4 lh-copy pv3 mt0-ns fw5 mid-gray ph1-ns" style={{ whiteSpace: "pre-wrap" }}>
                    {art.replace(/(?:\r\n|\r|\n)/g, ' ')}
                </p> */}
                <Compare />
            </header>

        </article>
    )
};

// https://danmarshall.github.io/google-font-to-svg-path/

export const GovGradCAM: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    var art = 'Article III\nNational Treatment on Internal Taxation and Regulation\n4. The products of the territory of any contracting party imported into the territory of any other contracting party shall not be subject, directly or indirectly, to internal taxes or other internal charges of any kind in excess of those applied, directly or indirectly, to like domestic products. Moreover, no contracting party shall otherwise apply internal taxes or other internal charges to imported or domestic products in a manner contrary to the principles set forth in paragraph 1.'
    return (
        <article className="cf mh4 bb b--silver">
            <h1 className="f2 lh-title fw7 mb3 mt0 pt3 tc">
                Model Activations on Factual Aspect of DS 2 with respect to the Article III: 4
            </h1>
            <header className="fn fl-ns pr4-ns mb3">
                <div className="fl-ns w-90-ns mb3">
                    <Image />
                </div>
                <div className="fl-ns w-10-ns pr4-ns mt5 items-center">
                    <Pagination />
                    <PrevNextButton />
                </div>
            </header>
        </article>
    )
};

export const ArticleGradCAM: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    var art = 'Article III\nNational Treatment on Internal Taxation and Regulation\n4. The products of the territory of any contracting party imported into the territory of any other contracting party shall not be subject, directly or indirectly, to internal taxes or other internal charges of any kind in excess of those applied, directly or indirectly, to like domestic products. Moreover, no contracting party shall otherwise apply internal taxes or other internal charges to imported or domestic products in a manner contrary to the principles set forth in paragraph 1.'
    return (
        <article className="cf mh4 bb b--silver">
            <h1 className="f2 lh-title fw7 mb3 mt0 pt3 tc">
                Model Activations on Article III:4 with respect to the Factual of DS 2
            </h1>
            <header className="fn fl-ns pr4-ns mb3">
                <div className="fl-ns w-90-ns mb3">
                    <Image />
                </div>
                <div className="fl-ns w-10-ns pr4-ns mt5 items-center">
                    <Pagination />
                    <PrevNextButton />
                </div>
            </header>
        </article>
    )
};


export const Invokability: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    var art = 'Article III\nNational Treatment on Internal Taxation and Regulation\n4. The products of the territory of any contracting party imported into the territory of any other contracting party shall not be subject, directly or indirectly, to internal taxes or other internal charges of any kind in excess of those applied, directly or indirectly, to like domestic products. Moreover, no contracting party shall otherwise apply internal taxes or other internal charges to imported or domestic products in a manner contrary to the principles set forth in paragraph 1.'
    return (
        <article className="cf mh4 bb b--silver">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 tc">
                Model Prediction on Invokable Articles For DS 2
            </h1>
            <header className="fn fl-ns w-50-ns pr4-ns ph4-ns">
                <Axis />
            </header>
        </article>
    )
};

export const Comparison: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    var text = 'WT/DS161/R\n                                                                                             WT/DS169/R\n                                                                                                    Page 3\nII.      FACTUAL ASPECTS\n1. Product coverage of the dispute\n8.       The case before the Panel concerned measures maintained by Korea on imports of beef of the\nfollowing tariff description4: 02.01-10: meat of bovine animals (fresh or chilled/carcasses and half-\ncarcasses); 02.01-20: meat of bovine animals (fresh or chilled/cuts with bone in); 02.01-30: meat of\nbovine animals (fresh or chilled/boneless); 02.02-10: meat of bovine animals (frozen/carcasses and\nhalf-carcasses): 02.02-20: meat of bovine animals (frozen/cuts with bone in); 02.02-30: meat of\nbovine animals (frozen/boneless);\n2. Korea\'s Schedule of Concessions\n9.       Korea\'s Schedule of tariff concessions (LX) provides for the entry of fresh, chilled and frozen\nbeef with market access opportunities rising from 123,000 tonnes in 1995 to 225.000 tonnes in 2000.\n'
    var art = 'Article III\nNational Treatment on Internal Taxation and Regulation\n4. The products of the territory of any contracting party imported into the territory of any other contracting party shall not be subject, directly or indirectly, to internal taxes or other internal charges of any kind in excess of those applied, directly or indirectly, to like domestic products. Moreover, no contracting party shall otherwise apply internal taxes or other internal charges to imported or domestic products in a manner contrary to the principles set forth in paragraph 1.'
    return (
        <article className="cf mh4 bb b--silver">

            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 tc">
                Model Prediction vs Actual Citation on Article III: 4
            </h1>
            <header className="fn fl-ns w-50-ns pr4-ns ph4-ns">
                <Compare />
            </header>
        </article>
    )
};
