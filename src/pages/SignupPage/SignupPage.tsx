import React from "react";
import Signup from "../../components/Signup/Signup";
import css from "./Signup.module.scss";

interface Props {}

const SignupPage: React.FC<Props> = (props: Props) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div>
      <Signup initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default SignupPage;
