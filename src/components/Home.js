import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

function Home({ todos, setTodos, isLogin, loginUser }) {
  return (
    <>
      <TodoTemplate>
        <TodoHeader todos={todos} isLogin={isLogin} loginUser={loginUser} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          isLogin={isLogin}
          loginUser={loginUser}
        />
        <TodoCreate
          todos={todos}
          setTodos={setTodos}
          isLogin={isLogin}
          loginUser={loginUser}
        />
      </TodoTemplate>
    </>
  );
}
export default Home;
