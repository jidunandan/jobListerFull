const mysql = require('mysql2/promise');
const config = require('../config');

/**common fn */
async function query(sql: String, params: Object) {
    const connection = await mysql.createConnection(config.SQLDB);
    const [results,] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}

export { }