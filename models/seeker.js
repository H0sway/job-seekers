// Import the db
const db = require('../db/config');

const Seeker = {};

// Return a single seeker
Seeker.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM seekers
    WHERE username = $1
  `, [userName]);
};

// Create a new seeker
Seeker.create = user => {
  return db.one(`
    INSERT INTO seekers
    (first_name, last_name, username, email, phone, password_digest)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [seeker.username, seeker.first_name, seeker.last_name, seeker.email, seeker.phone, seeker.password_digest]);
};

module.exports = Seeker;
