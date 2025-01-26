message-board
An interactive message board built with Express, EJS and PostgreSQL. Users can post messages in real time. Clean, modular design with reusable components for dynamic content rendering.

Live preview
https://message-board-federicotempo.koyeb.app/

Views, Router, and Controller
Views: The project consists of two views (form.ejs and index.ejs). form.ejs is used for the form where users can submit new messages, and index.ejs is used to display the message board with all the messages.

Router: The indexRouter.js file in the routes directory handles the routing for the application. It defines the routes for displaying the message board and submitting new messages.

Controller: The formController.js file in the controllers directory contains the logic for handling form submissions, including validation and adding new messages to the message list.

Features

Database Integration: A PostgreSQL database has been incorporated to store and retrieve messages. This enhances data persistence and scalability. Messages are now stored securely in the database, ensuring they remain available even after server restarts. The database integration allows for more advanced features like efficient pagination and future analytics.

Real-time Messaging: Users can post messages that are displayed in real time.

Display Author's Flag Based on IP Address: Automatically detects the IP address of each message and displays the corresponding country flag next to the author's name, providing a visual representation of their location.

Responsive Design: The message board is fully responsive and works on all device sizes.

Pagination: Messages are paginated to improve readability and navigation.

Random User Colors: Each user's name is displayed in a random color for better visual distinction.

Form Validation: Input fields for author name and message content are validated to ensure proper length and format.

Navigation: Easy navigation with buttons to post new messages and return to the message board.

