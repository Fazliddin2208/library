import {SearchIcon} from "lucide-react";
import {Input, InputGroup} from "rsuite";

export const CustomInput = ({...props}) => <Input {...props} size={props?.size} />;

export const CustomInputGroup = ({...props}) => (
  <InputGroup {...props}>
    <Input placeholder={props?.placeholder} size={props?.size} />
    <InputGroup.Addon>
      <SearchIcon />
    </InputGroup.Addon>
  </InputGroup>
);

export const CustomInputGroupWidthButton = ({...props}) => (
  <InputGroup {...props} inside>
    <Input placeholder={props?.placeholder} size={props?.size} />
    <InputGroup.Button>
      <SearchIcon />
    </InputGroup.Button>
  </InputGroup>
);
