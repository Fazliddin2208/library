import {Link} from "react-router-dom";
import RecommendedCards from "../ui/Recommended/RecommendedCards";

export default function RecommendedSection() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3>Recommended for You</h3>
        <Link to="/books">Show all</Link>
      </div>
      <RecommendedCards />
    </div>
  );
}
