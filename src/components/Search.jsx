import { useRef } from "react";
import { SearchIcon } from "../icons";
import styles from "../styles/Search.module.css";

export default function ({ fetchMovies }) {
  const inputRef = useRef();

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search for movies"
        ref={inputRef}
        className={styles["search-input"]}
      />
      <button
        className={styles["search-btn"]}
        onClick={() => fetchMovies(inputRef.current.value)}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
