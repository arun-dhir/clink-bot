var fs = require('fs');

console.log("Initiating file generation process.");

if (!fs.existsSync('./config.json')) {
    fs.writeFile(
        './config.json',
        '{\n  "developerMode":false,\n  "prefix":"",\n  "token":"",\n'+
        '  "deleteCommands":true,\n  "deleteAfter":5000\n}',
        function (log) {
            console.log('+ "./config.json" was generated.');
        }
    );
}

if (!fs.existsSync('./disabled.json')) {
    fs.writeFile(
        './disabled.json',
        '{\n  "commandTypes":[],\n  "plugins":[]\n}',
        function (log) {
            console.log('+ "./disabled.json" was generated.');
        }
    );
}

if (!fs.existsSync('./permissions.json')) {
    fs.writeFile(
        './permissions.json',
        '{\n  "say":{\n    "channel-lock":[],\n    "roles":[],\n'+
        '    "ids":[],\n    "permissions":[]\n  }\n}',
        function (log) {
            console.log('+ "./permissions.json" was generated.');
        }
    );
}


if (!fs.existsSync('./plugins/customcmds/customcmds.json')) {
    fs.writeFile(
        './plugins/customcmds/customcmds.json',
        '[\n  {"command":"hello", "reply":true, "return":"hey there!"}\n]',
        function (log) {
            console.log('+ "./plugins/customcmds/customcmds.json" was generated.');
        }
    );
}

if (!fs.existsSync('./plugins/msgfilter/msgfilter.json')) {
    fs.writeFile(
        './plugins/msgfilter/msgfilter.json',
        '{\n  "general":{\n    "whitelist":[],\n    "blacklist":[]\n  }\n}',
        function (log) {
            console.log('+ "./plugins/msgfilter/msgfilter.json" was generated.');
        }
    );
}

if (!fs.existsSync('./plugins/welcome/welcome.json')) {
    fs.writeFile(
        './plugins/welcome/welcome.json',
        '{\n  "message":"",\n  "roles":[]\n}',
        function (log) {
            console.log('+ "./plugins/welcome/welcome.json" was generated.');
        }
    );
}

console.log("Process completed.");
