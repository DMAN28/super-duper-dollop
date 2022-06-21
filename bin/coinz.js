#!/usr/bin/env node 

//***  ***\\\
const program = require('commander')
const pkg = require('../package.json')

program 
 .version('1.0.0')
 .command('key', 'Manage API Key --https://nomics.com')
 .command('check', 'Check coin price')
 .parse(process.argv);

//console.log('hello crypto fam')

