import '../../SCSS/BoardingTimeList.scss';

export default function BoardingTimeList({ timeList, timeListIsOpen }) {
  function renderStartTime(time) {
    return (
      <div className="card__start-time" key={time.id}>
        {time.time}
      </div>
    );
  }

  if (timeListIsOpen || timeList.length <= 4) {
    return timeList.map((time) => {
      return renderStartTime(time);
    });
  } else {
    let List = timeList.map((time, idx) => {
      if (idx < 3) return renderStartTime(time);
    });
    return (
      <>
        {List}
        <div className="card__start-time">еще...</div>
      </>
    );
  }
}
