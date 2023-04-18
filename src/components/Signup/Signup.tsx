import React, { useRef, useState } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import css from "../Signup/Signup.module.scss";

import { signUpUser, instanceNotLogin } from "../../services/api";
import ModalBasic from "../../components/Modal/ModalBasic";

interface SignupProps {
  initialValues: {
    username: string;
    email: string;
    password: string;
  };
  onSubmit: (data: FormData) => void;
}
interface UserData {
  username: string;
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  dateBirth: string;
  gender: string;
  phoneNumber: string;
  position: string;
  skill: string;
  termsOfUse: String;
  funnel: string;
}

const Signup: React.FC<SignupProps> = ({ initialValues, onSubmit }) => {
  const navigate = useNavigate();
  const [idCheck, setIdCheck] = useState<string>("");
  const [idChecked, setIdChecked] = useState<boolean | null>(null);
  const [idCheckedGood, setIdCheckedGood] = useState<boolean | null>(null);
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  const mutation = useMutation<UserData, unknown, UserData>(
    (data: UserData) => signUpUser(data),
    {
      onMutate: (data: UserData) => {
        console.log("mutation start...");
        console.log(data);
      },
      onSuccess: () => {
        console.log("API CALL success...");
        setShowModal(true);
        setModalContent("You have successfully registered as a member><><");
        setSignUpSuccess(true);
      },
      onError: () => {
        console.log("API CALL error...");
      },
    }
  );

  const checkUsename = (id: string) => {
    setIdChecked(null);
    setIdCheck(id);
    return instanceNotLogin
      .get(`users/@${id}`)
      .then((res) => res.data)
      .then((res) => {
        if (res === "중복된 아이디 입니다.") {
          setIdChecked(true);
          setIdCheckedGood(false);
        } else {
          setIdChecked(true);
          setIdCheckedGood(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIdChecked(false);
        }
      })
      .finally(() => {
        trigger("username");
      });
  };

  const {
    getValues,
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: initialValues,
  });
  const usernameRegisterOptions: RegisterOptions = {
    required: true,
    pattern: /^[a-z0-9]{5,20}$/i,
    validate: {
      // unique: () => idChecked,
    },
  };

  const submitForm = (data: UserData) => {
    if (idChecked) {
      mutation.mutate(data);
    } else {
      alert("아이디 중복확인을 해주세용.");
    }
  };
  return (
    <div>
      <div className={css.Container}>
        <div className={css.Wrapper}>
          <div className={css.TopBox}>
            <h2 className={css.h2}>
              <img src="/images/logo.png" alt="logo" width="200" />
            </h2>

            <h1 className={css.h1}>회원가입</h1>
            <form className={css.Form} onSubmit={handleSubmit(submitForm)}>
              {/* <form className={css.Form}> */}
              <h6 className={css.h6}>모든 값은 필수입력 값입니다.</h6>
              <label className={`${css.topborder} ${css.label}`}>아이디</label>
              <div className={css.buttonflex}>
                <input
                  placeholder="아이디를 입력해주세용"
                  className={css.Input}
                  {...register("username", usernameRegisterOptions)}
                />

                <button
                  type="button"
                  className={css.checkButton}
                  onClick={() => checkUsename(watch("username"))}
                >
                  아이디 <br />
                  중복확인
                </button>
              </div>
              {errors.username && errors.username.type === "required" && (
                <p className={css.errors}>아이디는 필수 입력값입니다.</p>
              )}
              {errors.username && errors.username.type === "pattern" && (
                <p className={css.errors}>
                  아이디는 소문자와 숫자로만 이루어져야 합니다.
                </p>
              )}
              {errors.username &&
                errors.username.type === "unique" &&
                !idChecked && (
                  <p className={css.errors}>아이디 중복확인해주세요.</p>
                )}
              <label className={css.label}>비밀번호</label>
              <input
                placeholder="비밀번호를 입력해주세용"
                type="password"
                autoComplete="off"
                className={css.Input}
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className={css.errors}>비밀번호는 필수 입력값입니다.</p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p className={css.errors}>
                  비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를
                  조합해야합니다.
                </p>
              )}
              <label className={css.label}>비밀번호 확인</label>
              <input
                placeholder="비밀번호를 한번 더 치세용"
                type="password"
                autoComplete="off"
                className={css.Input}
                {...register("passwordCheck", {
                  required: true,
                  validate: {
                    check: (val) => {
                      console.log(getValues("password"));
                      if (getValues("password") !== val) {
                        return "error";
                      }
                    },
                  },
                })}
              />

              {errors.passwordCheck && (
                <p className={css.errors}>비밀번호가 틀립니다.</p>
              )}
              <label className={css.label}>이름</label>
              <input
                placeholder="이름을 입력해주세용"
                className={css.Input}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className={css.errors}>이름은 필수 입력값입니다.</p>
              )}

              <label className={css.label}>생년월일</label>
              <input
                type="date"
                className={css.Input}
                {...register("dateBirth", { required: true })}
              />
              {errors.dateBirth && (
                <p className={css.errors}>생년월일은 필수 입력 값입니다.</p>
              )}
              <label className={css.label}>성별</label>
              <div className={css.flexContainer}>
                <div className={css.genderContainer}>
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    {...register("gender", { required: true })}
                  />
                  <label htmlFor="male" className={css.genderlabel}>
                    남자
                  </label>
                </div>
                <div className={css.genderContainer}>
                  <input
                    id="female"
                    type="radio"
                    value="female"
                    {...register("gender", { required: true })}
                  />
                  <label className={css.genderlabel} htmlFor="female">
                    여자
                  </label>
                </div>
              </div>
              {errors.gender && (
                <p className={css.errors}>성별은 필수 입력값입니다.</p>
              )}
              <label className={css.label}>전화번호</label>
              <input
                placeholder="전화번호를 입력해주세용"
                type="tel"
                className={css.Input}
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <p className={css.errors}>전화번호는 필수 입력 값입니다.</p>
              )}
              {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                <p className={css.p}>숫자만 입력가능합니다.</p>
              )}
              <label className={css.label}>이메일</label>
              <input
                placeholder="이메일를 입력해주세용"
                type="text"
                className={css.Input}
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className={css.errors}>이메일 형식이 아닙니다.</p>
              )}
              <Divider
                orientation="horizontal"
                marginTop="40px"
                // marginBottom="30px"
              />
              <h6 className={css.h6Under}>
                선택 입력 사항이지만 입력하시면 마이페이지를 꾸며드립니다.
              </h6>
              <label className={css.label}>유입경로</label>
              <div className={css.flexSelectContainer}>
                <div className={css.selectContainer}>
                  <div className={css.selectlabel}>
                    {/* <label htmlFor="funnel">
                      CrazyForm을 어떤경로로 알게되셨나요?
                    </label> */}
                  </div>
                  <div>
                    <Select
                      placeholder="엄마가 시켜서"
                      size="md"
                      width="400px"
                      marginTop="30px"
                      marginBottom="30px"
                      {...register("funnel", { required: false })}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>
                </div>
              </div>
              {errors.funnel && (
                <p className={css.errors}>유입경로 필수 입력값입니다.</p>
              )}

              <label className={css.label}>
                선호 개발 포지션 (중복선택 가능)
              </label>
              <div className={css.flexDevContainer}>
                <div>
                  <div className={css.DevContainer}>
                    <input
                      id="frontend"
                      type="checkbox"
                      value="frontend"
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="frontend" className={css.Devlabel}>
                      프론트엔드
                    </label>
                  </div>
                  <div className={css.DevContainer}>
                    <input
                      id="backend"
                      type="checkbox"
                      value="backend"
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="backend" className={css.Devlabel}>
                      백엔드
                    </label>
                  </div>
                  <div className={css.DevContainer}>
                    <input
                      id="fullstack"
                      type="checkbox"
                      value="fullstack"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="fullstack">
                      풀스택
                    </label>
                  </div>
                  {/* <div className={css.DevContainer}>
                    <input
                      id="game"
                      type="checkbox"
                      value="game"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="game">
                      게임
                    </label>
                  </div> */}
                </div>
                <div>
                  <div className={css.DevContainer}>
                    <input
                      id="android"
                      type="checkbox"
                      value="android"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="android">
                      안드로이드
                    </label>
                  </div>

                  <div className={css.DevContainer}>
                    <input
                      id="ios"
                      type="checkbox"
                      value="ios"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="ios">
                      iOS
                    </label>
                  </div>
                  <div className={css.DevContainer}>
                    <input
                      id="publisher"
                      type="checkbox"
                      value="publisher"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="publisher">
                      웹 퍼블리셔
                    </label>
                  </div>
                </div>
                <div>
                  <div className={css.DevContainer}>
                    <input
                      id="data"
                      type="checkbox"
                      value="data"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="data">
                      데이터 엔지니어
                    </label>
                  </div>
                  <div className={css.DevContainer}>
                    <input
                      id="ai"
                      type="checkbox"
                      value="ai"
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="ai">
                      AI
                    </label>
                  </div>
                  <div className={css.DevContainer}>
                    <input
                      id="security "
                      type="checkbox"
                      value="security "
                      {...register("position", { required: false })}
                    />
                    <label className={css.Devlabel} htmlFor="security ">
                      보안 엔지니어
                    </label>
                  </div>
                </div>
              </div>
              {errors.position && (
                <p className={css.errors}>
                  선호 개발 포지션은 필수 입력값입니다.
                </p>
              )}
              <label className={css.label}>
                선호하는 언어 (중복 선택 가능)
              </label>
              <div className={css.flexLangContainer}>
                <div>
                  <div className={css.langContainer}>
                    <input
                      id="java"
                      type="checkbox"
                      value="java"
                      className={`${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="java" className={css.langlabel}>
                      자바
                    </label>
                  </div>
                  <div className={css.langContainer}>
                    <input
                      id="javascript"
                      type="checkbox"
                      value="javascript"
                      className={` ${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label className={css.langlabel} htmlFor="javascript">
                      자바스크립트
                    </label>
                  </div>
                  <div className={css.langContainer}>
                    <input
                      id="swift"
                      type="checkbox"
                      value="swift"
                      className={`${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="swift" className={css.langlabel}>
                      Swift
                    </label>
                  </div>
                  <div className={css.langContainer}>
                    <input
                      id="go"
                      type="checkbox"
                      value="go"
                      className={`${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="go" className={css.langlabel}>
                      Go
                    </label>
                  </div>
                </div>
                <div>
                  <div className={css.langContainer}>
                    <input
                      id="c"
                      type="checkbox"
                      value="c"
                      className={`${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="c" className={css.langlabel}>
                      C
                    </label>
                  </div>
                  <div className={css.langContainer}>
                    <input
                      id="c++"
                      type="checkbox"
                      value="c++"
                      className={`${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="c++" className={css.langlabel}>
                      C++
                    </label>
                  </div>
                  <div className={css.langContainer}>
                    <input
                      id="kotlin"
                      type="checkbox"
                      value="kotlin"
                      className={`${css.Margin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="kotlin" className={css.langlabel}>
                      Kotlin
                    </label>
                  </div>
                  <div className={css.langContainer}>
                    <input
                      id="typescript"
                      type="checkbox"
                      value="typescript"
                      className={`${css.radioMargin}`}
                      {...register("position", { required: false })}
                    />
                    <label htmlFor="typescript" className={css.langlabel}>
                      TypeScript
                    </label>
                  </div>
                </div>
              </div>
              {errors.position && (
                <p className={css.errors}>
                  선호 개발 포지션은 필수 입력값입니다.
                </p>
              )}
              <label className={css.label}>내 수준</label>
              <div className={css.flexLevelContainer}>
                <div className={css.LevelContainer}>
                  <input
                    id="high"
                    type="radio"
                    value="high"
                    {...register("skill", { required: false })}
                  />
                  <label htmlFor="high" className={css.genderlabel}>
                    입문
                  </label>
                </div>
                <div className={css.LevelContainer}>
                  <input
                    id="middle"
                    type="radio"
                    value="middle"
                    {...register("skill", { required: false })}
                  />
                  <label className={css.Levellabel} htmlFor="middle">
                    초급
                  </label>
                </div>
                <div className={css.LevelContainer}>
                  <input
                    id="low"
                    type="radio"
                    value="low"
                    {...register("skill", { required: false })}
                  />
                  <label className={css.Levellabel} htmlFor="low">
                    중급
                  </label>
                </div>
                <div className={css.LevelContainer}>
                  <input
                    id="low"
                    type="radio"
                    value="low"
                    {...register("skill", { required: false })}
                  />
                  <label className={css.Levellabel} htmlFor="low">
                    고급
                  </label>
                </div>
              </div>
              {errors.skill && (
                <p className={css.errors}>내 개발수준 은 필수 입력값입니다.</p>
              )}
              <label className={`${css.label} ${css.question}`}>
                이용약관 문의
              </label>
              <div className={css.flex}>
                <label className={css.answer} htmlFor="termsOfUse">
                  이용약관에 동의합니다.
                </label>
                <input
                  id="termsOfUse"
                  type="checkbox"
                  className={`${css.checkbox} ${css.radioMargin}`}
                  {...register("termsOfUse", {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                />
              </div>
              {errors.termsOfUse && (
                <p className={css.errors}>
                  이용약관에 동의하지 않으면 가입이 불가능합니다.
                </p>
              )}
              <div className={css.buttonContainer}>
                <button type="submit" className={css.Button}>
                  가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
        {signUpSuccess && (
          <ModalBasic
            isOpen={true}
            successContent={"회원가입에 성공하셨습니당당><><"}
          />
        )}
        {idChecked !== null && (
          <>
            {idChecked && idCheckedGood ? (
              <ModalBasic
                isOpen={true}
                successContent={"사용가능한 아이디에용!"}
              />
            ) : (
              idChecked &&
              !idCheckedGood && (
                <ModalBasic
                  isOpen={true}
                  successContent={"이미 있는 아이디에용!"}
                />
              )
            )}
            {!idChecked && (
              <ModalBasic
                isOpen={true}
                successContent={"아이디를 입력해주세용!"}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
