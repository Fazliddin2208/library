import {MdOutlineRateReview} from "react-icons/md";
import {PiNotePencil} from "react-icons/pi";
import {IoShareSocialOutline} from "react-icons/io5";

export default function ActionComponent() {
  return (
    <div className="flex items-center justify-between mt-4 gap-2">
      <button className="flex flex-col items-center">
        <MdOutlineRateReview width={32} height={32} className="size-6 text-black" />
        <span>Review</span>
      </button>
      <button className="flex flex-col items-center">
        <PiNotePencil width={32} height={32} className="size-6 text-black" />
        <span>Notes</span>
      </button>
      <button className="flex flex-col items-center">
        <IoShareSocialOutline width={32} height={32} className="size-6 text-black" />
        <span>Share</span>
      </button>
    </div>
  );
}
