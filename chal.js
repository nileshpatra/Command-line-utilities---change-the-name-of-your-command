#!/usr/bin/env node

//js utility for moving a file from one location to another
const fs = require('fs-extra');
const chalk = require('chalk');

if(process.argv.length != 4){
	console.log(chalk.red('type correct command!'));
	return;
}

else{
	let src = process.argv[2];
	let dest = process.argv[3];
	fs.move(src , dest).then(()=>{
		console.log(chalk.green('moved file successfully'));
	})
	.catch(err => {
		console.log(chalk.red(err));
	})
}