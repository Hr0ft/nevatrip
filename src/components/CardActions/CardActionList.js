import BoardingTimeList from '../BoardingTimeList/BoardingTimeList';
import '../../SCSS/CardActionList.scss';

export default function CardActionList(props) {
  const { actions, timeList, timeListIsOpen } = props;

  return (
    <section className="card__actions-list">
      <div className="card__actions-item">{actions.ticketTimeTo}</div>
      <div className="card__actions-item">{actions.ridesCount}</div>
      <div className="card__actions-item">{actions.stopsCount}</div>
      <div className="card__actions-item">Ближайший рейс сегодня</div>
      <div className="card__timelist">
        <BoardingTimeList timeList={timeList} timeListIsOpen={timeListIsOpen} />
      </div>
    </section>
  );
}
