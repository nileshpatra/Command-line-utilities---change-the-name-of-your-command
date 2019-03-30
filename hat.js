#!/usr/bin/env node
// remove file
const fs = require('fs-extra');
const chalk = require('chalk');

if(process.argv.length != 3){
	console.log(chalk.red('type correct command!'));
	return;
}
else{
	fs.remove(process.argv[2])
	.then(() => {
	  console.log(chalk.green('file removed'));
	})
	.catch(err => {
	  console.error(err)
})
}