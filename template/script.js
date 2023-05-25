#!/usr/bin/env node
const fs = require('fs');
const execSync = require('child_process').execSync;

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', {stdio: 'inherit'});

  // Create a directory
  console.log('Creating a directory...');
  const comPath = './src/components';
  const imgPath = './src/assets/images';
  if (!fs.existsSync(comPath)) {
    fs.mkdirSync(comPath, {recursive: true});
  }

  if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(imgPath, {recursive: true});
  }

  // Initialize a Git repository
  console.log('Initializing a Git repository...');
  execSync('git init', {stdio: 'inherit'});

  // Make the first commit
  console.log('Making the first commit...');
  execSync('git add .', {stdio: 'inherit'});
  execSync(
    'git commit -m "Initial commit from template https://bootstrapyour.app"',
    {stdio: 'inherit'},
  );

  console.log("Setup is complete. You're ready to start developing!");
} catch (err) {
  console.error('Error during setup: ', err);
}
