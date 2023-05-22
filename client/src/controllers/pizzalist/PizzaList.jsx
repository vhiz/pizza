import PizzaCard from "../pizzacard/PizzaCard";
import './pizzalist.scss';

export default function PizzaList() {
  return (
    <div className="pizzalist">
      <h1>THE BEST PIZZA IN TOWN</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        sit, tempora nobis quasi veritatis pariatur deleniti? Fugiat recusandae
        voluptatum nemo praesentium, facilis doloremque unde. Deserunt adipisci
        nisi pariatur neque ut!
      </p>
      <div className="wrapper">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}
