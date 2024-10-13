
interface Props{
cartCount: number
}
export const NavBar =({cartCount}:Props)=> {
    return <div>Cart : {cartCount}</div>
}