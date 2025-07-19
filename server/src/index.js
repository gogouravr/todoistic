import express from 'express';

const app = express();
const API_VERSION = 'v1';
const PORT = 8080;

const todoList = [
    { title: 'Make the bed', description: '' },
    { title: 'Do laundry', description: '' },
    { title: 'Buy groceries', description: '' }
];

// Serve the todo list
app.get('/api/list', (req, res) => {
    console.log('list requested')
    res.json(todoList);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});