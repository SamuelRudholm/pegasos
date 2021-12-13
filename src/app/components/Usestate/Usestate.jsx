import React, { useEffect, useState } from "react";

export const FirstUseState = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export const EffectHook = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me (useEffect)</button>
        </div>
    )
}