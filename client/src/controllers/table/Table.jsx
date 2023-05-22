import "./table.scss";

export default function Table() {
  return (
    <tr>
      <td>
        <div className="imgContanier">
          <img src="/img/featured1.png" alt="" />
        </div>
      </td>
      <td>Colorazo</td>
      <td>Spicy, Cheese</td>
      <td>$30</td>
      <td>2</td>
      <td className="total">$60</td>
    </tr>
  );
}
