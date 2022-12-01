import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlock = styled.div`
  width: 70%;
  max-width: 700px;
  padding: 20px;

  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 20px;
  }

  Button {
    margin: 16px;
    padding: 12px 25px;
    margin-top: 20px;
  }
`;

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  margin: 20px;
  padding: 18px;
  width: 70%;

  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid skyblue;
`;

function Login({ users, setLoginUser, setIsLogin }) {
  const navigate = useNavigate();

  const emailInput = useRef();

  const [login, setLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const { loginEmail, loginPassword } = login;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const onLogin = (e) => {
    const findUser = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword,
    );

    if (!loginEmail) {
      alert('이메일을 입력하세요!');
      e.preventDefatul();
    } else if (!loginPassword) {
      alert('패스워드를 입력하세요!');
      e.preventDefatul();
    } else if (findUser) {
      alert(`${findUser.name}님, 환영합니다!`);
      setIsLogin(true);
      setLoginUser({ ...findUser });
      navigate('/');
    } else {
      alert('id, password를 확인하세요!');
      setLogin({
        loginEmail: '',
        loginPassword: '',
      });
      e.preventDefatul();
    }
    navigate('/');
  };

  const onMoveHome = (e) => {
    navigate('/');
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && onLogin();
    e.keyCode === 27 && onMoveHome();
  };

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  return (
    <>
      <DarkBackground>
        <LoginBlock>
          <h1>Login</h1>
          <Input
            type="text"
            name="loginEmail"
            placeholder="E-Mail"
            value={loginEmail}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={emailInput}
          />
          <Input
            type="password"
            name="loginPassword"
            placeholder="Password"
            value={loginPassword}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />

          <RowBlock>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={onLogin}
            >
              Login
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={onMoveHome}
            >
              Cancel
            </Button>
          </RowBlock>
        </LoginBlock>
      </DarkBackground>
    </>
  );
}

export default Login;
