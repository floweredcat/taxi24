import styles from "./styles.module.css";

export function Input({ handleChange, props }) {
  const {
    name,
    required,
    placeholder,
    value,
    type,
    inputmode,
    multiple,
    accept,
  } = props;
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      id={name}
      type={type}
      onChange={handleChange}
      value={value}
      required={required}
      inputMode={inputmode}
      accept={accept}
      multiple={multiple}
      name={name}
    />
  );
}
