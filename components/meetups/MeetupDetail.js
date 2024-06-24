import classes from "./MeetupDetail.module.css";



function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      ></img>
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <address>{props.description}</address>
    </section>
  );
}

export default MeetupDetail;
