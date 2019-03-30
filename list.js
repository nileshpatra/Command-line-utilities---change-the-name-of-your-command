#!/usr/bin/env node
// utility of '''ls''' command
const fs = require('fs-extra');
const chalk = require('chalk');

if(process.argv.length != 2){
	console.log(chalk.red('type correct command!'));
	return;
}
else{
  fs.readdir(process.cwd(), (err, files) => {
  files.forEach(file => {
    console.log(chalk.green(file));
  });
})
}