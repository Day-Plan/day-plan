const mongoose = require('mongoose');

export const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Database Connection established!');
    });
}