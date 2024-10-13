import { NavBar } from "./NavBar"



interface Props {
items: string [],
removeItems: () => void
}
export const Cart = ({items, removeItems}: Props) => {

    return (
        <>
        <NavBar cartCount={items.length}/>
        <ul> Products
            {items.map(item=> <li key={item}>{item}</li>)}
        </ul>

        <button onClick={removeItems}>Remove</button>
        </>
    )


}