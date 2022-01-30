export default {
  DB: {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "root",
    PASSWORD: process.env.DB_PASSWORD || "mysql",
    NAME: process.env.DB_NAME || "node_mysql_ts",
  },
};
