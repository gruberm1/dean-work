var Handlers = require('./handlers');

var Routes = [{
	path: '/',
	method: 'GET',
	handler: {
		file: 'templates/home.html'
	},
	config: {
		auth: false
	}
},
{
	path: '/assets/{path*}',
	method: 'GET',
	handler: {
		directory: {
			path: './public',
			listing: false
		}
	},
	config: {
		auth: false
	}
},
{
	path: '/training',
	method: 'GET',
	handler: {
		file: 'templates/training.html'
	},
	config: {
		auth: false
	}
},
{
	path: '/nutrition',
	method: 'GET',
	handler: {
		file: 'templates/nutrition.html'
	},
	config: {
		auth: false
	}
},
{
	path: '/contact',
	method: ['GET','POST'],
	handler: Handlers.contactHandler
},
{
	path: '/sent',
	method: 'GET',
	handler: {
		file: 'templates/sent.html'
	}
},
{
	path: '/bodyCalibration',
	method: 'GET',
	handler: {
		file: 'templates/bodyCalibration.html'
	}
}];

module.exports = Routes;
