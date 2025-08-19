import React, { useReducer } from 'react'

let initialValue = 0
const reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state > 0 ? state - 1 : state;
        default:
            return state;
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => { dispatch("Increment") }}>Increment</button>
            <button onClick={() => { dispatch("Decrement") }}>Decrement</button>
        </div>
    )
}

export default UseReducer;
