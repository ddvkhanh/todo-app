import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ToDoItem({ item, onUpdate, onDelete }) {
    const [isCompleted, setIsCompleted] = useState(item.isCompleted || false);
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    const handleChecked = () => {
        setIsCompleted(!isCompleted);
        onUpdate(item.id, { isCompleted: !item.isCompleted });
    };

    const handleDelete = () => {
        onDelete(item.id)
    };

    return (
        <div key={item.id} className="group/item hover:bg-gray-900 flex items-center h-10 rounded-lg ">
            <input
                id={item.id}
                type="checkbox"
                checked={isCompleted}
                onChange={handleChecked}
                className="ml-3 w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="" htmlFor={item.id}>
                <span className={`ml-4 text-sm cursor-pointer ${isCompleted ? 'line-through' : ''}`}>
                    {item.text}
                </span>
            </label>
            <div className="group/icon invisible hover:bg-gray-700 group-hover/item:visible ml-auto mr-3 rounded flex items-center">
                <button onClick={handleDelete} className="delete-icon h-5 w-5 group-hover/icon:text-red-500 m-1">
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
}
