import {useNavigate} from "react-router-dom";

type Props = {
  title?: string;
};

export default function NavigateBack({title = "Back"}: Props) {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>{title}</button>;
}
