import axios, { AxiosRequestConfig } from "axios";
import firebase from "./firebase";
import { API_BASE_URL } from "../app/definitions/constants";

export const api = async (config: AxiosRequestConfig) => {
  const idToken = await firebase.auth().currentUser?.getIdToken();
  return axios({
    ...config,
    baseURL: API_BASE_URL,
    headers: { idToken },
  });
};
