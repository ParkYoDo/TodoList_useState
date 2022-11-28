import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { TfiWrite } from 'react-icons/tfi';

const LinkBlock = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
  z-index: 1;
`;

function TodoNav({ isLogin, loginUser, setIsLogin }) {
  const onLogout = () => {
    setIsLogin(false);
  };
  return (
    <>
      <LinkBlock>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                  <TfiWrite style={{ marginRight: '12px', fontSize: '24px' }} />
                  To Do List :)
                </Link>
              </Typography>
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
            </Toolbar>
          </AppBar>
        </Box>
      </LinkBlock>
    </>
  );
}

export default TodoNav;
