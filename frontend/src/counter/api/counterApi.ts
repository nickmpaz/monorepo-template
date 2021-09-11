import { api } from "../../utils/api";

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

