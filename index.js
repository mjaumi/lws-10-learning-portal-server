const auth = require('json-server-auth');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(middlewares);

const rules = auth.rewriter({
    users: 640,
    videos: 640,
    assignments: 640,
    quizzes: 640,
    assignmentMark: 660,
    quizMark: 660
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(port);
