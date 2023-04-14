const auth = require('json-server-auth');
const jsonServer = require('json-server');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

app.db = router.db;

app.use(middlewares);

// defining rules for users here
const rules = auth.rewriter({
    users: 640,
    videos: 660,
    assignments: 660,
    quizzes: 660,
    assignmentMark: 660,
    quizMark: 660
});

app.use(rules);
app.use(auth);
app.use(router);

server.listen(port);
