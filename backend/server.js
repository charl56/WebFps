// Your main server file
const express = require('express');
const cors = require('cors');
const mapsRouter = require('./controllers/mapsController');
const usersRouter = require('./controllers/userController');
const app = express();

const http = require('http').Server(app);

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(mapsRouter); // Use maps routes
app.use(usersRouter); // Use login routes

// Import and attach the socket handler
const initSocketIO = require('./utils/socketHandler');
initSocketIO(http);

app.use(express.static('../dist/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '../../dist/index.html');
});

http.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${process.env.PORT || 3000}`);
});
