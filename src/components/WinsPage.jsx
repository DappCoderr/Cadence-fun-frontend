import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function WinsPage({ ...props }) {
  const location = useLocation();

  return (
    <div>
      <Link to="/game" className="text-4xl text-red-500">
        {location.state && location.state.isLost ? "You lost!" : "You won!"} Try
        Again
      </Link>
    </div>
  );
}
