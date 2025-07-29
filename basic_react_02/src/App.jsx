import Intro from "./components/Intro";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import PackedItems from "./components/Packing";
import TodoList from "./components/Todo";
import Status from "./components/Loading";
import BookList from "./components/Booklist";

function App() {
  const books = [
    {id: 1, title: "Book 1"},
    {id: 2, title: "Book 2"},
    {id: 3, title: "Book 3"},
  ];
  return(
    <BookList books={books}></BookList>
  )
}
export default App;