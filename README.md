# Install dependencies
npm install

# MongoDB connect
in 'app.js', instead of connectDB(process.env.MONGO_URI), need to hard code the URL in local machine when clone this repository

#Run app
npm start
or
node app.js
