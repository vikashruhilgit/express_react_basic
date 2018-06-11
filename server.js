/*jshint esversion: 6 */

const express = require('express');

const app = express();
const route = express.Router();
const port = 5000;

app.use('/', route);

route.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

app.listen(port, () => console.log(`server is lestining to port ${port}`));
