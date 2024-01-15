import React from 'react';

export default function Form({ handleSubmit, value, setValue, cost, setCost }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "value") {
            setValue(value);
        } else if (name === "cost") {
            setCost(parseFloat(value));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input
                type="text"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                name="value"
                placeholder="예) 렌트비"
                value={value}
                onChange={handleChange}
            />
            <input
                type="number"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                name="cost"
                placeholder="Enter cost"
                value={cost}
                onChange={handleChange}
            />
            <input
                className="p-2 text-blue-400 border-2 border-blue-400 hover:text-white hover:bg-blue-200"
                type="submit"
                value="Add"
            />
        </form>
    );
}