'use strict';

var logger = require('winston');
var app = require.main.exports;
var commands = app.commands;

function init(bot) {
    logger.debug("init role module");

    // load the commands
    try {
         commands.load(__dirname);
    } catch (err) {
        logger.error("failed whilst loading role commands: ", err);
    }

    return Promise.resolve();
}

module.exports.init = init;