import Table from "../../controllers/table/Table";
import "./cart.scss";

export default function Cart() {
  return (
    <div className="cart">
      <div className="left">
        <table>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <Table />
          <Table />
          <Table />
        </table>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>CART TOTAL</h2>
          <div className="totalText">
            <b>Subtotal:</b>$78.60
          </div>
          <div className="totalText">
            <b>Discount:</b>$0.60
          </div>
          <div className="totalText">
            <b>Total:</b>$78.60
          </div>
          <button>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}
