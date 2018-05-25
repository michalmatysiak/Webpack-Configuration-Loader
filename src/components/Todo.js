import React from "react";
import style from "./Todo.css";

const Todo = ({ item, removeTodo }) => {
	return (
		<li>
			{item.text}
			<button
				className={style.todoButton}
				onClick={() => removeTodo(item.id)}
			>
				x
			</button>
		</li>
	);
};

export default Todo;
