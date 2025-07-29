import Item from "./Items"

function PackedItems() {
    const items = [
        {id: 1, name: "Toothbrush", isPacked: true},
        {id: 2, name: "Kacchha banyan", isPacked: false},
        {id: 3, name: "Trimmer", isPacked: true},
        {id: 4, name: "Dumbells", isPacked:true},
        {id: 5, name: "Dry snacks", isPacked:false}
    ]
    return (
        items.map((item) => {
            return <Item key={item.id} data={item}></Item>
        })
    )
}
export default PackedItems;