import {AuthTypes} from "@/types/Auth";
import {baseApi} from "../config/base-api";
import {AUTH_ENDPOINTS} from "./endpoints";

export async function registerUser(data: AuthTypes) {
  return baseApi.post(AUTH_ENDPOINTS.REGISTER(), data).then((data) => data);
}
