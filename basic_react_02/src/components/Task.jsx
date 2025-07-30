


function Task({id, chore, isCompleted}) {
    return (
        <div style={{
            display:'inline-block',
            padding:'15px',
            border:'2px solid black',
            borderRadius:'8px'
        }}>
            <h1>Todo List</h1>
            <p>Work ID: {id}</p>
            <p>Work : {chore}</p>
            <p>Work done: {JSON.stringify(isCompleted)}</p>
        </div>
    )
}
export default Task




