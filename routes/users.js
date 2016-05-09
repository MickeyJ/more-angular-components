const express = require('express'),
      router = express.Router();

const users = [
  {
    "id": 1,
    "name": "Bob Anderson",
    "age": 1000,
    "avatar": "images/future.gif",
    "fav_color": "peanut brown"
  },
  {
    "id": 2,
    "name": "Suzy Smith",
    "age": 5,
    "avatar": "images/future.gif",
    "fav_color": "white"
  }
];

router.get('/', (req, res, next) =>{
  res.json( users )
});

router.get('/:id', (req, res, next) =>{
  const user = users.filter( x => x.id == req.params.id)[0];
  res.json( user )
});

module.exports = router;