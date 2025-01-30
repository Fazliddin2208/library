import {FaCaretDown} from "react-icons/fa6";
import {Avatar, Button, Dropdown} from "rsuite";

const renderIconButton = (props: any, ref: any) => {
  return (
    <Button className="my-input !bg-light flex items-center !justify-between gap-2 !p-1 w-full" {...props} ref={ref}>
      <Avatar circle size="sm" />
      Salom <FaCaretDown className="mr-3" />
    </Button>
  );
};

export default function ProfileComponent() {
  return (
    <Dropdown renderToggle={renderIconButton} className="col-start-8">
      <Dropdown.Item panel style={{padding: 10, width: 160}}>
        <p>Signed in as</p>
        <strong>Tony</strong>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>Your profile</Dropdown.Item>
      <Dropdown.Item>Your stars</Dropdown.Item>
      <Dropdown.Item>Your Gists</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>Help</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
