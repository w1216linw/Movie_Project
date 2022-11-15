import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
import Error from "./Error";
import styles from "../styles/MovieContainer.module.css";

export default function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async (title) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}&s=${title}&type=movie`
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies("spider man");
  }, []);

  return (
    <section className={styles.container}>
      <Search fetchMovies={fetchMovies} />

      <div className={styles.movies}>
        {movies?.length > 0 ? (
          movies.map((item) => {
            return <MovieCard movie={item} />;
          })
        ) : (
          <Error />
        )}
      </div>
    </section>
  );
}
