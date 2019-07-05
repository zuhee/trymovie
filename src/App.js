import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image} //전에는 poster라는 오브젝트 직접 생성햇으나 console로 확인해 보면 나와있는, 지정된 이름으로 바꿔야함
          key={movie.id} //component의 key는 인덱스를 사용하지 않는 것이 좋다. 느림]
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    //async는 앞에 함수 수행 상관없이 실행 asychronous function이라고할 수 있음
    const movies = await this._callApi(); //await는 call api return value가 무엇이든간에, callApi의 수행을 기다림, 성공적일 필요는 없음 완료된 후에 다음 줄 수행
    this.setState({
      movies //component movie의 state를 지정 , state 안에 movies가 있으면 render movies라는 function 불러옴
    });
  };

  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=like_count") //fetch 라는 이름의 promise를 return
      .then(potato => potato.json()) //로그한거를 제이슨으로 변환
      .then(json => json.data.movies) //arrow function > return 사용할 필요없음 modern js
      .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
