import Intro from "./components/Intro";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import PackedItems from "./components/Packing";
import TodoList from "./components/Todo";
import Status from "./components/Loading";
import BookList from "./components/Booklist";
import ChangePerson from "./components/ChangePerson";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import Task from "./components/Task";
import Mentor from "./components/Mentor";
import Shishya from "./components/Shishya";
import {Dog, Cat}from "./components/Animals";



function App() {

  const arr1 = [
  {name: "dog1", age: 10, color: 'black'},
  {name: "dog2", age: 11, color: 'blue'},
  {name: "dog3", age: 12, color: 'beige'},
  {name: "dog4", age: 13, color: 'brown'},
  {name: "dog5", age: 14, color: 'bronze'}
]

const arr2 = [
  {name: 'cat1', color:'brown'},
  {name: 'cat2', color:'black'},
]
  return (
    <>
      <Dog object={arr1}/>
      <br />
      <Cat object={arr2}/> 
    </>
  )
}
export default App;