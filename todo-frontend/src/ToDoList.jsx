
import React from 'react'
import { useState, useEffect } from 'react';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    useEffect(() => {
        fetch("http://localhost:3000/api/task")
            .then(response => response.json()) // Parse the JSON from the response
            .then(data => {
                console.log('Fetched data:', data); // Log the data to see its structure
                setTasks(data); // Access the 'users' array from the data object
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
            fetch('http://localhost:3000/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tasks), // Convert tasks to JSON string
            })
            .then(response => response.json())
            .then(data => console.log("Tasks saved:", data))
            .catch(err => console.error("Error saving tasks:", err));
    }, [tasks]);

        
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() != ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")    
        }

    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!=index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}


/**
 * NOTES:
 * The arrow function ensures that deleteTask(index) is not called during render but only when the button is actually clicked.
 * Add a "database using a text file that is generated with the program"- how to do this only once?
 * then use this "database" as the text for the job tracker thing
 */