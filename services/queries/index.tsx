import axios from "axios";
import API from "../api/api.json";

const client = axios.create({
  baseURL: API.baseURL,
});

export const fetchPlanets = async () => {
  const { data } = await client.get("/planets");
  return data;
};

export const fetchPeople = async () => {
  const { data } = await client.get("/people");
  return data;
};
