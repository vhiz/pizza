import "./orders.scss";

export default function Order() {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 0 || index - status === 0) return "done";
    if (index - status === 1) return "preparing";
    if (index - status > 2 || index - status === 2) return "unDone";
  };

  return (
    <div className="order">
      <div className="left">
        <div className="row">
          <table>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>119083018303</td>
              <td>Vhiz</td>
              <td>FCT, Abuja</td>
              <td>$58.90</td>
            </tr>
          </table>
        </div>
        <div className="row">
          <div className={statusClass(0)}>
            <img src="/img/paid.png" alt="" />
            <span>Payment</span>
            <div className="checkedIcon">
              <img src="/img/check.png" alt="" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <img src="/img/cook.png" alt="" />
            <span>Preparing</span>
            <div className="checkedIcon">
              <img src="/img/check.png" alt="" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <img src="/img/bike.png" alt="" />
            <span>On The Way</span>
            <div className="checkedIcon">
              <img src="/img/check.png" alt="" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <img src="/img/delivered.png" alt="" />
            <span>Delivered</span>
            <div className="checkedIcon">
              <img src="/img/check.png" alt="" />
            </div>
          </div>
        </div>
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
          <button disabled>PAID</button>
        </div>
      </div>
    </div>
  );
}
