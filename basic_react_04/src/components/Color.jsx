import { useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState('white')
    function handleRed() {
        setColor ('red')
    }
    function handleBlue() {
        setColor ('blue')
    }
    function handleGreen() {
        setColor ('green')
    }

    return (
        <>
        <div style={{backgroundColor: color}}>
            <h1 style={{padding:'15px'}}>Changing the color like chamaeleon: {color}</h1>
            <button onClick={handleRed}>RED</button>
            <button onClick={handleBlue}>BLUE</button>
            <button onClick={handleGreen}>GREEN</button>
        </div>
        </>
    )
}

export default ChangeColor;