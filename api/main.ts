import ip from './ip';
import routes from './routes/main';
import express, { Request, Response } from 'express';
import login from './use/login'; //@ts-ignore
import cookieParser from 'cookie-parser';

const app = express();
const port = 8080;

app.use('/public', express.static('public'));
app.use(express.json());
app.use(cookieParser("secret"));
app.use('*', login as any);

for (const x of routes) app[x.method as 'get' || 'get'](x.route, x.fn as any);

app.listen(8080, () => {
    console.log(`\x1b[32mListening in http://${ip.local}:${port}\x1b[0m`);
})
