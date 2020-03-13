import React, { FunctionComponent } from 'react';

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
        <article className="cf ph4-ns pv4">
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="f1 lh-title fw9 mb3 mt0 pt3 bt bw2">
                    Korea - Various Measures on Beef
                </h1>
                <p className="f4 mid-gray lh-copy pv3 fw5 " style={{ whiteSpace: "pre-wrap" }}>
                    {/* <span className="bg-blue">Test </span> */}
                    {text.replace(/(?:\r\n|\r|\n)/g, ' ')}
                </p>
            </header>
            <div className="fn fl-ns w-50-ns">
                <p className="f4 lh-copy pv3 mt0-ns fw5 mid-gray" style={{ whiteSpace: "pre-wrap" }}>
                    {art.replace(/(?:\r\n|\r|\n)/g, ' ')}

                </p>
                {/* <p className="f5 lh-copy measure">
                All typography consists of letters. These appear either in the form of a
                    smoothly running sentence or as an assembly of lines, which may even have
                    contrasting shapes. Good typog- raphy begins, and this is no minor
                    matter, with the typeset- ting of a single line of text in a book or a
                    newspaper. Using exactly the same typeface, it is possible to create either
                    a pleasant line, easily read, or an onerous one. Spacing, if it is too wide
                    or too compressed, will spoil almost any typeface.
                </p> */}
            </div>
        </article>
    )

};

// https://danmarshall.github.io/google-font-to-svg-path/