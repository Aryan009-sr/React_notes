

export function Dog(props){
    return (
        <div>
            {
                props.object.map((item) => {
                    return (<div>
                            <h2>Name: {item.name}</h2>
                            <h2>Age: {item.age}</h2>
                            <h2>Color: {item.color}</h2>
                            </div>)
                })
            }
        </div>
    )
}

export function Cat(props){
    return (
        <div>
            {
                props.object.map((item) => {
                    return (<div>
                            <h2>Name: {item.name}</h2>
                            <h2>Color: {item.color}</h2>
                            </div>)
                })
            }
        </div>
    )
}












