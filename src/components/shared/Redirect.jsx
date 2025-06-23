import { Link } from "react-router-dom";

const Redirect = ({ linkto, linkText }) => {
  return (
    <div className="text-sm text-center text-gray-600">
      Don't have an account? <Link to={linkto}>{linkText}</Link>
    </div>
  );
};

export default Redirect;
