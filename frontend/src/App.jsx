import React, { useState } from "react";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error state
        try {
            const res = await axios.post("/api", { name }); // Adjust the endpoint as needed
            setResponse(res.data);
        } catch (error) {
            setError(error.response?.data || "Failed to submit the form");
            console.error("There was an error!", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <button type="submit">Submit</button>
            </form>
            {response && <p>Response: {response}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default App;
