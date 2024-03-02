// Import the Express framework
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send 'Hello, World!' as the response
});

// Define the port number for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and make it listen for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
