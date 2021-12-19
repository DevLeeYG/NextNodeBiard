import React, { useCallback, useState } from "react";
import AppLayout from "../component/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../component/hooks/useInput";
import styled from "styled-components";

//onfinish 는 e.프리벤트 디폴트가 자동실행된다.

const ErrorMessage = styled.div`
  color: red;
`;
const CheckError = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      //약관
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            required
            name="user-id"
            value={id}
            required
            onChange={onChangeId}
          />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input
            required
            name="user-nickname"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input
            required
            name="user-password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password">패스워드 확인</label>
          <br />
          <Input
            required
            type="password"
            name="user-password-check"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              탈퇴하지 않을것
            </Checkbox>
            {termError && (
              <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
