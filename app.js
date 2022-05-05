//// ----------- lab 7.2 ----------->
const express = require("express");
const validator = require("validator");
const { v4: uuidv4 } = require("uuid");
const createError = require("./utils/createError");
const todoRoute = require("./routes/todoRoute");

const { readTodos, writeTodos } = require("./services/todoService");

const app = express();

app.use(express.json());

app.use("/todos", todoRoute);

//// ------- for Error function ------->
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ message: err.message });
});

app.listen(8002, () => console.log("server running on port: 8002"));
