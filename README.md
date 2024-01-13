This is a blogify website Project 

- Project Structure:

    Clearly organized project structure with folders for routes, models, ejs files, middlewares, services, and views/controllers.
    Authentication Middleware:

- Implementation of an authentication middleware (checkForAuthenticationCookie) to handle user      
  
  authentication based on a token stored in cookies.
  Proper handling of cases where the token is present or absent.
  Database Models:

- Definition of MongoDB models (Blog, Comment, User) using Mongoose for the blogify database.
  Usage of schema types, references, timestamps, and pre-save hooks.
  
- User Authentication and Token Management:

  Secure password handling with the use of cryptographic functions (e.g., createHmac, randomBytes) for password hashing and salting.
  Token creation and validation functions (createTokenForUser, validateToken) using JSON Web Tokens (JWT) for secure user authentication.

- Express Routing:

  Express Router usage for defining routes related to blogs (/blog) and user authentication (/user).
  Implementation of CRUD operations for blogs, including blog creation, retrieval, and commenting.

- Multer for File Uploads:

  Implementation of file uploads using Multer middleware for handling cover images associated with blog posts.

- Error Handling:

  Adequate error handling, such as catching and handling errors during token validation and password matching.

- Database Connection:

  Establishing a connection to MongoDB using Mongoose in the main app.js file.
  Handling successful and error scenarios when connecting to the database.
  
- Express Configuration:

  Setting up the Express app with EJS as the view engine, static file serving, and middleware for parsing URL-encoded data and cookies.


signin - 
![Screenshot (60)](https://github.com/ritikgupta2002/Blogify/assets/99651822/6a81bab4-a169-4999-9a25-023c6e80d0d6)

signup-
![Screenshot (61)](https://github.com/ritikgupta2002/Blogify/assets/99651822/44908133-b8c9-43e1-8c8e-4a1450c059fd)

Homepage-
![Screenshot (62)](https://github.com/ritikgupta2002/Blogify/assets/99651822/7c536a33-07fb-42ae-8a89-8be858b991ac)

addblog-
![Screenshot (63)](https://github.com/ritikgupta2002/Blogify/assets/99651822/1b8d31f5-0149-43a2-9cd3-98afad1fd079)

blog-
![Screenshot (64)](https://github.com/ritikgupta2002/Blogify/assets/99651822/40fad602-bce9-4052-adcd-66fa93892564)

![Screenshot (65)](https://github.com/ritikgupta2002/Blogify/assets/99651822/68890fa5-f5c8-40ce-9bf2-5431a4e14675)

comments-
![Screenshot (66)](https://github.com/ritikgupta2002/Blogify/assets/99651822/f039b60c-41bb-4c7b-a999-7898ab5ff1db)


