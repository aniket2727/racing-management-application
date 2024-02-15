
const express=require('express');
const cors=require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());
app.use(express.json());
require('./database/config');

const registerRouter = require('./router/Register.Router'); // register manage
const LoginRouter=require('./router/Login.Router');   // login  // manage
const EventRouter=require('./router/EventRouter')   // event management
const PostContentRouter=require('./router/Allpost.Router')  // all post management
const CartAddRouter=require('./router/CartsData.Router')   // carts data
const SemiRouter=require('./router/Semiqualifier.Router')  // semi controller
const FinalRouter=require('./router/Final.Router')  // semi controller





app.use('/register', registerRouter);   // for register user
app.use('/login', LoginRouter);   // for login user
app.use('/event', EventRouter);   // for event get set user
app.use('/post', PostContentRouter);   // for post get set user
app.use('/cart',CartAddRouter);   // for getting carts and adding carts
app.use('/semi',SemiRouter);   // semi carts data 
app.use('/semi',FinalRouter);   // semi carts data 

const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

