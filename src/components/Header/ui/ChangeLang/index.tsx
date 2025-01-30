import {Button, Dropdown} from "rsuite";
import {Languages} from "lucide-react";
import {LangIcon} from "@/lib/icons/LangIcon";
import {FaCaretDown} from "react-icons/fa6";

type Props = {};

const renderIconButton = (props: any, ref: any) => {
  return (
    <Button className="my-input !bg-light flex items-cecnter gap-2 w-full" {...props} ref={ref}>
      <LangIcon />
      Salom <FaCaretDown />
    </Button>
  );
};

export default function ChangeLangComponent({}: Props) {
  return (
    <Dropdown renderToggle={renderIconButton} className="col-start-4">
      <Dropdown.Item icon={<Languages />}>New File</Dropdown.Item>
      <Dropdown.Item icon={<Languages />}>New File with Current Profile</Dropdown.Item>
      <Dropdown.Item icon={<Languages />}>Download As...</Dropdown.Item>
      <Dropdown.Item icon={<Languages />}>Export PDF</Dropdown.Item>
    </Dropdown>
  );
}
