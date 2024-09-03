const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const tasksFilePath = './tasks.txt';

// Helper function to read tasks from tasks.txt
const readTasksFromFile = () => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading tasks from file:', err);
        return [];
    }
};

// Helper function to write tasks to tasks.txt
const writeTasksToFile = (tasks) => {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
        console.log('Tasks successfully saved to file.');
    } catch (err) {
        console.error('Error writing tasks to file:', err);
    }
};

// Endpoint to get tasks (retrieve from tasks.txt)
app.get('/api/task', (req, res) => {
    const tasks = readTasksFromFile();
    res.json(tasks);
});

// Endpoint to post tasks (save to tasks.txt)
app.post('/api/task', (req, res) => {
    const tasks = req.body;
    console.log('Received tasks:', tasks);
    
    // Save the tasks to the file
    writeTasksToFile(tasks);
    
    res.json({ success: true, tasks });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
