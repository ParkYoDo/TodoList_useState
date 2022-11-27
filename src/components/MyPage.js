import React, { useState } from 'react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ModifyUser from './ModifyUser';

const MyPageBlock = styled.div`
  width: 512px;
  margin: 100px auto;

  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  padding: 50px;

  background-color: white;

  h1 {
    margin-bottom: 24px;
  }
`;

function MyPage({ loginUser, setLoginUser, users, setUsers, todos, setTodos }) {
  const [show, setShow] = useState({ open: false, name: '' });

  const openModal = (e) => {
    setShow({ open: true, name: e.target.dataset.id });
  };
  return (
    <>
      <ModifyUser
        show={show}
        setShow={setShow}
        loginUser={loginUser}
        setLoginUser={setLoginUser}
        users={users}
        setUsers={setUsers}
        todos={todos}
        setTodos={setTodos}
      />
      <MyPageBlock>
        <h1>My Page :)</h1>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto">
              <div className="fw-bold">Name</div>
              {loginUser.name}
            </div>
            <Badge bg="primary" pill onClick={openModal} data-id="name">
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto">
              <div className="fw-bold">E-mail</div>
              {loginUser.email}
            </div>
            <Badge bg="primary" pill onClick={openModal} data-id="email">
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto">
              <div className="fw-bold">Password</div>
              {loginUser.password}
            </div>
            <Badge bg="primary" pill onClick={openModal} data-id="password">
              수정
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-3 me-auto">
              <div className="fw-bold">Phone</div>
              {loginUser.phone}
            </div>
            <Badge bg="primary" pill onClick={openModal} data-id="phone">
              수정
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </MyPageBlock>
    </>
  );
}

export default MyPage;
