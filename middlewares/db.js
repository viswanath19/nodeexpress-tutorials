var typeorm = require("typeorm");

const dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "nodeexpresstutauth",
    synchronize: true,
    entities: [require("../entity/users"),require("../entity/currentSessions")],
});

dataSource.initialize().then(function() {
    console.log("Initialized");
}).catch(function (error) {
    console.log("Error: ", error)
});

export default dataSource;