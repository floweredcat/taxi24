import { orderSliceActions } from "..";
import { api } from "../../../assets/constants";

export const regTaxi = async (form) => {
  const url = new URL(`${api}regtaxi`);
  const order = {
    model: form.brand.value,
    carnum: form.plate.value,
    name: form.name.value,
    phone: form.phone.value,
    photo_front: form.photo.link,
    photo_back: form.photo_back.link,
  };

  orderSliceActions.startLoading();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(order),
  };
  console.log(options.body);

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (data.OK) {
      orderSliceActions.successLoading();
    } else {
      orderSliceActions.failLoading();
    }
    return data;
  } catch (err) {
    orderSliceActions.failLoading();
    return err;
  }
};
