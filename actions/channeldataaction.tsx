import { url } from "../Api/api";

export const getallchanneldetail = () => {
  return fetch(`${url}/chan`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};
