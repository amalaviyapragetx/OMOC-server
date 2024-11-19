require('dotenv').config();

const connectDB = require('./Database/connect.js');





const { http } = require('./socket');

const PORT = process.env.PORT || 8080;  

const start = async () => {
    console.log(process.env.MONGODB_URI);
    try {
        await connectDB(process.env.MONGODB_URI);
        http.listen(PORT, () => console.log('listening on *:3000'));
        // app.listen(PORT, () => { console.log(`Server is running on PORT ${PORT}`) });  
        } catch (error) {
            console.log(error);
        }
};


start();

// process.exit(1);



