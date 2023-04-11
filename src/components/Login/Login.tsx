import React, { useState, useEffect } from "react";
import css from "./Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../../services/apollo";
import { getAccessToken, getRefreshToken } from "../../services/Token";
import { userNameLogin } from "../../services/api";
import { postRefreshToken } from "../../services/api";
import { useMutation } from "@tanstack/react-query";

import Cookies from "js-cookie";
// import ModalBasic from "../../components/Modal/ModalBasic";

type FormData = {
  username: string;
  password: string;
  headers: string;
};

const Login: React.FC = () => {
  const [failLogin, setFailLogin] = useState<boolean | null>(null);
  const [click, setClick] = useState<boolean>(false);
  const navigate = useNavigate();
  const mutation = useMutation(userNameLogin, {
    onMutate: () => {
      console.log("mutation start...");
    },
    onSuccess: () => {
      console.log("API CALL success...");
      setFailLogin(true);
      isLoggedInVar(true);
      navigate("/");
      window.location.reload();
    },
    onError: (e: Error) => {
      setFailLogin(false);
      console.log(e);
      console.log("API CALL error...");
    },
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      isLoggedInVar(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = ({ username, password }) => {
    try {
      const headers = isLoggedInVar()
        ? {
            Authorization: `Bearer ${getAccessToken()}`,
            "X-Refresh-Token": getRefreshToken(),
          }
        : undefined;

      mutation.mutate({ username, password, headers });
    } catch (error) {
      console.error("login error", error);
    }
  };
  return (
    <>
      <div className={css.Container}>
        <div className={css.Wrapper}>
          <div className={css.TopBox}>
            <img src="/images/logo.png" alt="logo" width="200" />

            <form onSubmit={handleSubmit(onSubmit)} className={css.Form}>
              {/* <form className={css.Form}> */}
              <div>
                <input
                  className={css.IdPassword}
                  placeholder="아이디"
                  type="text"
                  {...register("username", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.username && errors.username.type === "required" && (
                  <p>아이디를 입력하세요!</p>
                )}
                {errors.username && errors.username.type === "maxLength" && (
                  <p>20자 이하로 입력하세요.</p>
                )}
              </div>
              <div>
                <input
                  className={css.IdPassword}
                  placeholder="비밀번호"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p>비밀번호를 입력하세요!</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p>6자 이상 20자 이하로 입력하세요.</p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <p>6자 이상 20자 이하로 입력하세요.</p>
                )}
              </div>
              <button
                type="submit"
                value="로그인"
                className={css.Button}
                onClick={() => {
                  setClick(true);
                }}
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
