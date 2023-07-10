export const initialForm = {
  wayfrom: {
    required: true,
    name: "wayfrom",
    value: "",
    placeholder: "Откуда",
    minLength: 2,
    type: "text",
  },
  wayto: {
    required: true,
    name: "wayto",
    value: "",
    placeholder: "Куда",
    minLength: 2,
    type: "text",
  },
  phone: {
    required: true,
    name: "phone",
    value: "",
    placeholder: "Телефон",
    minLength: 2,
    type: "text",
    inputMode: "numeric",
  },
  cena: {
    required: true,
    name: "cena",
    value: "",
    placeholder: "Цена",
    minLength: 2,
    type: "number",
    inputMode: "numeric",
  },
  msg: {
    required: false,
    name: "msg",
    value: "",
    placeholder: "Комментарии",
    minLength: 0,
    type: "text",
  },
};

export const initialRegForm = {
  brand: {
    required: true,
    name: "brand",
    value: "",
    placeholder: "Модель авто",
    minLength: 2,
    type: "text",
  },
  plate: {
    required: true,
    name: "plate",
    value: "",
    placeholder: "Номер авто",
    minLength: 2,
    type: "text",
  },
  name: {
    required: true,
    name: "name",
    value: "",
    placeholder: "Имя",
    minLength: 2,
    type: "text",
  },
  photo: {
    required: true,
    name: "photo",
    value: "",
    placeholder: "Фото прав",
    type: "file",
    accept: "image",
    file: null,
    link: null,
  },
  photo_back: {
    required: true,
    name: "photo_back",
    value: "",
    placeholder: "Фото прав",
    type: "file",
    accept: "image",
    file: null,
    link: null,
  },
  phone: {
    required: true,
    name: "phone",
    value: "",
    placeholder: "Телефон",
    minLength: 2,
    type: "text",
    inputMode: "numeric",
  },
};

export const textContent = {
  succesOrder: "Заказ оформлен!",
  successRegistration: "Заявка принята! С Вами свяжутся в ближайшее время",
  error: "Упс... Что-то пошло не так, попробуйте повторить операцию позже",
  submit: "Оформить заказ",
  registration: "Оставить заявку",
};

export const api = "https://aktau-go.kz/api/";

export const ROUTES = {
  main: "/:kod",
  alert: "/alert",
  registrtaxi: "/registrtaxi",
};
