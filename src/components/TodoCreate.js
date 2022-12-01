import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #1cb1f5;
  font-size: 18px;
  text-align: center;
  margin: 12px;
  padding: 4px;
`;

const InsertForm = styled.form`
  padding: 40px;
  border-radius: 16px;
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
`;

const AddButton = styled.button`
  background-color: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    !props.isLogin &&
    css`
      display: none;
    `}

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate({ todos, setTodos, loginUser, isLogin }) {
  const titleInput = useRef();
  const todoId = useRef(4);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const { title, content } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const createTodo = (e) => {
    if (!title) {
      alert('title을 입력하세요!');
    } else if (!content) {
      alert('content를 입력하세요!');
    } else {
      setTodos([
        ...todos,
        { id: todoId.current, writer: loginUser.name, ...input, done: false },
      ]);
      setInput({
        title: '',
        content: '',
      });
      setOpen(false);
      todoId.current += 1;
      e.preventDefault();
      titleInput.current.focus();
    }
  };

  const openInput = () => {
    setOpen(!open);
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && createTodo();
    e.keyCode === 27 && setOpen(false);
  };

  useEffect(() => {
    setInput({ title: '', content: '' });
    open && titleInput.current.focus();
  }, [open]);

  return (
    <>
      {open && (
        <InsertForm onSubmit={createTodo}>
          <Input
            // autoFocus
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={onChange}
            ref={titleInput}
            onKeyDown={onKeyDown}
            style={{ width: '35%' }}
          />
          <Input
            type="text"
            name="content"
            value={content}
            placeholder="Content"
            onChange={onChange}
            onKeyDown={onKeyDown}
            style={{ width: '65%' }}
          />
        </InsertForm>
      )}
      <AddButton onClick={openInput} open={open} isLogin={isLogin}>
        <MdAdd />
      </AddButton>
    </>
  );
}

export default TodoCreate;
