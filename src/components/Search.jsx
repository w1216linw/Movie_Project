import { useRef } from "react";
import { SearchIcon } from "../icons";
import styles from "../styles/Search.module.css";

export default function ({ fetchMovies }) {
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchMovies(inputRef.current.value);
      }}
      className={styles.search}
    >
      <input
        type="text"
        placeholder="Search for movies"
        ref={inputRef}
        className={styles["search-input"]}
      />
      <button type="submit" className={styles["search-btn"]}>
        <SearchIcon />
      </button>
    </form>
  );
}
