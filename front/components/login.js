import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useInput } from '../pages/signup';
import { loginAction } from '../reducer/user';


const Login = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAction({
      id,
      password
    }));
  }, [id, password]);

  return (
    <Form onSubmit={onSubmitForm} style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '50px'}}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} style={{width: '400px'}} required />
      </div>
      <br />
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" style={{width: '400px'}} required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" style={{marginRight:'6px'}}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default Login;
