var queue = require("../queue");

console.log(JSON.stringify({
  "name": "queue-async",
  "version": queue.version,
  "description": "A little helper for asynchronous JavaScript.",
  "keywords": [
    "asynchronous",
    "async",
    "queue"
  ],
  "author": {
    "name": "Mike Bostock",
    "url": "http://bost.ocks.org/mike"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mbostock/queue.git"
  },
  "main": "queue.js",
  "devDependencies": {
    "uglify-js": "~2.2.5",
    "vows": "~0.7.0"
  },
  "scripts": {
    "test": "node_modules/.bin/vows"
  }
}, null, 2));
