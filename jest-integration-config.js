/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node/register')
const config = require('./jest.config.ts')
config.testMatch = ['**/*.test.ts']
module.exports = config
