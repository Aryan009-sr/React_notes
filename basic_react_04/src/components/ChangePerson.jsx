function ChangePerson({name}) {

    function handleClick(){
        console.log("Welcome to the click event");
    }
    function handleName (a,b) {
        console.log('This is the second example of using onclick event', a, b)
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <button onClick={handleClick}>Click one</button>
            <button onClick={() => handleName("Prakhar", 'singh')}>Click two</button>
        </div>
    )
}

export default ChangePerson;