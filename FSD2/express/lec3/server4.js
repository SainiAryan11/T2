const express = require("express");
const app = express();

// Middleware 1: Entry Log (like college gate entry)
const entryLog = (req, res, next) => {
    console.log("Student entered campus");
    next();
};

// Middleware 2: ID Check
const checkID = (req, res, next) => {
const hasID = true; // change to false to test
if (hasID) {
    req.student = "A"; // add student name
    console.log("ID verified");
    next();
} else {
    res.send("Access Denied: No ID Card");
}
};

// Apply middleware chain
app.use("/class", entryLog, checkID);

// Final Route (Teacher)
app.get("/class/data", (req, res) => {
    res.send(`Welcome ${req.student} to the class`);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});