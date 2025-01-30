import {baseApi} from "../config/base-api";
import {BOOKS_ENDPOINTS} from "./endpoints";

export async function getBooks() {
  return baseApi.get(BOOKS_ENDPOINTS.GET_BOOKS()).then((data) => data);
}
