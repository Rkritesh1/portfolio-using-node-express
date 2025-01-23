const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS, images)
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', {
        name: "Ritesh Kinge",
        about: "I'm a passionate developer with expertise in Node.js, Express, and front-end development.",
        projects: [
            { title: "Project 1", description: "Description of project 1", link: "#" },
            { title: "Project 2", description: "Description of project 2", link: "#" },
            { title: "Project 3", description: "Description of project 3", link: "#" }
        ],
        contact: {
            email: "your-email@example.com",
            linkedin: "https://www.linkedin.com/in/your-profile",
            github: "https://github.com/your-profile"
        }
    });
});

app.listen(port, () => {
    console.log(`Portfolio app listening at http://localhost:${port}`);
});
