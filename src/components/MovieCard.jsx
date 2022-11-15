import styles from "../styles/MovieCard.module.css";

export default function MovieCard({ movie }) {
  const { Title, Year, Poster, Type } = movie;

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt="Movie Cover"
        />
      </div>
      <div className={styles.cover}>
        <p>{Year}</p>
        <p>{Title}</p>
        <span>Type: {Type}</span>
      </div>
    </div>
  );
}
