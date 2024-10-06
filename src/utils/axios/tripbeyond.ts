import axios from "axios";

export const tripbeyond = axios.create({
  baseURL: "http://localhost:5000/api", // Use environment variable for the base URL
  headers: {
    "Content-Type": "application/json",
  },
});


