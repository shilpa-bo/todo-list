import React, { useState, useEffect } from 'react';

export default function DisplayApi() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/task")
            .then(response => response.json()) // Parse the JSON from the response
            .then(data => {
                console.log('Fetched data:', data); // Log the data to see its structure
                setBackendData(data.users || []); // Access the 'users' array from the data object
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
            
    return (
        <div>
            {backendData.length > 0 ? (
                <ul>
                    {backendData.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            ) : (
                <p>No data found</p>
            )}
        </div>
    );
}
