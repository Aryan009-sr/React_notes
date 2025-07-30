


function Shishya({naam}) {
    return (
        <>
            {/* <p>Istudent: {name}</p> */}
            {
                naam.map((item) => { 
                    return (
                        <h1>{item}</h1>
                    )
                })
            }
        </>
    )
}

export default Shishya;