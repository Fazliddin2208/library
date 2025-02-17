import {baseApi} from "../config/base-api";
import {BOOK_ENDPOINTS} from "./endpoints";

export async function getBooks() {
  return baseApi.get(BOOK_ENDPOINTS.GET_BOOKS()).then((data) => data);
}

export async function getNewBooks() {
  return baseApi.get(BOOK_ENDPOINTS.GET_NEW_BOOKS()).then((data) => data);
}
