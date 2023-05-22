import { Link } from "react-router-dom";
import "./pizzacard.scss";
export default function PizzaCard() {
  return (
    <div className="pizzacard">
      <Link to={"/product/123"} className="link">
        <img src="/img/featured2.png" alt="" />
        <h1>FORI DI ZUCA</h1>
        <span>$220</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
      </Link>
    </div>
  );
}
