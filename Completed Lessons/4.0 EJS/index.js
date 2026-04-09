import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    if(Date.prototype.getDay < 5) {
        res.render('index.ejs', { daystatus: 'Weekday', advice: 'Time to work hard!' });
    }else {
        res.render('index.ejs', { daystatus: 'Weekend', advice: 'Time to have fun!' });
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
