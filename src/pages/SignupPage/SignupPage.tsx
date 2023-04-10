import React from "react";
import Signup from "../../components/Signup/Signup";
import css from "./Signup.module.scss";
interface Props {}

const SignupPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignupPage;
