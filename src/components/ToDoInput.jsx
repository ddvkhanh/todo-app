import { PlusIcon } from "@heroicons/react/24/outline";
import { useState, useId } from "react";
import { data } from "../constants/data";
import { v4 as uuidv4 } from 'uuid';


export default function ToDoInput({ onAddNewTodo }) {
    const [value, setValue] = useState("");

    const handleAdd = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() !== "") {
            const newItem = { id: uuidv4(), text: value, isCompleted: false };
            onAddNewTodo(newItem);
            setValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="ml-2 flex items-center w-full h-8 px-2 mt-5 text-sm font-medium rounded-lg bg-slate-700">
                <input value={value} className="grow h-8 bg-transparent focus:outline-none font-medium" type="text" placeholder="Add a new task" onChange={handleAdd} />
                {value ?
                    <button type="submit" className="grow-0 h-6 w-6 bg-teal-600 rounded-xl">
                        <PlusIcon />
                    </button>
                    :
                    <div className=""></div>
                }

            </div>
        </form>

    )
};