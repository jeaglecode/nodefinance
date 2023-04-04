const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.post('/users', (req, res) => {
    const user = req.body;
    const users = getUsers();
    // users(user);
    saveUsers(user);
    res.status(201).json(user);
});

function getUsers() {
    try {
        const users = fs.readFileSync('users.json');
        return JSON.parse(users);
    } catch (err) {
        return [];
    }
}

function saveUsers(user) {
    const data = JSON.stringify(user);
    fs.writeFileSync('users.json', data);
    console.log(user)
}



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});