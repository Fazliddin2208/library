import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {AvatarFallback, AvatarImage, AvatarRoot} from "@chakra-ui/react";
import {FaCaretDown} from "react-icons/fa6";

export default function ProfileComponent() {
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild className="col-span-2 my-input rounded-full bg-light p-1">
          <button className="flex items-center justify-between pr-2">
            <AvatarRoot size={"sm"}>
              <AvatarFallback title="Person name" />
              <AvatarImage src="https://bit.ly/sage-adebayo" />
            </AvatarRoot>{" "}
            Ugochukwuo <FaCaretDown className="mr-3" />
          </button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt">New Text File</MenuItem>
          <MenuItem value="new-file">New File...</MenuItem>
          <MenuItem value="new-win">New Window</MenuItem>
          <MenuItem value="open-file">Open File...</MenuItem>
          <MenuItem value="export">Export</MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
}
