export default function Movies(props) {
  return (
    <div className="movie-container">
      <img src={props.img} alt="movie" />
      <h4>{props.name}</h4>
    </div>
  );
}
