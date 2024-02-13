
const express=require('express');
const cors=require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());
app.use(express.json());
require('./database/config');

const registerRouter = require('./router/Register.Router'); // register
const LoginRouter=require('./router/Login.Router');   // login
const EventRouter=require('./router/EventRouter')   // event 
const PostContentRouter=require('./router/Allpost.Router')  // all post data







app.use('/register', registerRouter);   // for register user
app.use('/login', LoginRouter);   // for login user
app.use('/event', EventRouter);   // for event get set user
app.use('/post', PostContentRouter);   // for post get set user



const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

