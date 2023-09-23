import React, {HTMLAttributes} from 'react';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/users", { cache: "no-store"});
    if (!res.ok) throw new Error("Couldn't connect to Database");

    return res.json();
}
const UsersPage = async () => {
    const data = await getData();
    console.log(data)
    return (
        <ul>
            {data?.map(user => <li key={user.id}>{user.email}</li>)}
        </ul>
    );
};

export default UsersPage;