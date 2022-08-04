const Card = (props) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt={props.title}/>
      <h2>{props.title}</h2>
      <h5>{props.release_date}</h5>
      <p>{props.overview}</p>
    </div>
  )
}

export default Card