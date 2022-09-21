// export const serverApi = () => {
//   console.log("I should only be available server side.");
// };

// export const clientApi = () => {
//   console.log("I should only be available client side.");
// };

// ========================================================
// ========================================================

// import axios from "axios";

// export const serverApi = axios.create({
//   // Server side API making request to a third party API that shouldn't be exposed client side
//   baseURL: "https://hakuna-matata.com/",
// });

// export const clientApi = axios.create({
//   // Client side API making request to Next.js API
//   baseURL: "/api",
// });

// ========================================================
// ========================================================

const createApi = (message) => {
  console.log(message);
  return () =>{}
}

export const serverApi = createApi("I should only be available server side.")

export const clientApi = createApi("I should only be available client side.")