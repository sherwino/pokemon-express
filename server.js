const express = require("express");
const bodyParser = require("body-parser");
const handleBars = require("express-handlebars");
const api = require('./routes/apiRoutes');
const views = require('./routes/viewRoutes');
const app = express();
const PORT = process.env.PORT || 8000;

app.use('/static', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

views(app);
api(app);



app.listen(PORT, ()=> {
    console.log(`Listening at port: ${PORT}`);
});

