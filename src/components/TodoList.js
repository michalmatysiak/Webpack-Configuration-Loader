import React from "react";
import style from "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ list, remove }) => {
	const todoList = list.map(data => {
		return <Todo item={data} removeTodo={remove} key={data.id} />;
	});

	return <ul className={style.TodoList}> {todoList} </ul>;
};

export default TodoList;
