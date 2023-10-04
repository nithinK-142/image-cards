import { CardDataType } from "../data/card-data";

type ItemCardListProps = {
  cardData: CardDataType[];
  defaultCardData: CardDataType[];
}

const ItemCardList: React.FC<ItemCardListProps> = ({ cardData, defaultCardData }) => {
  return (
    <div className="item-card-list">
      {cardData.map((item, index) => (
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
