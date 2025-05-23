const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');
const app = express();
app.use(bodyParser.json());
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

