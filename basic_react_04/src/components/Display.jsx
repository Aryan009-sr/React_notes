import { useState } from "react";

function Display() {
    const [name, setName] = useState("Prakhar")
    const [count, setCount] = useState(10);
    function handleBtn() {
        setCount(count * 5)
    }
    function handleName() {
        setName("anonymous")
    }

    return (
        <div>
            <h1 onClick={handleName}>Name:{name}</h1>
            <button onClick={handleBtn}>count: {count}</button>
        </div>
    )
}
export default Display;