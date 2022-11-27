import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

function ModifyUser({
  show,
  setShow,
  loginUser,
  setLoginUser,
  users,
  setUsers,
  todos,
  setTodos,
}) {
  const [input, setInput] = useState('');

  const closeModal = () => {
    setShow({ open: false, name: '' });
    setInput('');
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const modifyUser = (e) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegex = /^[A-Za-z0-9]{8,20}$/;
    const phoneRegex = /^[0-9\b -]{0,13}$/;
    if (!input) {
      alert(`${show.name}을 입력하세요!`);
      e.preventDefault();
    } else if (show.name === 'name' && input.length < 2) {
      alert('이름을 2글자 이상 입력하세요!');
      e.preventDefault();
    } else if (show.name === 'email' && !emailRegex.test(input)) {
      alert('이메일 형식을 확인하세요!');
      e.preventDefault();
    } else if (show.name === 'password' && !passwordRegex.test(input)) {
      alert('비밀번호를 8~20자리로 입력하세요!');
      e.preventDefault();
    } else if (show.name === 'phone' && !phoneRegex.test(input)) {
      alert('휴대폰 번호를 확인하세요!');
      e.preventDefault();
    } else {
      show.name === 'name' &&
        setTodos(
          todos.map((todo) =>
            todo.writer === loginUser.name ? { ...todo, writer: input } : todo,
          ),
        );
      setUsers(
        users.map((user) =>
          user.id === loginUser.id ? { ...user, [show.name]: input } : user,
        ),
      );
      setLoginUser({ ...loginUser, [show.name]: input });
      closeModal();
    }
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && modifyUser();
    e.keyCode === 27 && closeModal();
  };

  useEffect(() => {
    if (show.name === 'phone' && input.length === 11) {
      setInput(input.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else if (show.name === 'phone' && input.length === 13) {
      setInput(
        input.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  }, [input.length, input, show.name]);

  return (
    <>
      <Modal show={show.open} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            변경 할 {show.name} 입력하세요!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            autoFocus
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
            maxLength={show.name === 'phone' ? '13' : '30'}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={modifyUser}>
            Save Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModifyUser;
