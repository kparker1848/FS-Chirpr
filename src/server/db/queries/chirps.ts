import { Query } from '../index';
import { TChirps, TUsers } from '../models';

const all = () =>
//uses the TChirps model interface to integrate ts 
    Query<TChirps[] | TUsers[]>(`
    SELECT 
    users.name,
    chirps.*
    FROM chirps
    JOIN users ON users.id = chirps.userid
    ORDER BY chirps._created DESC
    `);
    
    const one = (chirpid: number) =>
    Query<TChirps[] | TUsers[]>(`
    SELECT 
    users.name,
    chirps.* 
    FROM chirps 
    JOIN users ON users.id = chirps.userid
    WHERE chirps.id = ?`,
    [chirpid]
    );
    
    //SET will use the chirp object to insert the chirp object information dynamically
    const insert = (chirp: any) => Query<{ insertId: number }>('INSERT INTO chirps SET ?', chirp);
    
    const update = (updatedChirp: any, chirpid: number) => Query<{ affectedRows: number }>('UPDATE chirps SET ? WHERE id = ?', [updatedChirp, chirpid])
    
    const destroy = (chirpid: number) => Query<{affectedRows: number }>('DELETE FROM chirps WHERE id = ?', [chirpid])
    
    export default {
        all,
        one,
        insert,
        update, 
        destroy
    };