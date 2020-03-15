import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export default {
    title: 'Layouts/MainPane',
};

type MainPaneProps = {
    subPanePosition: null | 'right-side-pane' | 'left-side-pane',
    paneWidth?: number,
    navHeaderHeight?: number,
    subPaneComponents?: null | FunctionComponent<any>[]
    mainPaneComponents?: null | FunctionComponent<any>[]
}

export const MainPane = ({ subPanePosition = null, paneWidth = 260, navHeaderHeight = 55, subPaneComponents = null, mainPaneComponents = null }: MainPaneProps) => {
    const div_cx = classNames('flex w-100 mw8 center mt4')
    const main_div_cx = classNames(`${subPanePosition ? null : 'flex-auto'}`)
    const main_div_sub_cx = classNames('relative mh0-ns mb5 nl3')
    const main_div_sub_tab_cx = classNames('relative outline-0')
    // const main_div_sub_tab_iframe_cx = classNames('absolute bn')
    const pane_div_cx = classNames(`fixed ${subPanePosition} ${subPanePosition == "right-side-pane" ? 'right-0 bl' : 'left-0 br'} bg-white bl b--silver z-3`)
    return (
        <main style={
            {
                flexGrow: 1, flexShrink: 1, flexBasis: '0%', zIndex: 0,
            }
        }
        >
            <div className={div_cx}>
                <div className={main_div_cx} style={{ width: `calc((100% + (100vw - 100%) / 2) - ${paneWidth}px)` }}>
                    <div className={main_div_sub_cx} style={{ marginLeft: "21px", marginRight: "21px", WebkitTextSizeAdjust: "100%" }}>
                    </div>
                </div>
                {subPanePosition ? <div className={pane_div_cx} style={{ width: `${paneWidth} px`, top: `${navHeaderHeight}px` }}>
                    <div className="flex flex-column top-1" style={{ position: 'sticky', height: `calc(100vh - 55px)` }}>
                        {subPaneComponents ? subPaneComponents.map((Component, key: number) => (<Component key={key} />)) : null}
                    </div>
                </div> : null}
            </div>
        </main >
    )
}

export const MainPaneWithRightSubPane = () => MainPane({ subPanePosition: 'right-side-pane', paneWidth: 320 })
