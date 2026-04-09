import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = 'ILoveProgramming';
var UserIsAuthorised = false;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(check);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
    if (UserIsAuthorised) {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.sendFile(__dirname + '/public/index.html');
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function check(req, res, next) {
    if (req.body.password === password) {
        UserIsAuthorised = true;
    }
    next();
};