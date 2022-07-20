// https://www.youtube.com/watch?v=-RCnNyD0L-s
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const users = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Julio" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  // res.render('login.ejs')
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post(
  "/register",
  (req, res) => {
    // try {
    // const hashedPassword = bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect("/login");
    console.log(users);
    // } catch {
    //   res.redirect("/register");
    // }
  }
  // console.log(users)
);

app.listen(3000);
