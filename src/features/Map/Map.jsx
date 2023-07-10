import styles from "./styles.module.css";
import map from "../../assets/mockMap.png";

export function MapDisplay() {
  return (
    <div className={styles.wrapper}>
      <img src={map} alt={map} className={styles.map} />

      {/* <iframe
        title="1234"
        src="https://yandex.ru/map-widget/v1/-/CCU9q4bw9C"
        className={styles.map}
        allowFullScreen
        style={{ position: "relative" }}
      /> */}
    </div>
  );
}
