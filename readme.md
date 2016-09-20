# React Component examples

This project helps setup and build common functionalities that are often used with JQuery but build using React. This project have its individual components in seperate files so its easier to read and understand.

It can also serve as a guide if you are looking to get familiar to React. 
	
## Installation
This project has [Node.js](https://nodejs.org/) as a core dependency. Please visit their [website](https://nodejs.org/) for information on installation. 

[NPM](https://www.npmjs.com/) and [Webpack](https://webpack.github.io/) have been used for package management where appropriate. 

	$ git clone git@github.com/ksidedev/react-components.git
	$ cd to the cloned file
	$ npm install
	$ npm install webpack-dev-server -g
	$ npm start

Go to your browser and open your localhost and navigate to `/public` folder.

For example: 
`http://localhost:8082/public/`

## Project layout

*	`gulp` contains all the task and build tooling
*	`lib` contains all source code
	*  	 `images` all public images
	* 	`js` all front end js source
	* 	`css` all css files
*	`public` is the web root directory where files are served over http
	* 	all content in this directory should be generated via build tasks
	* 	content in here is permanently destroyed periodically

## Contributing

*	Details on contributing [can be found here](CONTRIBUTING.md)

Copyright © 2015  [Ksidedev](http://ksidedev.com/) 