const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pointRoutes = require('./routes/pointRoutes');
const polygonRoutes = require('./routes/polygonRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/points', pointRoutes);
app.use('/api/polygons', polygonRoutes);

app.get('/', (req, res) => {
    res.send('Spatial Data Platform API');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
