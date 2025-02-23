import BookViewPage from "@/page/BookView";
import HomePage from "@/page/HomePage";
import {IRoutesModel} from "@/types/routes-model";

export const RoutesList: IRoutesModel[] = [
  {
    path: "/",
    icon: <p>&copy;</p>,
    page: "",
    permission: "CAN_SEE_MAIN",
    children: [
      {
        path: "/",
        icon: <p>&copy;</p>,
        page: <HomePage />,
        permission: "CAN_SEE_MAIN",
      },
    ],
  },
  {
    path: "/book",
    icon: <p>&copy;</p>,
    page: "",
    children: [
      {
        path: "/book/:id",
        icon: <p>&copy;</p>,
        page: <BookViewPage />,
        permission: "CAN_SEE_BOOK",
      },
    ],
  },
];
