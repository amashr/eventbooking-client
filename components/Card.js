const Card = props => (
  <div>
    <img src="/static/event.jpg" alt="Event" />
    <h4>{props.title}</h4>
    <p>{props.date}</p>
    <p>{props.location}</p>
    <p>{props.price}</p>
  </div>
);

export default Card;
