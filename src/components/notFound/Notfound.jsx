import { Link } from "react-router-dom";
import Redirect from "../shared/Redirect";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen">
      <h1 className="text-3xl mb-11"> 404 !. Your requested Page not found</h1>

      <Redirect linkto="/" linkText="Return to Home" />
    </div>
  );
};

export default NotFound;
