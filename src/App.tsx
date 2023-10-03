import { cardData } from "./data/card-data";
import ItemCardList from "./components/ItemCardList";

function App() {
  return (
    <div className="app">
      <h1>Dog Cards</h1>
      <ItemCardList items={cardData} />
    </div>
  );
}

export default App;
