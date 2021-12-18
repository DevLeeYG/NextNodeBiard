import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
const LoginForm = () => {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [checkPass, setCheckPass] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePass = useCallback((e) => {
    setPassWord(e.target.value);
  }, []);
  return (
    <Form>
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
          onChange={onChangePass}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
{
  /* <div>
        <label htmlFor="user-check-pass">비밀번호 확인</label>
        <br />
        <Input
          name="user-check-pass"
          value={checkPass}
          onChange={onCheckPass}
          required
        />
      </div> */
}
