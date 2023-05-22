require('dotenv').config();
const cli = require('next/dist/cli/next-dev');

cli.nextDev(['-p', process.env.PORT || 8080]);
