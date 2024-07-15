const db = require('../config/db')

exports.createPoint = (req, res) => {
    let { name, lat, lon } = req.body;
    name = name ? name : null
    lat  = lat ? lat : null
    lon  = lon ? lon : null

    const query = 'INSERT INTO points (name, lat, lon) VALUES (?, ?, ?)';
    db.query(query, [name, lat, lon], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId });
    });
};

exports.getAllPoints = (req, res) => {
    const query = 'SELECT * FROM points';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getPointById = (req, res) => {
    const query = 'SELECT * FROM points WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

exports.deletePoint = (req, res) => {
    const query = 'DELETE FROM points WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Point deleted' });
    });
};