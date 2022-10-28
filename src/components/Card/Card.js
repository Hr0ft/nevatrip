import CardActionList from '../CardActions/CardActionList';
import CardFooter from '../CardFooter/CardFooter';
import '../../SCSS/Card.scss';

export default function Card(props) {
  const { cardData, matches } = props;

  return (
    <div className="card__wrapper">
      <div className="card__img">
        <img src={cardData.imgUrl} alt="IMG" />
        {!cardData.stock.stockIsActive ? (
          <div className="card__is-stock">{cardData.stock.stockName}</div>
        ) : null}
      </div>
      <div className="card__content">
        <h2 className="card__title">{cardData.cardTitle}</h2>
        <p className="card__time-in-trip">{cardData.tripTimes}</p>

        <CardActionList
          actions={cardData.actions}
          timeList={cardData.timeList}
          timeListIsOpen={cardData.timeListIsOpen}
        />
        <CardFooter cost={cardData.cost} matches={matches} />
      </div>
    </div>
  );
}
