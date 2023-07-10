import { api } from "../../../assets/constants";

export const getPhone = async ({ kod }) => {
  const url = new URL(`${api}getphone`);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      kod,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.OK) {
      return data;
    }
    return null;
  } catch (err) {
    return null;
  }
};
