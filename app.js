const express = require('express');
const stripe = require('stripe')('sk_test_vgcha3tGMUjtg2wdurBFOlEY');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
