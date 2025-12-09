// const express=require("express");
// const app=express()

// app.get("/",(req,res)=>{
//     res.send("Hello welcome to my express server!")

// })

// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

//sir sonnathu 


// const express = require("express");
// const app = express();

// app.use(express.json());

// let users = [
//   { id: 1, name: "sri" }
// ];

// // GET - Fetch all users
// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

// // POST - Create a new user
// app.post("/users", (req, res) => {
//   const newUser = req.body;

//   const user = {
//     id: users.length + 1,
//     name: newUser.name
//   };

//   users.push(user);

//   res.status(201).json({
//     message: "User created successfully",
//     user: user
//   });
// });

// // PUT - Update a user
// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   const user = users.find(u => u.id == id);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   user.name = updatedData.name || user.name;

//   res.status(200).json({
//     message: "User updated successfully",
//     user: user
//   });
// });

// // DELETE - Remove a user
// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;

//   const index = users.findIndex(u => u.id == id);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   const deletedUser = users.splice(index, 1);

//   res.status(200).json({
//     message: "User deleted successfully",
//     deleted: deletedUser
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



// Final code 

const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "sri" }
];

// Root route
app.get("/", (req, res) => {
  res.send("Hello welcome to my express server!");
});

// GET - Fetch all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST - Create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;

  const user = {
    id: users.length + 1,
    name: newUser.name
  };

  users.push(user);

  res.status(201).json({
    message: "User created successfully",
    user: user
  });
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const user = users.find(u => u.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = updatedData.name || user.name;

  res.status(200).json({
    message: "User updated successfully",
    user: user
  });
});

// DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
    deleted: deletedUser
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

