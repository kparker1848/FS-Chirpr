import * as mysql from 'mysql';
import config from '../config';
import users from './queries/users';
import chirps from './queries/chirps';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {

    const  sql = mysql.format(query, values);
    console.log(sql);

    return new Promise<T>((resolve, reject) => {
        pool.query(sql, (err, results) =>  {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};


export default {
    users,
    chirps
}