import React from 'react';
import styled, { css } from 'styled-components';
import TodoItem from './TodoItem';
import { Container, Row } from 'react-bootstrap';

const TodoListBlock = styled.div`
  padding: 30px 20px;
  overflow-y: auto;
  height: 100%;

  ${(props) =>
    !props.isLogin &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  /* flex: 1; */

  .mainText {
    text-align: center;
    font-size: 40px;
    color: #20c997;
  }
`;

function TodoList({ todos, setTodos, isLogin, loginUser }) {
  return (
    <TodoListBlock isLogin={isLogin}>
      <Container>
        <Row>
          {isLogin ? (
            todos
              .filter((todo) => todo.writer === loginUser.name)
              .map((todo) => (
                <TodoItem
                  id={todo.id}
                  title={todo.title}
                  content={todo.content}
                  done={todo.done}
                  setTodos={setTodos}
                  todos={todos}
                  key={todo.id}
                />
              ))
          ) : (
            <div className="mainText">Todo-List</div>
          )}
        </Row>
      </Container>
    </TodoListBlock>
  );
}

export default TodoList;
