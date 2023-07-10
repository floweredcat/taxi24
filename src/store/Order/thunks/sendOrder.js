import { api } from "../../../assets/constants";

export const sendOrder = async ({ form, kod }) => {
  const url = new URL(`${api}sendord`);
  const order = {
    kod,
    phone: form.phone.value,
    wayfrom: form.wayfrom.value,
    wayto: form.wayto.value,
    cena: +form.cena.value,
    msg: form.msg.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(order),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
