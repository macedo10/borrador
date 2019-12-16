const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('home');
		res.send(html);
	},

	pruebas: (req, res) => {
		let html = readHTML('pruebas');
		res.send(html);
	}
};

module.exports = controller
