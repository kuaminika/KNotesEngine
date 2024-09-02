const express = require('express');
const router = express.Router();
const { marked } = require('marked');



console.log("inside router stuff");


router.get('',async (req,res) =>{

    let data = {
        title: 'Welcome to my app',
        message: 'This is a sample message',
      };
    
      let headings = [];
    // Override function
    const walkTokens = (token) => {
        
        if (token.type === 'heading') {
            //console.log(token.text,token.depth)
            if(token.depth <3) return; 
            token.depth--;
            let {text,raw} = token;
            headings.push({text,raw});
        }
    };
    
    marked.use({ walkTokens });
  

     let reactCheatSheet = await fetch("https://raw.githubusercontent.com/kuaminika/kuaminika-studies/main/reactJS_cheatsheet.md").then(r=>r.text());
     reactCheatSheet = marked.parse(reactCheatSheet);
     console.log(headings);
      data = {reactCheatSheet,headings,...data};
      //console.log(data);
      // Render the 'index' view and pass the data
      res.render('index', data);
})



// Sample controller function to get a list of users
router.get('/users', (req, res) => {
  // Logic to fetch user data from a database or other source
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  res.json(users);
});

// Sample controller function to create a new user
router.post('/users', (req, res) => {
    console.log("inside get users")
  const newUser = req.body;

  // Logic to validate and save the new user to a database or other source
  // ...

  res.status(201).json(newUser);
});

// Sample controller function to get a specific user by ID
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Logic to fetch the user with the given ID from a database or other source
  // ...

  res.json(user);
});

// Sample controller function to update a specific user by ID
router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  // Logic to update the user with the given ID in a database or other source
  // ...

  res.json(updatedUser);
});

// Sample controller function to delete a specific user by ID
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Logic to delete the user with the given ID from a database or other source
  // ...

  res.sendStatus(204);
});

module.exports = router;