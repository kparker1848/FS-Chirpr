import * as express from 'express';
import * as path from 'path';
import routes from './routes';
import config from './config';
import type { Error } from './utils/types';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(config.app.prefix, routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500);
    res.json({
        errors: {
           err: err.message
        }
    });
});



// const port = process.env.PORT || 3000; (dont need this with added .env port)
app.listen(config.app.port, () => console.log(`Server listening on port: ${config.app.port}`));
