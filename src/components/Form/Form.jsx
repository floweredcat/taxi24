import styles from "./styles.module.css";

export function Form({ children, callBack }) {
  const onSubmit = (e) => {
    e.preventDefault();
    callBack(); // do it async later, then is response display func
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
}
