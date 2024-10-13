import { useState } from "react";
import { Alert } from "./componets/Alert";
import "./App.css";
import { Button } from "./componets/Button";
import { Like } from "./componets/Like/Like";
import { Cart } from "./Cart";
import { ExpandableText } from "./ExpandableText";

function App() {
  let cities = ["andalusia", "sevilla"];
  let heading = "Hola sjddfsdfb";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const initialDrink = {
    title: "Americano",
    price: 5,
  };
  const [drink, setDrink] = useState(initialDrink);

  const handleDrink = () => {
    setDrink({ ...drink, price: drink.price + 1 });
  };

  const [clicked, setClicked] = useState(false);

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 92334,
    },
  });

  const [item, setItem] = useState(["Cristina", 34]);

  const [bug, setBug] = useState([
    { id: 1, name: "buggie", age: 45, fied: false },
    { id: 2, name: "num", age: 78, fied: false },
  ]);

  const handleBug = () => {
    setBug(bug.map((bug) => (bug.id === 1 ? { ...bug, fied: true } : bug)));
  };
  const {
    name,
    address: { city, zipCode },
  } = customer;
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 5678,
      },
    });
  };

  const handleItem = () => {
    setItem([...item, "56"]);
  };
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 22,
    },
  });
  const handleGame = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Eric",
      },
    });
  };

  const [pizza, setPizza] = useState({
    name: "Spicy pepperoni",
    toppings: ["Mushroom"],
  });

  const onUpdatePizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "carnita"] });
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "product 1", quantity: 1 },
      { id: 2, name: "product 1", quantity: 1 },
    ],
  });

  const onUpdateCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    // <div style={{position:"relative", padding:"2rem"}}>
    //   <Button onClick={() => setClicked(!clicked)} heading={"My  button"} />
    //   {clicked && (
    //     <Alert onClose={() => setClicked(!clicked)} name="My alert" />
    //   )}
    //   <div>
    //     <Like onClick={()=> console.log("clicked")} />
    //   </div>
    // </div>

    <div>
      {/* <button onClick={handleDrink}>Update price</button>
      {name}

      {item.map((i) => (
        <>
          {i} {}
        </>
      ))}
      {drink.price}

      <button onClick={() => setDrink({ ...initialDrink })}>Reset price</button>
      <p>{drink.price}</p> */}
      {/* <Cart items={cartItems} removeItems={() => setCartItems([])} /> */}
      <ExpandableText >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </ExpandableText>
    </div>
  );
}

export default App;
