// eslint-disable-next-line import/no-extraneous-dependencies
import InputMask from "react-input-mask";
import styles from "./styles.module.css";

export function InputPhone({ handleChange, props }) {
  const { name, required, placeholder, value, inputmode } = props;

  return (
    <InputMask
      mask="+7 (999) 999 9999"
      value={value}
      onChange={handleChange}
      className={styles.input}
      placeholder={placeholder}
      id={name}
      required={required}
      inputMode={inputmode}
    />
  );
}
