import Item from "./Items"
import { items } from "../assets/utils/Mocktest";

function PackedItems() {
    return (
        items.map((item) => {
            return <Item key={item.id} data={item}></Item>
        })
    )
}
export default PackedItems;