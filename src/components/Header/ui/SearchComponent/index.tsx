import {InputGroup} from "@/components/ui/input-group";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {Button, Input} from "@chakra-ui/react";
import {ScanBarcode, SearchIcon} from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";

type Props = {};

export default function SearchComponent({}: Props) {
  return (
    <>
      <InputGroup flex="1" className="my-input col-span-3 bg-light rounded-full pr-4">
        <>
          <MenuRoot>
            <MenuTrigger asChild className="min-w-[100px] h-full rounded-s-full bg-[#F7F7FA]">
              <Button variant="outline" size="sm">
                Open <FaCaretDown />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              <MenuItem value="new-win">New Window</MenuItem>
              <MenuItem value="open-file">Open File...</MenuItem>
              <MenuItem value="export">Export</MenuItem>
            </MenuContent>
          </MenuRoot>
          <Input placeholder="Username" />
          <div className="flex items-center gap-2">
            <SearchIcon className="cursor-pointer pl-1" onClick={() => alert("clicked")} color="var(--primary)" />
            <ScanBarcode
              className="cursor-pointer border-l pl-1"
              onClick={() => alert("clicked")}
              color="var(--primary)"
            />
          </div>
        </>
      </InputGroup>
      {/* <InputGroup inside className="my-input col-span-3">
        <Dropdown title="All" className="border bg-[#F7F7FA] rounded-tl-[40px] rounded-bl-[40px]">
          <Dropdown.Item>New File</Dropdown.Item>
          <Dropdown.Item>New File with Current Profile</Dropdown.Item>
          <Dropdown.Item>Download As...</Dropdown.Item>
          <Dropdown.Item>Export PDF</Dropdown.Item>
          <Dropdown.Item>Export HTML</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>About</Dropdown.Item>
        </Dropdown>
        <Input placeholder="Placeholder" size="lg" />
        <div className="flex">
          <InputGroup.Addon className="!p-0">
            <SearchIcon className="cursor-pointer pl-1" onClick={() => alert("clicked")} color="var(--primary)" />
          </InputGroup.Addon>
          <InputGroup.Addon className="!p-2">
            <ScanBarcode
              className="cursor-pointer border-l pl-1"
              onClick={() => alert("clicked")}
              color="var(--primary)"
            />
          </InputGroup.Addon>
        </div>
      </InputGroup> */}
    </>
  );
}
