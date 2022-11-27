import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 30px 20px 0px 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    font-size: 36px;
    color: #343a40;
    font-weight: bold;
    text-align: center;
    margin-bottom: 36px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .day {
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
`;

function TodoHeader({ todos, loginUser, isLogin }) {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="flex-row">
        {isLogin ? (
          <div className="tasks-left">
            할 일{' '}
            {
              todos
                .filter((todo) => todo.writer === loginUser.name)
                .filter((todo) => todo.done === false).length
            }
            개 남음
          </div>
        ) : (
          <div className="tasks-left" style={{ color: 'red' }}>
            로그인하세요!
          </div>
        )}

        <div className="day">{dayName}</div>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHeader;
