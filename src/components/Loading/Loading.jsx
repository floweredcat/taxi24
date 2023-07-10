import styles from "./styles.module.css";

export function Loading() {
  return (
    <div className={styles.background}>
      <div className={styles.loading} />
    </div>
  );
}
