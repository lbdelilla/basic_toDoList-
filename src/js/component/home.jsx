import React from "react";
import ToDoList from "./ToDoList.jsx";
import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="text-center m-5 toDoList">
			<h1 className="todo-title">Simple To Do List!</h1>
			<main>
				<ToDoList/>
			</main>
			<footer>
				Made by{" "}
				<a href="http://www.linkedin.com/in/luciabelen" className="text-decoration-none" >Lulu Belén for 4Geeks Academy</a>, with
				love!
			</footer>
		</div>
	);
};

export default Home;
