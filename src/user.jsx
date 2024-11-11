import { useEffect, useState } from "react";
import UserData from "./userData";
export default

function User(){
const [users, setUser] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
    },
    [])
    return (
        <div>
            <h1>Users : {users.length}</h1>
            {
                users.map(data => <UserData data={data}></UserData>)
            }
        </div>
    )
}