import { Link } from "react-router-dom";
import Label from "../shared/Label";
import InputText from "../shared/InputText";
import Button from "../shared/Button";
import Redirect from "../shared/Redirect";

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h1>
        <form className="space-y-4">
          <div>
            <Label text="Username" style="" />
            <InputText
              type="text"
              id="username"
              placeholder="Enter you username here"
            />
          </div>
          <div>
            <Label text="Email" style="" />
            <InputText
              type="email"
              id="email"
              placeholder="Enter you username here"
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
              text="Signup"
              className="bg-red-500 text-white"
            />
          </div>
        </form>

        <Redirect linkto="/login" linkText="Login" />
      </div>
    </div>
  );
};

export default SignupForm;
