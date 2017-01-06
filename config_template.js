'use strict';

module.exports = {

    discord: {
        token: "DISCORD_TOKEN",
        adminRole: "Modteam",
        defaultServer: "",
        pm: false
    },
    modules: {
        db : {
            // Update url with actual mongo connection string. 
            url: "mongodb://localhost:27017/des",
            // all options are optional
            /*options: { 
                uri_decode_auth: ""
                db: "",
                server: "",
                replSet: "",
                promiseLibrary: ""
            }*/
        },
        role : {
            collection: "roles"
        },
        welcome: {},
        util : {},
        gamer: {
            collection: "gamers"
        }
    },
    commandPrefix: "d!",
    appDir: "",
    language: "en"
};
