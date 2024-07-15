const db = require('../config/db');

const PolygonModel = {
  createPolygon: (polygonData, callback) => {
    const query = 'INSERT INTO polygons (name, geom) VALUES (?, ST_GeomFromText(?))';
    db.query(query, polygonData, callback);
  },
  getPolygons: (callback) => {
    const query = 'SELECT * FROM polygons';
    db.query(query, callback);
  },
};

module.exports = PolygonModel;