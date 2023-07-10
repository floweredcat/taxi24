import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { Input } from "../../ui/Input/Input";
import { ROUTES, initialRegForm, textContent } from "../../assets/constants";
import { Button } from "../../ui/Button/Button";
import styles from "./styles.module.css";
import { InputPhone } from "../../ui/InputPhone/InputPhone";
import { sendFile } from "../../store/Order/thunks/sendFile";
import { regTaxi } from "../../store/Order/thunks/regTaxi";
import { orderSliceActions } from "../../store/Order";

export function RegisterDriver() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialRegForm);
  const [photo, setPhoto] = useState(null);
  const [backPhoto, setBackPhoto] = useState(null);
  const isButtonVisible = Object.values(form).every((field) =>
    field.required ? field.value : true
  );

  useEffect(() => {
    if (form.photo.file) {
      sendFile({ file: form.photo.file }).then((link) => {
        setPhoto(link);
        setForm((prevState) => ({
          ...prevState,
          photo: { ...prevState.photo, link },
        }));
      });
    }
    if (form.photo_back.file) {
      sendFile({ file: form.photo_back.file }).then((link) => {
        setBackPhoto(link);
        setForm((prevState) => ({
          ...prevState,
          photo_back: { ...prevState.photo_back, link },
        }));
      });
    }
  }, [form.photo.value, form.photo_back.value]);
  const onSubmit = () => {
    if (photo && backPhoto) {
      dispatch(orderSliceActions.startLoading());
      regTaxi(form).then((res) => {
        if (res.OK) {
          dispatch(
            orderSliceActions.setMessage(textContent.successRegistration)
          );
          dispatch(orderSliceActions.successLoading());
        } else {
          dispatch(orderSliceActions.setMessage(res.STATUS));
          dispatch(orderSliceActions.failLoading());
        }
        navigate(ROUTES.alert);
        setForm(initialRegForm);
      });
    }
  };
  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    const { id } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], value: newValue },
    }));
  }, []);
  const handleFileChange = useCallback((e) => {
    const newFile = e.target.files[0];
    const newValue = e.target.value;
    const { id } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], value: newValue, file: newFile },
    }));
  }, []);
  return (
    <div className={styles.page}>
      {/* <div className={styles.wrapper}> */}
      <Form callBack={onSubmit}>
        <Input props={form.brand} handleChange={handleChange} />
        <Input props={form.plate} handleChange={handleChange} />
        <Input props={form.name} handleChange={handleChange} />
        <InputPhone props={form.phone} handleChange={handleChange} />
        Фото удостоверения с лицевой стороны:
        <Input props={form.photo} handleChange={handleFileChange} />
        {form.photo.link && (
          <img src={photo} alt={photo} className={styles.img} />
        )}
        Фото удостоверения с обратной стороны:
        <Input props={form.photo_back} handleChange={handleFileChange} />
        {form.photo_back.link && (
          <img src={backPhoto} alt={backPhoto} className={styles.img} />
        )}
        {isButtonVisible && <Button title="Отправить заявку" />}
      </Form>
      {/* </div> */}
    </div>
  );
}
