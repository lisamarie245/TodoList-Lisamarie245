import React from "react";
import { ToDoList } from "./ToDoList";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="Home text-center ">
			<h1 className="text-center mt-5 text-danger text-danger-emphasis">To-Do List</h1>
		<ToDoList/>
		</div>
	);
};

export default Home;
