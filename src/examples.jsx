import React, {useState, useEffect} from 'react'

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

    return <span>{this.state.someState}</span>
}

export function Counter(props) {
    const [count, setCount] = useState(0);
    return <button 
        onClick={() => setCount(count+1)}>
        I've been clicked {count} times
    </button>
}