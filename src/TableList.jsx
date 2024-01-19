import React, { useEffect, useState } from "react";


const TableList = () => {

    const [getData, setData] = useState([]);

    const getUsersData = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => {
                setData(data)
            }).catch(error => alert("11"));
    }
    
    useEffect(() => { getUsersData() }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {getData.map((ele, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{ele.id}</th>
                            <td>{ele.name}</td>
                            <td>{ele.username}</td>
                            <td>@{ele.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableList;