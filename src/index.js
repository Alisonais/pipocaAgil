import exp from 'express';
import {router} from './routes.js'

const app = exp();

app.use(exp.json());
app.use(router);

app.listen(3000, () => console.log('server is running'));