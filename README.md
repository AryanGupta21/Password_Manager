# Password_Manager
This is a secure password manager built using Node.js, Express, MySQL, and React. It allows users to safely store and retrieve their passwords by encrypting them with the AES-256-CTR encryption algorithm.
  Features

    Password Encryption: User passwords are encrypted using AES-256-CTR before being stored in a MySQL database, ensuring security.
    Password Storage: Each password is saved with an associated title (e.g., Facebook) in the database, along with the encrypted value and initialization vector (IV).
    Password Decryption: Users can decrypt and view their passwords by clicking on the associated title from the list.
    Frontend: A React-based UI allows for simple password management.
    Backend: An Express server handles API requests and MySQL integration.
    CORS Enabled: Allows smooth interaction between frontend and backend.
  Technologies Used

    Backend: Node.js, Express.js, MySQL
    Frontend: React.js
    Encryption: AES-256-CTR (using crypto in Node.js)
    API Communication: Axios
  Here's a sample README text for your password manager:
Secure Password Manager

This is a secure password manager built using Node.js, Express, MySQL, and React. It allows users to safely store and retrieve their passwords by encrypting them with the AES-256-CTR encryption algorithm.
Features

    Password Encryption: User passwords are encrypted using AES-256-CTR before being stored in a MySQL database, ensuring security.
    Password Storage: Each password is saved with an associated title (e.g., Facebook) in the database, along with the encrypted value and initialization vector (IV).
    Password Decryption: Users can decrypt and view their passwords by clicking on the associated title from the list.
    Frontend: A React-based UI allows for simple password management.
    Backend: An Express server handles API requests and MySQL integration.
    CORS Enabled: Allows smooth interaction between frontend and backend.

Technologies Used

    Backend: Node.js, Express.js, MySQL
    Frontend: React.js
    Encryption: AES-256-CTR (using crypto in Node.js)
    API Communication: Axios

How to Use

    Add a Password: Enter a password and a title (e.g., Facebook) to securely store it.
    View Passwords: All stored password titles are displayed. Click on a title to decrypt and view the password in the console.(Inspect the webpage in console to view the password)
    Data Encryption: Passwords are encrypted before storage, and only decrypted upon request.( Encrypted Passwords are stored in MySQL database.)
Installation

    1. Clone the repository.
    2. Install dependencies:
            Follow the steps strictly to run the web app:
                -Install React Application in the client
                        $ npx create-react-app .
                -Install Package.json in the server folder
                        $ npm init
                - Add Dependencies in the server
                        $ npm add express mysql
                        $ npm add cors
                  
          
    3. Set up MySQL workbench with a PasswordManager Schema and table passwords
    4. Change the MySQL password in the db.query connection to match the password you use for MySQL Workbench.
    5. Run the Server
            node index.js
    6. Start React Front End
License

This project is open-source and available under the MIT License.
    
