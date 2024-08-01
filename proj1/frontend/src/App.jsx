import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Ensure Tailwind CSS is imported

function App() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error state
        try {
            const res = await axios.post("/api", { name });
            setResponse(res.data);
        } catch (error) {
            setError(error.response?.data || "Failed to submit the form");
            console.error("There was an error!", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 border border-gray-300 rounded-lg bg-white shadow-md"
            >
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
            {response && (
                <p className="mt-4 text-green-600">Response: {response}</p>
            )}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    );
}

export default App;
