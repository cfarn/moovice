import Card from '../components/Card'

import {useState, useEffect} from 'react'

const Popular = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${'5cf7d18ed2e48b3295edc1fda2c318d2'}`)
    const response = await request.json()
    // console.log(response)
    setMovies(response)
  }

  if(!movies) { return null }

  return (
    <>
      <h1>Popular</h1>
      {
        movies.results.map(movie => {
          return (
            <Card
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
            />
          )
        })
      }
    </>
  )
}

export default Popular