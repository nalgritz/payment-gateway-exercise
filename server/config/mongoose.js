const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', () => {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});
