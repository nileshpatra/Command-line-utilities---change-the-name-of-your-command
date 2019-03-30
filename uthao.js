#!/usr/bin/env node
// wget command
const fs = require('fs-extra');
const chalk = require('chalk');
const exec = require('child_process').exec; 

if(process.argv.length != 3){
	console.log(chalk.red('type correct command!'));
	return;
}
else{ 
	  let command = 'wget ' + process.argv[2];
	  exec(command,function(err,stdout,stderr){
	  	if(err){
	  		console.log(chalk.red(err));
	  	}
		console.log(chalk.green('File Download successful'));
		
	}); 
}  	

