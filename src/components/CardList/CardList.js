import Card from '../Card/Card';

export default function CardList(props) {
  const { cardList, matches } = props;

  return cardList.map((card, idx) => {
    return (
      <div className="card" key={idx}>
        <Card cardData={card} matches={matches} />
      </div>
    );
  });
}
