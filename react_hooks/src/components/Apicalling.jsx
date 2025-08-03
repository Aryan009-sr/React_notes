import axios from "axios";
import { useState, useEffect } from "react";

function Calling() {
// fetching data using axios and promises.
    const [todos, setTodos] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/todos";
    // useEffect(() => {
    //     axios.get(API)
    //         .then((response) => {
    //             console.log(response.data);
    //             setTodos(response.data);
    //         }).catch((error) => {
    //             console.error("Error fetching data: ", error);
    //         })
    // }, []);

    //fetching data using fetch API AND PROMISES
    // useEffect (() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setTodos(data);
    //         })
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    // FETCH WITH ASYNC AWAIT
    // useEffect (() => {
    //     async function fetching() {
    //         const resp = await fetch(API);
    //         const data = await resp.json();
    //         console.log(data);
    //         setTodos(data);
    //     }
    //     fetching();
    // }, []);

    // Axios wit async await
    // useEffect( () => {
    //     async function fetchData() {
    //         const response = await axios.get(API);
    //         console.log(response.data);
    //         setTodos(response.data);
    //     }
    //     fetchData();
    // },[]); 
    return (
        <div>
            <h1>API CALLING</h1>
        </div>
    )
}

export default Calling;