import { Query } from '../index';
import type { TUsers } from '../models';

const all = () =>
//uses the TUsers model interface to integrate ts 
    Query<TUsers[]>(`
    SELECT
        id,
        name,
        email,
        created_at
    FROM users
`);

const one = (userid: number) =>
    Query<TUsers[]>(`
    SELECT
        *
    FROM users
    WHERE id = ?`,
    [userid]
);

export default {
    all,
    one
}