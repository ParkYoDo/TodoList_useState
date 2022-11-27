import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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
  height: 60%;
  max-width: 700px;
  min-height: 470px;
  padding: 30px;

  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  Button {
    margin: 10px;
    padding: 8px 12px;
    margin-top: 18px;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 18px;
  width: 70%;

  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid skyblue;
`;

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

function SignUp({ users, setUsers }) {
  const navigate = useNavigate();

  const nameInput = useRef();
  const userId = useRef(3);

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    phone: '',
  });

  const { name, email, password, checkPassword, phone } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSignUp = (e) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegex = /^[A-Za-z0-9]{8,20}$/;
    const phoneRegex = /^[0-9\b -]{0,13}$/;

    if (!name) {
      alert('이름을 입력하세요!');
      e.preventDefault();
    } else if (name.length < 2) {
      alert('이름을 2글자 이상 입력하세요!');
      e.preventDefault();
    } else if (!email) {
      alert('이메일을 입력하세요!');
      e.preventDefault();
    } else if (!emailRegex.test(email)) {
      alert('이메일 형식을 확인하세요!');
      e.preventDefault();
    } else if (!password) {
      alert('비밀번호를 입력하세요!');
      e.preventDefault();
    } else if (!passwordRegex.test(password)) {
      alert('비밀번호를 8~20자리로 입력하세요!');
      e.preventDefault();
    } else if (!checkPassword) {
      alert('비밀번호를 재입력하세요!');
      e.preventDefault();
    } else if (checkPassword && !(password === checkPassword)) {
      alert('비밀번호가 일치하지 않습니다!');
      e.preventDefault();
    } else if (!phone) {
      alert('휴대폰 번호를 입력하세요!');
      e.preventDefault();
    } else if (!phoneRegex.test(phone)) {
      alert('휴대폰 번호를 확인하세요!');
      e.preventDefault();
    } else {
      setUsers([...users, { id: userId.current, ...input }]);
      alert('회원가입이 완료되었습니다!');
      setInput({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
        phone: '',
      });
      userId.current += 1;
      navigate('/');
    }
  };

  const onMoveHome = (e) => {
    setInput({
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      phone: '',
    });
    navigate('/');
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && onSignUp();
    e.keyCode === 27 && onMoveHome();
  };

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  useEffect(() => {
    if (phone.length === 11) {
      setInput({
        ...input,
        phone: phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    } else if (phone.length === 13) {
      setInput({
        ...input,
        phone: phone
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
  }, [input, phone]);

  return (
    <>
      <DarkBackground>
        <LoginBlock>
          <h1>SIGN UP</h1>
          <Input
            type="text"
            name="name"
            placeholder="Name (2글자 이상)"
            value={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={nameInput}
          />
          <Input
            type="text"
            name="email"
            placeholder="E-Mail (abc@abc.abc)"
            value={email}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password (8~20글자)"
            value={password}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Input
            type="password"
            name="checkPassword"
            placeholder="Confirm Password"
            value={checkPassword}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          {checkPassword && !(password === checkPassword) && (
            <span style={{ color: 'red' }}>Mismatched Password!</span>
          )}
          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <RowBlock>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={onSignUp}
            >
              Confirm
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

export default SignUp;
