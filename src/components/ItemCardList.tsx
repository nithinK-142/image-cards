import { CardData, defaultCardData } from "../data/card-data";


const ItemCardList = ({ items }: { items: CardData[] }) => {
  return (
    <div className="item-card-list">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <div className="image">
            <img src={item.imageUrl || defaultCardData[0].imageUrl} alt={item.title || defaultCardData[0].title} />
          </div>
          <div className="details">
            <h2>{item.title || defaultCardData[0].title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCardList;
