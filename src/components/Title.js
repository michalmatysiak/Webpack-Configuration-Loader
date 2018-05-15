import React from "react";
import App from "./containers/App";

const Title = props => (
	<div>
		<h2>{props.title}</h2>
		<p>liczba dodanych zadań: {props.length}</p>
	</div>
);

export default Title;
