const db = require('../config/db');

const PointModel = {
  createPoint: (coordinates, callback) => {
    const query = 'INSERT INTO points (latitude, longitude) VALUES (?, ?)';
    db.query(query, coordinates, callback);
  },
  getPoints: (callback) => {
    const query = 'SELECT * FROM points';
    db.query(query, callback);
  },
};

module.exports = PointModel;