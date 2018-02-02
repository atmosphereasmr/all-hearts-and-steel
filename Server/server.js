require('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, controller = require('./controller');

const app = express();

app.use(express.static(__dirname + '/../build'))

massive(process.env.CONNECTION_STRING).then( db => {
 app.set('db', db)
})

massive(process.env.CONNECTION_STRING).then(dbInstance => {
 app.set('db', dbInstance);
});

app.use(express.static(__dirname + '/build'))

app.use( bodyParser.json() );
app.use( cors() );


app.get('/api/items', controller.getPlanes)

const port = process.env.PORT || 80
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );