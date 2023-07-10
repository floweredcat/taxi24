import styles from "./styles.module.css";

export function Button({ title }) {
  return (
    <button type="submit" className={styles.button}>
      {title}
    </button>
  );
}
