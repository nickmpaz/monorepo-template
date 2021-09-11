import { api } from "../../utils/api";

export const getRemoteCountRequest = () => {
  return api({
    method: "GET",
    url: "counter",
  });
};

export const incrementRemoteCountRequest = () => {
  return api({
    method: "GET",
    url: "counter/increment",
  });
};

export const resetRemoteCountRequest = () => {
  return api({
    method: "GET",
    url: "counter/reset",
  });
};

