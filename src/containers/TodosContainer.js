import React from "react";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import { connect } from "react-redux";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
      />
    </div>
  );
};

export default connect(
  //비구조화 할당을 통해 todos를 분리하여
  //state.todos.input 대신 todos.input을 사용
  ({ todos }) => ({ input: todos.input, todos: todos.todos }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
