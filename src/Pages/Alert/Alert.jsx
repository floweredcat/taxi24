import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectOrderMessage } from "../../store/Order/selectors";
import { textContent } from "../../assets/constants";

export function Alert() {
  const message = useSelector(selectOrderMessage);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.message}>{message || textContent.error}</h2>
    </div>
  );
}
