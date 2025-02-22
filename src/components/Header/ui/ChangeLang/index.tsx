import {LangIcon} from "@/lib/icons/LangIcon";
import {FaCaretDown} from "react-icons/fa6";
import {Box, Button} from "@chakra-ui/react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";

const langs = [
  {
    value: "eng",
    title: "Eng",
  },
  {
    value: "Uzb",
    title: "Uzb",
  },
  {
    value: "rus",
    title: "Rus",
  },
  {
    value: "tur",
    title: "Tur",
  },
];

export default function ChangeLangComponent() {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="outline"
          className="my-input bg-light w-full rounded-full flex items-center justify-evenly px-2"
        >
          <LangIcon />
          Eng <FaCaretDown />
        </Button>
      </MenuTrigger>
      <MenuContent bg={"var(--light)"}>
        {langs.map((lang) => (
          <MenuItem key={lang.value} value={lang.value} className="text-text">
            {lang.title}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
