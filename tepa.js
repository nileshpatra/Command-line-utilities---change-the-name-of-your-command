#!/usr/bin/env node
// copy command
const fs = require('fs-extra');
const chalk = require('chalk');

if(process.argv.length != 4){
	console.log(chalk.red('type correct command!'));
	return;
}
else{
	fs.copy(process.argv[2], process.argv[3])
	.then(() => {
	  console.log(chalk.green('file copied!'));
	})
	.catch(err => {
	  console.error(err)
})
}