# Tattoo Planner


This project is a software-as-a-service application that enables a tattoo shop to interact with and manage it's customers.

## Developer Team
* Eric Billings (https://github.com/EricBillings)
* Horacio Garcia (https://github.com/garciahor1)
* Lawrence Gober (https://github.com/LGBEBEASTIN)
* Will White (https://github.com/wwhite12)


## Technologies Used

* javascript-programming language
* node.js-server environment
* npm express-server package
* npm path-file handling
* npm dotenv-secret key storage
* nodemon-server management
* sequelize-SQL database transactions
* bootstrap-css styling
* heroku-pp deployment
* google fonts/webfont helper-font selections
* nodemialer-customer email interaction
* passport-user authentication


## Deployed Version Links
<https://ericbillings.github.io/TattooPlanner/>

<https://github.com/EricBillings/TattooPlanner.git>

<https://tattoo-planner.herokuapp.com/>

## To get started with the program: 


1. Clone the repository to your local machine.

1. Run npm install on the command line to install local dependencies. 

1. Setup keys in the .env file in the following format:
SECRET_KEY=YOUR KEY
SESSION_KEY=YOUR KEY

1. Initiate a SQL database with a Customers and tattoos table.
 
1. Update the config.json file with the database name and your credentials.

1. Use node to start your server.

1. Execute npm run seed from the command line to seed the database if desired.

1. Navigate to local host on your browser and use port 8080.


## Using the app

1.  Visit the homepage where you can login if already a user or create a new account.

1.  If creating an account, you will be redirected to the home page after account creation. Next select Login.

1.  once logged in, the user can select the Get Started link to begin creating a tattoo. 

1.  On the tattoo creation page, enter your tattoo phrase, pick a font style, and font color.

1. Click the Preview Tattoo button to see your tattoo as it will appear.  Continue to adjust fonts and colors as needed.

1.  Next select the Body Part where your tattoo will be placed.

1.  Next, select the size of your tattoo.

1.  Finally, enter any special specifications that should accompany your tattoo request.

1.  Click Submit to send an email with your tattoo specifications to the tattoo shop.

1.  The tattoo shop can visit the Admin page to see all of the pending tattoos for the shop, and manage the list as needed.

## Future Enhancements

1.  Enable functionality to allow the user to view his/her tattoo creation overlayed on their body part.

1.  Enable text translation to allow for creating tattoos in other languages.




## Help with the app

Contact the Developer team on GitHub for assistance with the application.

