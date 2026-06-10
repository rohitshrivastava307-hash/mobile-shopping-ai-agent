const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Phone = require('./models/phones');
const phones = require('./dummy_data/phonedata');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Phone.deleteMany();
    await Phone.insertMany(phones);

    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();