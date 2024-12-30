import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';



export const ToDoList = () => {
    // codigo js

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);


    const WhatToDo = (event) => {
        setInputText(event.target.value)
    }

    const addTodo = () => {
        setTodos([...todos, inputText])
        setInputText("")
    }

    const deleteTodo = (i) => {
        const resultado = todos.filter((_, index) => index != i);
        setTodos(resultado)
    }



    // codigo HTML

    return (<div className="container text-center">
        <div className="ToDoList">
            <ul className="list-group text-start">
                <li className="list-group-item">
                    <input type="text" placeholder="What needs to be done?"
                        value={inputText}
                        onKeyDown={(e) => e.key == "Enter" ? addTodo() : ""}
                        onChange={WhatToDo} />
                </li>
                {todos.map((todo, i) => {
                    return (
                        <li key={i} className="list-group-item"> {todo} <button onClick={() => deleteTodo(i)} type="button" className="btn text-danger"><DeleteIcon /></button>
                        </li>

                    )
                })}
                <p>
                    {todos.length} tasks left
                </p>


            </ul>

        </div>
    </div>

    );
}