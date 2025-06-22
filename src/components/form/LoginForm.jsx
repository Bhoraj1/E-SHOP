import { Link } from "react-router-dom";
import Label from "../shared/Label";
import InputText from "../shared/InputText";
import Button from "../shared/Button";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <form className="space-y-4">
          <div>
            <Label text="Email" style="" />
            <InputText
              type="text"
              id="email"
              placeholder="Enter you email here"
            />
          </div>
          <div>
            <Label text="Password" style="" />
            <InputText
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <div>
            <Button
              type="submit"
              text="Login"
              className="bg-red-500 text-white"
            />
          </div>
        </form>
        <div className="text-sm text-center text-gray-600">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
