import { React, useEffect, useState } from "react";
import { data } from "../constants/data";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

export default function ToDoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : data;
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const updateTodo = (id, updates) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, ...updates } : todo
            )
        );
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const addNewTodo = (newTodo) => {
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos, newTodo];
            return updatedTodos;
        })
    }

    return (
        <div className="">
            <ToDoInput onAddNewTodo={addNewTodo} />
            <div className="my-3">
                {todos.map((item) => (
                    <ToDoItem key={item.id} item={item} onUpdate={updateTodo} onDelete={deleteTodo} />
                ))}
            </div>

        </div>

    )
}