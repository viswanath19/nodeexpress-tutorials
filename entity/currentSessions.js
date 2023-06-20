var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "CurrentSessions", // Will use table name `category` as default behaviour.
    columns: {
        userId: {
            primary: true,
            type: "int",
            generated: true,
        },
        isLoggedIn: {
            type: "boolean"
        },
        datetimeAuthenticated: {
            type: 'timestamp'
        }
    },
});