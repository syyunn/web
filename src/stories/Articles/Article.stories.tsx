import React, { FunctionComponent, useEffect, useState } from 'react';
import { AxisTest, AxisTrain, Compare } from '../D3/Axis.stories'
import { Image } from '../Images/Image.stories'
import { PrevNextButton, Pagination } from '../Buttons/Nav.stories'
import { GBC } from '../D3/GroupedBarChart.stories'
import { ChromaScale, ChromaScaleDefault } from '../D3/ChromaScale.stories'
import { ListOverflowDSLightYellow } from '../Menu/ListOverflow.stories'

import { useDispatch, useSelector } from "react-redux";

import { STATE } from "../../redux/actionTypes"

import API, { graphqlOperation } from '@aws-amplify/api';
import awsconfig from '../../aws-exports';
import { getGovTokenized, getGovGradCam, getArticleTokenized, getArticleGradCam } from '../../graphqlQueries'
import Loader from 'react-loader-spinner'

API.configure(awsconfig);


export default {
    title: 'Articles/Article',
};

type LogoProp = {
    textColor?: string
}

const monotoneDecreaseGov = (x: number) => {
    return Math.pow(x * 15, 1)
}

const monotoneDecreaseArt = (x: number) => {
    return Math.pow(x * 3, 1)
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
                <AxisTest />
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
    const getSTATE = (state: STATE) => state
    const curr_state = useSelector(getSTATE)
    const ds = parseInt(curr_state.select.ds)
    const article = curr_state.select.article
    const [text, setText] = useState<string[]>(["this", "is", "default"]);
    const [data, setData] = useState<number[]>([1.0, 0.7, 0.5]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(false)
    }, [data])

    useEffect(() => {
        setIsLoading(true)
        console.log("is loading: ", isLoading)
        async function updateData(ds: number, article: string, version: string) {
            const result = await API.graphql(graphqlOperation(getGovGradCam, { ds_art: ds.toString() + "_" + article, version: version }));
            const newData = result.data.getGovGradCAM.weights
            if (data !== newData) {
                console.log("update new data", newData)
                setData(newData)
            }
        }
        updateData(ds, article, "1.0.0")
    }, [text, article]);

    useEffect(() => {
        async function updateText(ds: number, version: string) {
            const result = await API.graphql(graphqlOperation(getGovTokenized, { ds: ds, version: version }));
            const newText = result.data.getGovTokenized.tokens
            if (text !== newText) {
                // console.log(text, newText)
                setText(newText)
            }
        }
        updateText(ds, "1.0.0")
    }, [ds]);

    return (
        <div className="cf mh4">
            <h1 className="f2 lh-title fw7 mb3 mt3 pt3 tc avenir">
                Visualization of the Model Activations for the case : DS{ds} + {article}
            </h1>
            <div className="f3 lh-title fw6 ml2 avenir">
                Factual aspects activated for the case : DS{ds} + {article}
            </div>
            <h1 className="f5 lh-title fw4 ml2 avenir">
                <p>
                    *Brighter color means that the model has considered the corresponding word as more important one to determine the case's invokability. <br />
                </p>
            </h1>
            <div className="fl-ns w-100-ns pr4-ns">
                {isLoading ?
                    <div
                        className="mt3 mb3"
                        style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Loader color="#2BAD60" height={100} width={100} />
                    </div>
                    : <ChromaScale text={text} data={data.map(x => monotoneDecreaseGov(x))} />}
            </div>
        </div>
    )
};

export const ArticleGradCAM: FunctionComponent<LogoProp> = ({ textColor = "navy" }) => {
    const getSTATE = (state: STATE) => state
    const curr_state = useSelector(getSTATE)
    const ds = parseInt(curr_state.select.ds)
    const article = curr_state.select.article
    const [text, setText] = useState<string[]>(["this", "is", "default"]);
    const [data, setData] = useState<number[]>([1.0, 0.7, 0.5]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(false)
    }, [data])

    useEffect(() => {
        setIsLoading(true)
        console.log("is loading: ", isLoading)
        async function updateData(ds: number, article: string, version: string) {
            console.log(ds.toString() + "_" + article, text.length)
            const result = await API.graphql(graphqlOperation(getArticleGradCam, { ds_art: ds.toString() + "_" + article, version: version }));
            const newData = result.data.getArticleGradCAM.weights
            if (data !== newData) {
                console.log("update new data", newData)
                setData(newData)
            }
        }
        updateData(ds, article, "1.0.0")
    }, [text, ds]);

    useEffect(() => {
        async function updateText(article: string, version: string) {
            const result = await API.graphql(graphqlOperation(getArticleTokenized, { article: article, version: version }));
            const newText = result.data.getArticleTokenized.tokens
            if (text !== newText) {
                // console.log(text, newText)
                setText(newText)
            }
        }
        updateText(article, "1.0.0")
    }, [article]);

    return (
        <div className="cf mh4 mb3 mt3 pt3">
            <div className="f3 lh-title fw6 ml2 avenir">
                Article content activated for the case : DS{ds} + {article}
            </div>
            <h1 className="f5 lh-title fw4 ml2 avenir">
                *Brighter color means that the model has considered the corresponding word as more important one to determine the case's invokability. <br />
            </h1>
            <div className="fl-ns w-100-ns pr4-ns">
                {isLoading ?
                    <div
                        className="mt3 mb3"
                        style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Loader color="#2BAD60" height={100} width={100} />
                    </div>
                    : <ChromaScale text={text} data={data.map(x => monotoneDecreaseArt(x))} />}
            </div>
        </div>
    )
};

type InvokabilityProp = {
    split?: string
}

export const Invokability: FunctionComponent<InvokabilityProp> = ({ split = "test" }) => {

    const getSTATE = (state: STATE) => state
    const curr_state = useSelector(getSTATE)
    const ds = parseInt(curr_state.select.ds)

    return (
        <div>
            <div className="cf mh4">
                <h1 className="f2 lh-title fw7 mb3 mt3 pt3 tc avenir">
                    Model Prediction on Invokable Articles For DS {ds}
                </h1>
            </div>
            <div className="fl-ns fn w-100-ns">
                <GBC split={split} />
            </div>
            <div className="fl-ns fn w-100-ns mt3 pt3 mb5">
                <ListOverflowDSLightYellow />
            </div>
            <div className="fl-ns fn w-100-ns">
                <GBC split="train" />
            </div>
        </div>
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
