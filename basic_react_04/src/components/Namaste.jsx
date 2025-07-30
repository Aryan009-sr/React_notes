import { useState } from "react"

function Namaste({name}) {
    const [username, setUsername] = useState(name)
    function handleClick() {
        setUsername("Anonymous")
    }

    return (
        <div>
            <h1>Name: {username}</h1>
            <button onClick={handleClick}> Logout </button>
        </div>
    )
}
export default Namaste;