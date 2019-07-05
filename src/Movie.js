import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";
/*
class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
*/

//functional component는 this필요없음. 이미 props를 사용하니까.
function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>

        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie_Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

//functional
function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.prototype = {
  genre: PropTypes.string.isRequired
};

/*
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  };
  render() {
    console.log(this.porps);
    return <img src={this.props.poster} />;
  }
}*/

export default Movie;
