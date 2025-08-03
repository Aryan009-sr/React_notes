import { useState, useEffect, use } from "react";
import React from "react";

function Effects() {
    const [val , setVal] = useState(100);
    const [clock, setClock] = useState(0);

    console.log("Hello everyone");
    
    //Case no - 1
    // useEffect(() => {
    //     console.log("I am using useEffect");
    // }, []);
    // Case no - 2
    // useEffect(() => {
    //     console.log("I am using useEffect with dependencies value in it");
    // },  [val, clock]);
    //Case no - 3 
    useEffect(() => {
        console.log("I am using useEffect with no dependency array at all");
    });

    console.log("I am outside of useEffect");
    return (
        <div>
            <h1>Effects and its Effects</h1>
            <button onClick={() => setVal(val + 50)}>SET VALUE: {val}</button>
            <button onClick={() => setClock(clock + 50)}>SET VALUE: {clock}</button>
        </div>
    )
}

export default Effects;
// This component demonstrates the use of useEffect with different dependency scenarios.