import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { TfiWrite } from 'react-icons/tfi';

const Navbar = styled.div`
  background-color: #546e7a;
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  a {
    text-decoration: none;
    color: white;
    border-radius: 8px;
    padding: 12px;
    &:hover {
      background-color: #607d8b;
    }
    &:active {
      background-color: #455a64;
    }
  }
`;

const NavLogo = styled.div`
  a {
    font-size: 24px;
  }
`;
const NavMenu = styled.div`
  button {
    font-size: 16px;
  }
`;

function TodoNav({ isLogin, loginUser, setIsLogin }) {
  const onLogout = () => {
    setIsLogin(false);
  };
  return (
    <>
      <Navbar>
        <NavLogo>
          <Link to="/">
            <TfiWrite style={{ marginRight: '12px', fontSize: '24px' }} />
            To Do List :)
          </Link>
        </NavLogo>
        <NavMenu>
          {isLogin ? (
            <>
              <Link to="/mypage">
                <Button color="inherit">{loginUser.name}</Button>
              </Link>
              <Link to="/" onClick={onLogout}>
                <Button color="inherit">Logout</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup">
                <Button color="inherit">Sign up</Button>
              </Link>
            </>
          )}
        </NavMenu>
      </Navbar>
    </>
  );
}

export default TodoNav;
