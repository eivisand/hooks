import React, { createContext, useState, useCallback, useRef } from "react"
import Slide from "./slide";
import ComparisonContent from "./ComparisonContent";
import thisthat from "./assets/thisthat.png"
import thisthis from "./assets/thisthisthis.png"
import functional from "./assets/functional component.png"
import localState from "./assets/local state.png"
import classComponent from "./assets/class component.png"
import contextProvider from "./assets/contextProvider.png"
import contextConsumer from "./assets/contextConsumer.png"
import customHook from "./assets/customHook.png"
import preCustomHook from "./assets/preCustomHook.png"
import useCustomHook from "./assets/useCustomHook.png"
import renderFunction from "./assets/renderFunction.png"
import dependencies from "./assets/dependencies.png"
import outer from "./assets/outer.png"
import outerMutating from "./assets/outerMutating.png"
import reuseStatefulLogic from "./assets/reuseStateLogic.png"
import noReuseStatefulLogic from "./assets/unReusableStateLogic.png"
import useStateImg from "./assets/useState.png"
import useEffectImg from "./assets/useEffect.png"
import useContextImg from "./assets/useContext.png"
import useMemoizedImg from "./assets/useMemoized.png"
import useArrowCounter from "./useArrowCounter";
import {Counter, OuterMutatingComponent, OuterComponent} from "./examples"

const slideSet = [{
    title: "A guide to hooking",
    content: null
}, {
    title: "Outline",
    content: (<ul>
        <li>Why</li>
        <li>How</li>
        <li>Pitfalls</li>
        </ul>)
},
{
    title: "Why - Spread logic is hard to follow",
    content: (<ComparisonContent 
        case={<img src={classComponent} className="img-sideBySide"/>} 
        counterCase={<img src={functional} className="img-sideBySide"/>} 
    />)
},
{
    title: "Why - Reuse stateful logic",
    content: (<ComparisonContent
        case={<img src={noReuseStatefulLogic} />}
        counterCase={<img src={reuseStatefulLogic}/>}
    />),

},
{
    title: "Why - No need to learn components",
    content: (<ComparisonContent
        case={<img src={thisthat} />}
        counterCase={<><img src={thisthis}/><h1>wat</h1></>}
    />)
},
{ 
    title: "How - Local state",
    content: (
        <>
        <img className="subHeaderImg" src={useStateImg}/>
        <ComparisonContent
        case={<img src={localState} />}
        counterCase={<div className={"buttonWrapper"}><Counter/></div>}
        />
        </>
    )
},
{
    title: "How - Effects",
    content: (
        <>
        <img className="subHeaderImg" src={useEffectImg}/>
        <img className="content-onlyImage" src={preCustomHook}/>
        </>
    )
},
{
    title: "How - Context",
    content: (
        <>
        <img className="subHeaderImg" src={useContextImg}/>
        <ComparisonContent
        case={<img src={contextProvider}/>}
        counterCase={<img src={contextConsumer}/>}
        />
        </>
    )
},
{
    title: "How - Memoized values",
    content: (
        <>
        <img className="subHeaderImg" src={useMemoizedImg}/>
        <ComparisonContent
        case={<><img src={outerMutating}/><OuterMutatingComponent/></>}
        counterCase={<><img src={outer}/><OuterComponent/></>}
        />
        </>
    )
},
{
    title: "How - Custom hooks",
    content: (
        <ComparisonContent
        case={<img src={preCustomHook}/>}
        counterCase={<><img src={customHook}/><img src={useCustomHook}/></>}
        />
    )
},
{
    title: "Pitfalls - React in general",
    content: (
        <img className="content-onlyImage" src={renderFunction}/>
    )
},
{
    title: "Pitfalls - Dependencies",
    content: (
        <img className="content-onlyImage" src={dependencies}/>
    )
}
]
export const SlideSetContext = createContext(
    {currentSlide: 0, numSlides: slideSet.length}
)

function SlideSet(props) {
    const currentSlide = useArrowCounter(0)
    return (
    <SlideSetContext.Provider 
        value={{currentSlide: currentSlide + 1, numSlides: slideSet.length}}>
        <Slide {...slideSet[currentSlide]} />
    </SlideSetContext.Provider>)
}

export default SlideSet;