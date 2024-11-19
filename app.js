const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes.js');
const languageRoutes = require('./Routes/languageRoutes.js');
const expertiseRoutes = require('./Routes/expertiseRoutes.js');
const LikeRoutes = require('./Routes/likeRoute.js');
const rateRoutes = require('./Routes/rateRoute.js');
const reviewRoutes = require('./Routes/reviewRoute.js');

const app = express();

app.use(cors());
app.use(BodyParser.json());


app.use(BodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));




app.get('/', (req, res) => { res.send('Welcome To OMOC') ; res.end();});
app.use('/api/user', userRoutes);
app.use('/api/language', languageRoutes);
app.use('/api/expertise', expertiseRoutes);
app.use('/api/like', LikeRoutes);
app.use('/api/rate', rateRoutes);
app.use('/api/review', reviewRoutes);


module.exports = { app };