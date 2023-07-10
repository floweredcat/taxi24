import { api } from "../../../assets/constants";

export const sendFile = async ({ file }) => {
  const url = new URL(`${api}uploadphoto`);

  const formData = new FormData();
  formData.append("file", file);

  const options = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.OK) {
      return data.link;
    }
    return null;
  } catch (err) {
    return null;
  }
};
