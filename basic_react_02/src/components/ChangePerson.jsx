function ChangePerson({name , age}) {

    function handleClick(a,b) {
        console.log("Prakhar singh..", a, b)
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            {/* <button onClick={handleClick}> Logout</button> */}
            <button onClick={() => handleClick('clicked', 'you')}>click me button</button>
        </div>
    )
}

export default ChangePerson;