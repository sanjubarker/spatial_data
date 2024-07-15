const db = require('../config/db')

exports.createPolygon = (req, res) => {
    let { name, coordinates } = req.body;
    name = name ? name : null
    coordinates  = coordinates ? coordinates : null

    const query = 'INSERT INTO polygons (name, coordinates) VALUES (?, ?)';
    db.query(query, [name, JSON.stringify(coordinates)], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId });
    });
};

exports.getAllPolygons = (req, res) => {
    const query = 'SELECT * FROM polygons';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getPolygonById = (req, res) => {
    const query = 'SELECT * FROM polygons WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

exports.deletePolygon = (req, res) => {
    const query = 'DELETE FROM polygons WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Polygon deleted' });
    });
};