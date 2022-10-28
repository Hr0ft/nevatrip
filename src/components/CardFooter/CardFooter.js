import rubSign from '../../assets/ruble-currency-sign.svg';
import '../../SCSS/CardFooter.scss';

import RubSign from '../../assets/rubSmal.svg';

export default function CardFooter(props) {
  let { cost, matches } = props;
  return (
    <div className="card__footer">
      <div className="card__price">
        <p className="card__trip-cost">
          {cost.price} <img src={rubSign} alt="12" />
        </p>
        {cost.selaryOnPier ? (
          <p className="card__trip-cost-on-pier">
            {cost.priceOnPier} {matches ? <img src={RubSign}></img> : 'р '} на
            причале
          </p>
        ) : null}
      </div>
      <button className="card__show-more">Подробнее</button>
    </div>
  );
}
