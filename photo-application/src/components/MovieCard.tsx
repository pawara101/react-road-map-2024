import React from 'react'

const MovieCard = ({
  movie: { title, vote_avg, poster_path, release_date, language }
}: {
  movie: {
    title: string
    vote_avg: number
    poster_path: string
    release_date: string
    language: string
  }
}) => {
  return (
    <>
      <div className="movie-card">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : '/no-movie.png'
          }
          alt={title}
        />
      </div>

      <div className="content">
        <div className="rating">
          <img src="/star.svg" alt="Star Icon" />
          <span>{vote_avg}</span>
        </div>
      </div>
    </>
  )
}

export default MovieCard
