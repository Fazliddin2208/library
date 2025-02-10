import {LangIcon} from "@/lib/icons/LangIcon";
import {FaCaretDown} from "react-icons/fa6";
import {Box, Button} from "@chakra-ui/react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";

export default function ChangeLangComponent() {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="outline"
          className="my-input bg-light w-full rounded-full p-5 flex items-center justify-between"
        >
          <LangIcon />
          Eng <FaCaretDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="eng" valueText="eng">
          <Box flex="1">Eng</Box>
        </MenuItem>
        <MenuItem value="Uzb" valueText="Uzb">
          <Box flex="1">Uzb</Box>
        </MenuItem>
        <MenuItem value="rus" valueText="rus">
          <Box flex="1">Rus</Box>
        </MenuItem>
        <MenuItem value="tur" valueText="tur">
          <Box flex="1">Tur</Box>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}
