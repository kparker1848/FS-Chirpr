import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error ('Cannot find a .env file')
};

export default {
    mysql: {
        //process environment variables (from .env) like DB_USER
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    },
    app: {
        //for use with a specifically designated port, parsed to translate string/base 10 number
        port: parseInt(process.env.PORT, 10),
        //api prefix 
        prefix: '/api'
    }
};