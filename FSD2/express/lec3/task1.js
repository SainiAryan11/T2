// Write express JS script to load in html file* having username, password and submit button.
// On clicking of submit button, it should jump on check page using post method. 
// Implement an authentication middleware that checks whether the entered username is "admin" and the password is "1234".
// If the credentials are correct, the application should display the message "Login Successful". 
// For any other username it should stay on same middleware to print warning message in red color. 

const expr = require("express");
const app = expr();

app.use(expr.urlencoded({ extended: false }));
app.use(expr.static('../public', { index: "two.html" }));

// Authentication Middleware
app.post("/check", (req, res, next) => {
    const u1 = req.body.uname;
    const p1 = req.body.password;   

    if (u1 === "admin" && p1 === "1234") {
        next();  // go to next handler
    } else {
        res.send(`
            <h1 style="color:red; text-align:center;">
                Invalid Username or Password
            </h1>
            <div style="text-align:center;">
                <a href="/">Go Back</a>
            </div>
        `);
    }
});

app.post("/check", (req, res) => {
    res.send("<h1 style='color:green; text-align:center;'>Login Successful</h1>");
});

app.listen(7002, () => {
    console.log("Server running on http://localhost:7002");
});
