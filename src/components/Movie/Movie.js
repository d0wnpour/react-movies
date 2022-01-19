import './Movie.css';
import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";



const Movie = ({ title, poster_path, overview, vote_average}) => (
    <div className='movie__content'>
        <img src={ poster_path ? IMG_API + poster_path : "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif" } alt={title} />
        <div className='about'>
            <h4>{title}</h4>
            <span className="vote">{vote_average}</span>
        </div>
        <div className='description'>
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie
