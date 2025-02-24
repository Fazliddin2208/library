import {FaArrowLeft} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

type Props = {
  title?: string;
};

export default function NavigateBack({title = "Back"}: Props) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="flex items-center gap-2">
      <FaArrowLeft />
      {title}
    </button>
  );
}
