# SleepTracker

[Live demo](https://sleep-trackr.herokuapp.com/)

## Description
SleepTracker helps you track your daily sleeping habits <br />
Usecase: simply set a routine and check in with the app on your preferred time each day to confirm you're awake. The check-in method will only be accessible within 30 minute radius (∓ 15 mins) of your preffered wake up time.
The app will track your data to keep you motivated.<br /><br />
SleepTracker is a fullstack app built with MERN stack, using Redux for state management. <br />

## Preview
![Screenshot 2020-05-26 at 20 43 34](https://user-images.githubusercontent.com/50910926/82932880-c60c7180-9f91-11ea-80b2-e829dd9f584d.png)
![Screenshot 2020-05-27 at 14 03 52](https://user-images.githubusercontent.com/50910926/83011812-2e576380-a023-11ea-9da2-cfcf46ecc153.png)


## Usage
npm install <br />

### backend
npm start <br />
will start the server on http://localhost:8080/ <br /><br />

### frontend
cd frontend <br />
npm start <br />
cd ..

will start the app on http://localhost:3000/

To get the app running on a mongoDB database, you will also want to create an either local or cloud cluster and include the URI set to a mongoURI variable in /config/.env <br />
Additionally you will need to set a jwtSecret variable to any secret string of your choice and include that in the /config/.env file as well.
