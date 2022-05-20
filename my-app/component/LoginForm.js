import { Button, Form, Input } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../reducers/user";
import useInput from "./hooks/useInput";
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput("");
  const [passWord, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    dispatch(login({ id, passWord }));
  }, [id, passWord]);

  const FormWrapper = styled(Form)`
    padding: 20px;
  `;

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-pass">비밀번호</label>
        <br />
        <Input
          type="password"
          name="user-pass"
          value={passWord}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};
LoginForm.PropTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default LoginForm;
