const config = {
    user: 'sa',//nikko
    password: 'Aim123$M',//process.env.DB_PASSWORD,
    server: '192.168.9.17',//process.env.DB_SERVER,
    database: 'globalProd_12312022', //process.env.DB_NAME,
    port: 1433,
    dialect: "mssql",
    connectionTimeout: 100000000, //Under Remote server connections, in the Remote query timeout box, type or select a value from 0 through 2,147,483,647 to set the maximum number seconds for SQL Server to wait before timing out
    options: {
        encrypt: false,
        trustServerCertificate: true,
        },
    dialectOptions: {
        instanceName: "SQLEXPRESS"    
    }
}

module.exports = config;