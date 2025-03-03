import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {useLocalStorage} from "@/hooks/use-local-storage";
import {UserType} from "@/types/UserType";
import {AvatarFallback, AvatarImage, AvatarRoot} from "@chakra-ui/react";
import {FaCaretDown} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

export default function ProfileComponent() {
  const navigate = useNavigate();
  const {getItem} = useLocalStorage();
  const user: UserType | null = getItem("profile");

  const logOut = () => {
    useLocalStorage().deleteItem("token");
    navigate("/login");
  };

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild className="col-span-2 my-input rounded-full bg-light p-1">
          <button className="flex items-center justify-between pr-2">
            <AvatarRoot size={"sm"}>
              <AvatarFallback title="Person name" />
              <AvatarImage src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTvkMz8emrMcc_MSsSsYjIzHvj6Aweoy0UvF300SU6hCC-t26n" />
            </AvatarRoot>{" "}
            {user?.name} <FaCaretDown className="mr-3" />
          </button>
        </MenuTrigger>
        <MenuContent bg={"var(--light)"}>
          <MenuItem value="profile" className="text-text" onClick={() => navigate("/profile")}>
            Profile
          </MenuItem>
          <MenuItem value="favourite" className="text-text">
            Favourite
          </MenuItem>
          <MenuItem value="payment" className="text-text">
            Payments
          </MenuItem>
          <MenuItem value="logout" className="text-danger" onClick={logOut}>
            Logout
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
}
