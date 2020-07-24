import React from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import Movie from './Movie.js'
import "./App.css"

class App extends React.Component {

  //planning the Future. 필수적인건 아님. 여기에 쓰지 않고 씌여도 에러 없음
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies: movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  //setState를 실행 할 때마다 react가 RErender
  render() {
    const { isLoading, movies } = this.state;

    return <section class="section">
      {isLoading ?
        <div class="loader">
          <span class="loader_text">Loading...</span>
        </div>
        : <div class ="movies">
          {movies.map(movie => {
            console.log(movie)
            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
          })}
        </div>
        }
    </section>
  }
}

export default App
