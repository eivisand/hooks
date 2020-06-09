import React, {useState, useEffect, useCallback, useRef} from 'react'

class ComplexComponent extends React.Component {
    constructor(props) {
        super(props)
        this.eventHandler = this.eventHandler.bind(this)
    }
    eventHandler(event){
        // do something
    }
    render() {
        return <button onClick={this.eventHandler}></button>
    }
}

function ComplexFunctionalComponent(props) {
    const [someState, setSomeState] = useState("someState");
    
    useEffect(() => {
        // do something
        return () => {
            // do some cleanup
        }
    }, [/*dependencies*/])

    const someFunction = useCallback(
        () => {
            // do something
        },
        [props.a, props.b] // <- array of dependencies
    )

    return <span>{this.state.someState}</span>
}

export function Counter(props) {
    const [count, setCount] = useState(0);
    return <button 
        onClick={() => setCount(count+1)}>
        I've been clicked {count} times
    </button>
}

function doRender(props, state, context){
    return null
}

function render(
    props, state, context,
    nextProps, nextState, nextContext,
    previousRenderOutput) {
    if (
        props === nextProps &&
        state === nextState &&
        context === nextContext
        ) {
        return previousRenderOutput
    }
    return doRender(nextProps, nextState, nextContext)
}

const colors = ["#00FECA", "#FDF200", "#FF85EA", "#7B61F8"]
function pickRandomColor() {
    return colors[Math.floor(Math.random() * 4)]
}

export const OuterMutatingComponent = React.memo((props) => {
    const [color, setColor] = useState(pickRandomColor())
    return (
        <div className="colorCircle" style={{backgroundColor: color}}>
            <InnerComponent functionProp={() => setColor(pickRandomColor())} />
        </div>
        )
})
export const OuterComponent = React.memo((props) => {
    const [color, setColor] = useState(pickRandomColor())
    const setRandomColor = useCallback(() => setColor(pickRandomColor()), [setColor])
    return (
        <div className="colorCircle" style={{backgroundColor: color}}>
            <InnerComponent functionProp={setRandomColor} />
        </div>
    );
})
const InnerComponent = React.memo((props) => {
    const renderCount = useRef(-1)
    renderCount.current = renderCount.current+1;
    return <button onClick={props.functionProp}>Times rendered: {renderCount.current}</button>
})