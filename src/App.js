import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");
    const [cost, setCost] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            cost: cost,
            completed: false
        };

        setTodoData((prev) => [...prev, newTodo]);
        setValue("");
        setCost(0);
    };

    const handleRemoveClick = () => {
        setTodoData([]);
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div>예산 계산기</div>
                <div className="flex justify-beteen mb-3">
                    <Form 
                        handleSubmit={handleSubmit}
                        value={value}
                        setValue={setValue}
                        cost={cost}
                        setCost={setCost}
                    />
                </div>
                <Lists todoData={todoData} setTodoData={setTodoData} />
                <button onClick={handleRemoveClick}>목록 지우기</button>
            </div>
        </div>
    );
}
