import axios from "axios";
import {OTHER_ENDPOINTS} from "./endpoints";

export async function getQuotes() {
  return axios.get(OTHER_ENDPOINTS.GET_QUOTES()).then((data) => data);
}
