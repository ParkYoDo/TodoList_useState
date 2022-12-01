import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import TodoNav from './components/TodoNav';

const AppBlock = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #e9ecef;
  body,
  html {
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: '박요도',
      email: 'rucasian@korea.com',
      password: 'Sd0708r7b7!',
      phone: '010-7773-0037',
    },
    {
      id: 1,
      name: '박기태',
      email: 'scarletdemon@naver.com',
      password: 'Sd0708r7b7!',
      phone: '010-7997-1988',
    },
  ]);

  const [isLogin, setIsLogin] = useState(false);

  const [loginUser, setLoginUser] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [todos, setTodos] = useState([
    {
      id: 0,
      writer: '박요도',
      title: '첫번째 글',
      content: '안녕하세요',
      done: false,
    },
    {
      id: 1,
      writer: '박요도',
      title: '두번째 글',
      content: '안뇽',
      done: false,
    },
    {
      id: 2,
      writer: '박요도',
      title: '세번째 글',
      content: '안뇽ㅋ',
      done: false,
    },
    {
      id: 3,
      writer: '박요도',
      title: '네번째 글',
      content: '안뇽ㅋㅋ',
      done: false,
    },
    {
      id: 4,
      writer: '박기태',
      title: '첫번째 글',
      content: '안뇽ㅋㅋ',
      done: false,
    },
    {
      id: 5,
      writer: '박기태',
      title: '두번째 글',
      content: '안뇽ㅋㅋ',
      done: false,
    },
  ]);

  return (
    <>
      <AppBlock>
        <TodoNav isLogin={isLogin} loginUser={loginUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                todos={todos}
                setTodos={setTodos}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                loginUser={loginUser}
              />
            }
          />
          <Route
            path="/signup"
            element={<SignUp users={users} setUsers={setUsers} />}
          />
          <Route
            path="/login"
            element={
              <Login
                users={users}
                setLoginUser={setLoginUser}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="/mypage"
            element={
              <MyPage
                loginUser={loginUser}
                setLoginUser={setLoginUser}
                users={users}
                setUsers={setUsers}
                todos={todos}
                setTodos={setTodos}
              />
            }
          />
        </Routes>
      </AppBlock>
    </>
  );
}

export default App;
