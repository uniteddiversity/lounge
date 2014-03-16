var argv = require("commander")
	.option("-p, --port <n>", "port to use", parseInt)
	.parse(process.argv);

PORT = 80; // Default port
if (argv.port) {
	PORT = argv.port;
}

var server =
	new (require("./lib/server.js"))()
		.listen(PORT);