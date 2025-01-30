import {AuthTypes} from "@/types/Auth";
import {MutationParams} from "../config/config";
import {useMutation} from "@tanstack/react-query";
import {registerUser} from ".";

export function useRegisterUser({onError, onSuccess}: MutationParams<AuthTypes>) {
  const {mutateAsync, isPending} = useMutation<AuthTypes, Error, AuthTypes>({
    mutationFn: (data: AuthTypes) => registerUser(data).then((response) => response.data),
    onSuccess,
    onError,
  });

  return {
    registerUser: mutateAsync,
    isRegister: isPending,
  };
}
