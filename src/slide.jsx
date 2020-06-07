import React, { useContext } from 'react';
import { SlideSetContext } from './slideSet';


function Slide(props) {
    const slideSetContext = useContext(SlideSetContext)
    return (<>
        <header className="App-header">
            <h1>{props.title}</h1>
            {props.content}
            <span className="slideCounter">
                {slideSetContext.currentSlide}/{slideSetContext.numSlides}
            </span>
        </header>
    </>
    )
}

export default Slide