

function BookList(props){
    return (
        <ol>
            {" "}
            {props.books.map((book , index)=> {
                return <li key={index}>{book.title}</li>
            })} {" "}
        </ol>
    );
}

export default BookList;