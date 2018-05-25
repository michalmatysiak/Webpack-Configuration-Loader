import React from "react";
import style from "./Title.css";

const Title = props => (
	<div className={style.title}>
		<h2>{props.title}</h2>
		<p>
			{props.tasks} {props.tasksNr}
		</p>
	</div>
);
export default Title;
