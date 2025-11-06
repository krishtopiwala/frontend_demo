import React, { useState } from "react";
import axios from "axios";

function Create() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleAdd = () => {
        axios.post("https://backend-demo-4dgz.onrender.com/api/users/register", { email: email, password: password })
        .then(result => console.log(result))
        .catch(error => console.error(error))
    };
    return (
        <div>
            <input type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create;