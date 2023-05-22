import Featured from "../../controllers/featured/Featured";
import PizzaList from "../../controllers/pizzalist/PizzaList";
import './home.scss'

export default function Home() {
  return (
    <div className="home">
      <Featured />
      <PizzaList />
    </div>
  );
}
