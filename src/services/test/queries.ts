import {useQuery} from "@tanstack/react-query";
import {BOOKS_ENDPOINTS} from "./endpoints";
import {getBooks} from ".";

export function useBooksList() {
  const {data, isPending, isError, refetch} = useQuery({
    queryKey: [BOOKS_ENDPOINTS.GET_BOOKS()],
    queryFn: () => getBooks(),
  });
  const books = data;
  return {
    books,
    isPending,
    isError,
    refetch,
  };
}
