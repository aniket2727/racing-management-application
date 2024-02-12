
const express=require('express');
const cors=require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());
app.use(express.json());
require('./database/config');

const registerRouter = require('./router/Register.Router'); // register








app.use('/register', registerRouter);   // for register user



const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

