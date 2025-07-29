
function Item(props) {
    return ( <li> {props.data.isPacked ? props.data.name + "✔" : props.data.name + "✗"} </li>); // Using ternary operator
    // if (props.isPacked){
    //     return (
    //         <li>{props.name} ✔</li>
    //     )
    // } else {
    //     return (
    //         <li>{props.name}</li>
    //     )
    // }
}
export default Item;




