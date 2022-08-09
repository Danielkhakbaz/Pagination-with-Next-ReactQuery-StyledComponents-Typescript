import axios from "axios";
import API from "../api/api.json";

const client = axios.create({
  baseURL: API.baseURL,
});

/* eslint-disable @typescript-eslint/no-unused-vars */
export const fetchPlanets = async ({ queryKey: [_, page] }: any) => {
  const { data } = await client.get(`/planets?page=${page}`);
  return data;
};

export const fetchPeople = async ({ queryKey: [_, page] }: any) => {
  const { data } = await client.get(`/people?page=${page}`);
  return data;
};
/* eslint-disable @typescript-eslint/no-unused-vars */
