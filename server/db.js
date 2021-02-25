const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/vintage-boards"
);

module.exports.addSubscriber = (email) => {
    return db.query(`INSERT INTO subscribers (email) VALUES ($1) RETURNING *`, [
        email,
    ]);
};

module.exports.getProducts = () => {
    return db.query(`SELECT id, fields FROM products`);
};

module.exports.getSingleProduct = (id) => {
    return db.query(
        `SELECT id, fields 
        FROM products
        WHERE id = $1`,
        [id]
    );
};
