const { Sequelize } = require("sequelize");
const sc = new Sequelize(
    "postgres",
    "user_name",
    "mypassword",
    {
        host: "localhost",
        dialect: "postgres"
    }
)

sc.sync();

(async () => {
    try {
        await sc.authentication();
        console.log("Connected with database .");
    } catch (err) {
        console.error("Connection denied.")

    }
})();

module.exports = sc;