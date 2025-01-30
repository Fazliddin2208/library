import {ScanBarcode, SearchIcon} from "lucide-react";
import {Dropdown, Input, InputGroup} from "rsuite";

type Props = {};

export default function SearchComponent({}: Props) {
  return (
    <InputGroup inside className="my-input col-span-3">
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
    </InputGroup>
  );
}
