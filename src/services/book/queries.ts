import {useQuery} from "@tanstack/react-query";
import {BOOK_ENDPOINTS} from "./endpoints";
import {getBooks, getNewBooks} from ".";

export function useBooksList() {
  const {data, isPending, isError, refetch} = useQuery({
    queryKey: [BOOK_ENDPOINTS.GET_BOOKS()],
    queryFn: () => getBooks(),
  });
  const books = data?.data;
  return {
    books,
    isPending,
    isError,
    refetch,
  };
}

export function useNewBooksList() {
  const {data, isPending, isError, refetch} = useQuery({
    queryKey: [BOOK_ENDPOINTS.GET_NEW_BOOKS()],
    queryFn: () => getNewBooks(),
  });
  const books = data?.data;
  return {
    books,
    isPending,
    isError,
    refetch,
  };
}
