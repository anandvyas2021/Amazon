import axios from "axios";

axios.defaults.withCredentials = true;

export const getAPI = async (path) => {
  let headers = { Accept: "application/json" };
  let basepath = path;

  let result = await new Promise((resolve, reject) => {
    axios
      .get(basepath, { headers: headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Unauthorised");
          return;
        }
        return reject(error.response);
      });
  });
  return result;
};

export const postAPI = async (path, data) => {
  let headers = { Accept: "application/json" };
  let basepath = path;

  let result = await new Promise((resolve, reject) => {
    axios
      .post(basepath, data, { headers: headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Unauthorized");
          return;
        }
        return reject(error.response);
      });
    return result;
  });
};
