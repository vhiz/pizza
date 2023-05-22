import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="item">
        <div className="callButton">
          <img src="/img/phone.png" alt="" />
        </div>
        <div className="texts">
          <span>ORDER NOW!</span>
          <span>09003 34043</span>
        </div>
      </div>
      <div className="item">
        <ul>
          <li>Homepage</li>
          <li>Products</li>
          <li>Menu</li>
          <img src="/img/joker.png" alt="" />
          <li>Events</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="item">
        <Link className="link" to={"/cart"}>
          <div className="cart">
            <img src="/img/cart.png" alt="" />
            <span>2</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
