


function Intro(props){
    // const myName = "Prakhar Singh";
    // const myAge = 27;
    // const myNumber = "123455666";
    // const myFavColor = "Black";

    return (
        <div style={{display:"inline-block",
        padding: '20px',
        border:'2px solid black',
        borderRadius: '10px'
        }}>
            <h1>Introduction</h1>
            <p><strong>Name:</strong>{props.name}</p>
            <p><strong>Age:</strong>{props.age}</p>
            <p><strong>Number:</strong>{props.number}</p>
            <p><strong>Colour:</strong>{props.favColor}</p>
        </div>
    )
}
export default Intro;




