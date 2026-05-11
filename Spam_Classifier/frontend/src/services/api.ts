import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const predictSpam = async (email: string) => {
  const response = await API.post("/predict", {
    email: email,   // ✅ MUST match FastAPI model
  });

  return response.data;
};