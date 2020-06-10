import React, {useState, useEffect, useCallback, useRef} from 'react'

const someEvent = null;
function addSomeEventHandler(){};

class ComplexComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            someState: "someState"
        }

    }
    componentDidMount(){
        // do something
        addSomeEventHandler(someEvent, 
            () => this.setState({someState: "someState"}))
    }
    render() {
        return <span>{this.state.someState}</span>
    }
}

function useCommonPattern(initialState) {
    const [someState, setSomeState] = useState("someState");
    
    useEffect(() => {
        // do something
        setSomeState("someNewState")
        return () => {
            // do some cleanup
        }
    }, [/*dependencies*/])

    return someState
}

function ReusingFunctionalComponent(props) {
    const someState = useCommonPattern("someState")
    return <span>{this.state.someState}</span>
}

function ComplexFunctionalComponent(props) {
    const [someState, setSomeState] = useState("someState");
    
    useEffect(() => {
        // do something
        setSomeState("someNewState")
        return () => {
            // do some cleanup
        }
    }, [/*dependencies*/])

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

export function OuterMutatingComponent(props) {
    const [color, setColor] = useState(pickRandomColor())
    return (
        <div className="colorCircle" style={{backgroundColor: color}}>
            <InnerComponent functionProp={() => setColor(pickRandomColor())} />
        </div>
        )
}

export function OuterComponent(props) {
    const [color, setColor] = useState(pickRandomColor())
    const setRandomColor = useCallback(() => setColor(pickRandomColor()), [])
    return (
        <div className="colorCircle" style={{backgroundColor: color}}>
            <InnerComponent functionProp={setRandomColor} />
        </div>
    );
}

const InnerComponent = React.memo((props) => {
    const renderCount = useRef(-1)
    renderCount.current = renderCount.current + 1;
    return <button onClick={props.functionProp}>Inner component rendered: {renderCount.current}</button>
})