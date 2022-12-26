import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieCard from "./MovieCard";

const Home = (props) => {

  return (
    <div>
      <div className="app">
        <div className="body-wrapper">
          <Header countInCart={props.countInCart} />
          <Sidebar genresArray={props.genresArray} />
          <div className="content">
            {props.moviesArray.map((movie, index) => {
              return (
                <>
                  <MovieCard
                    key={index}
                    MovieImage={movie.image}
                    MovieTitle={movie.title}
                    MovieGenre={movie.genre}
                    MovieDirector={movie.director_name}
                    setCount={props.setCount}
                    setCart={props.setCart}
                    movie={movie}
                    addItemToCart={props.addItemToCart}
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;