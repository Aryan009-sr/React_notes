

import { useState, useEffect } from "react";

function Counther() {

    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

        function handleDecrement() {
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={() => handleIncrement()}> Increment </button>
            <h1>Count board: {count}</h1>
            <button onClick={() => handleDecrement()}> Decrement </button>
            <button onClick={() => (console.log("Learning batching"))}> Batching concept </button>
        </div>
    )
}

export default Counther;