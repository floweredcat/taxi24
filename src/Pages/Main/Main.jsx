import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { Input } from "../../ui/Input/Input";
import { MapDisplay } from "../../features/Map/Map";
import { Button } from "../../ui/Button/Button";
import { sendOrder } from "../../store/Order/thunks/sendOrder";
import { InputPhone } from "../../ui/InputPhone/InputPhone";
import { getPhone } from "../../store/Order/thunks/getPhone";
import { ROUTES, initialForm, textContent } from "../../assets/constants";
import styles from "./styles.module.css";
import { orderSliceActions } from "../../store/Order";
import { selectIsOrderLoading } from "../../store/Order/selectors";
import { Loading } from "../../components/Loading/Loading";

export function Main() {
  const dispatch = useDispatch();
  const { kod } = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsOrderLoading);
  const keysForm = Object.keys(initialForm);

  const [form, setForm] = useState(initialForm);
  const isButtonVisible = Object.values(form).every((field) =>
    field.required ? field.value : true
  );

  useEffect(() => {
    const sendCode = getPhone({ kod });
    sendCode.then((res) => {
      dispatch(orderSliceActions.startLoading());
      if (res.isAvialable) {
        dispatch(orderSliceActions.successLoading());
        keysForm.forEach((key) => {
          setForm((prevState) => ({
            ...prevState,
            [key]: { ...prevState[key], value: res[key] || "" },
          }));
        });
      } else {
        dispatch(orderSliceActions.failLoading());
        dispatch(orderSliceActions.setMessage(res.STATUS));
        navigate(ROUTES.alert);
      }
    });
  }, []);
  const onSubmit = () => {
    dispatch(orderSliceActions.startLoading());
    sendOrder({ form, kod }).then((data) => {
      if (data.OK) {
        dispatch(orderSliceActions.setMessage(textContent.succesOrder));
        dispatch(orderSliceActions.successLoading());
        navigate(ROUTES.alert);
      } else {
        dispatch(orderSliceActions.setMessage(data.STATUS));
        dispatch(orderSliceActions.failLoading());
        navigate(ROUTES.alert);
      }
      setForm(initialForm);
    });
  };

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    const { id } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], value: newValue },
    }));
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MapDisplay />
      <div className={styles.wrapper}>
        <Form callBack={onSubmit}>
          <InputPhone props={form.phone} handleChange={handleChange} />
          <Input props={form.wayfrom} handleChange={handleChange} />
          <Input props={form.wayto} handleChange={handleChange} />
          <Input props={form.cena} handleChange={handleChange} />
          <Input props={form.msg} handleChange={handleChange} />
          {isButtonVisible && <Button title={textContent.submit} />}
        </Form>
      </div>
    </>
  );
}
