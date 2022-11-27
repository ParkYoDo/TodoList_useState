import React from 'react';
import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';
import { BiCircle, BiCheckCircle, BiXCircle } from 'react-icons/bi';

const RemoveBtn = styled.div`
  color: #ced4da;
  &:hover {
    color: #ff6b6b;
  }
  &:active {
    color: #fa5252;
  }
`;

const CheckBtn = styled.div`
  color: #ced4da;
  &:hover {
    color: #38d9a9;
  }
  &:active {
    color: #20c997;
  }
`;

const Icons = styled.div`
  position: absolute;
  font-size: 20px;
  right: 10px;
  top: 3px;
  cursor: pointer;
  display: none;
`;

const TodoItemBlock = styled.div`
  padding: 12px 0px;
`;

const PostIt = styled.div`
  background-color: #fef3bf;
  padding: 16px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    ${Icons} {
      display: flex;
    }
  }
  h5,
  p {
    text-align: center;
    margin: 8px 0px;
    border-bottom: 1px solid red;
  }
  ${(props) =>
    props.done &&
    css`
      background-color: #ced4da;
      color: black;
      text-decoration: line-through 1px solid red;
      h5,
      p {
        border-bottom: 1px solid black;
      }
    `}
`;

function TodoItem({ id, title, content, setTodos, todos, done }) {
  const removeTodo = (e) => {
    setTodos(todos.filter((todo) => todo.id !== parseInt(e.target.dataset.id)));
  };

  const toggleTodo = (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === parseInt(e.target.dataset.id)
          ? { ...todo, done: !todo.done }
          : todo,
      ),
    );
  };
  return (
    <>
      <Col sm="6">
        <TodoItemBlock>
          <PostIt done={done}>
            <Icons>
              <CheckBtn done={done}>
                {done ? (
                  <BiCheckCircle onClick={toggleTodo} data-id={id} />
                ) : (
                  <BiCircle onClick={toggleTodo} data-id={id} />
                )}
              </CheckBtn>
              <RemoveBtn>
                <BiXCircle onClick={removeTodo} data-id={id} />
              </RemoveBtn>
            </Icons>
            <h5>{title}</h5>
            <p>{content}</p>
          </PostIt>
        </TodoItemBlock>
      </Col>
    </>
  );
}

export default TodoItem;
