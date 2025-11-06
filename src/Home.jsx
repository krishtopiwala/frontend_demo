import React, { useEffect, useState } from "react";
import Create from "./Create.jsx";
import axios from "axios";

function Home() {
    const [userData, setUsersData] = useState([]);
    useEffect(() => {
        // axios.get("http://localhost:3001/api/users/")
        // axios.get("http://192.168.0.110:3001/api/users/")
        axios.get("https://backend-demo-4dgz.onrender.com/api/users/")
        .then(result => {
            console.log(result.data);
            setUsersData(result.data.User || result.data);
        })
        .catch(error => console.error(error))
    }, []);
    return (
        <div>
            <h2>Registration Form</h2>
            <Create />
            {
                userData.length === 0
                ?
                <div><h2>No User</h2></div>
                :
                userData.map((usr, index) => (
                    <div key={index}>
                        {usr.email}
                    </div>
                ))
            }
        </div>
    )
}

export default Home;