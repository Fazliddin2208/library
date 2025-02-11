import {useQuery} from "@tanstack/react-query";
import {OTHER_ENDPOINTS} from "./endpoints";
import {getQuotes} from ".";

export function useQuotesList() {
  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: [OTHER_ENDPOINTS.GET_QUOTES()],
    queryFn: () => getQuotes(),
  });
  const quotes = data?.data?.quotes;
  return {
    quotes,
    isLoading,
    isError,
    refetch,
  };
}
