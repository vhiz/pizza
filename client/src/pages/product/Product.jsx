import { useState } from "react";
import "./product.scss";

export default function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/featured1.png",
    name: "PIZZA 1",
    price: [19.9, 22.4, 27.1],
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sit mollitia ",
  };
  return (
    <div className="product">
      <div className="left">
        <div className="imgContainer">
          <img src={pizza.img} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{pizza.name}</h1>
        <span className="price">${pizza.price[size]}</span>
        <p>{pizza.desc}</p>
        <h3>Choose Your Size</h3>
        <div className="sizes">
          <div className="size" onClick={() => setSize(0)}>
            <img src="/img/featured1.png" alt="" />
            <span>Small</span>
          </div>
          <div className="size" onClick={() => setSize(1)}>
            <img src="/img/featured1.png" alt="" />
            <span>Medium</span>
          </div>
          <div className="size" onClick={() => setSize(2)}>
            <img src="/img/featured1.png" alt="" />
            <span>Large</span>
          </div>
        </div>
        <h3>Choose additional ingredients</h3>
        <div className="ingredients">
          <div className="options">
            <input type="checkbox" name="double" id="double" />
            <label htmlFor="double"> Double Ingredients</label>
          </div>
          <div className="options">
            <input type="checkbox" name="cheese" id="cheese" />
            <label htmlFor="cheese"> Extra Cheese</label>
          </div>
          <div className="options">
            <input type="checkbox" name="spicy" id="spicy" />
            <label htmlFor="spicy"> Spicy</label>
          </div>
          <div className="options">
            <input type="checkbox" name="garlic" id="garlic" />
            <label htmlFor="garlic"> Garlic Sauce</label>
          </div>
        </div>
        <div className="add">
          <input type="number" defaultValue={1} min={1}  />
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
