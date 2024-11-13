import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";


export default function ToDoApp() {
    return (
        <div className="flex items-center justify-center w-screen h-screen font-medium">
            <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
                <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
                    <h1 className="sm:text-3xl text-lg underline">ToDo List</h1>
                    <ToDoList />
                </div>
            </div>
        </div>
    )
}