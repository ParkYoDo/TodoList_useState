import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';

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
