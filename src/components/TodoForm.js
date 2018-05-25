import React from "react";
import style from "./TodoForm.css";

const TodoForm = props => (
	<div>
		<input
			className={style.inputForm}
			type="text"
			placeholder="add new task"
			value={props.value}
			onChange={props.onChange}
		/>
		<button className={style.inputButton} onClick={props.addTodo}>
			Add
		</button>
	</div>
);

export default TodoForm;
