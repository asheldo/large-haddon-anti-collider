# Large Haddon Anti-Collider
A starter Node.js restify api, with ability to digest:
 * WFAS and 
 * WIMS 
data from their web services (eventually).

## Requirements
Requires ES6 compatible [node.js installation](https://nodejs.org/en/download/package-manager/#windows), [v6.5 or later](https://kangax.github.io/compat-table/es6/#node65).

E.g., for Windows / chocolatey: `choco install nodejs`

## Download and run project

After you clone it... 

To install restify and dependencies locally:

`cd large-h...`

`npm link` or `npm install`

`node index.js`

> ... Server listening, port: 3000 `

## Run unit tests (second terminal/console):

Install mocha test framework locally:

`npm install mocha`

`npm test`

> mocha `./*/*.spec.js`

> ... 15 tests passed ...

## Person/Place API - CRUD endpoints

### Examples 
Create a Person:

`curl --data "name=bob" http://localhost:4000/person`

Return existing Person by id:

`curl http://localhost:4000/person/1`

> {"id":1,"name":"bob"}

Create a Place:

`curl --data "name=b&latitude=1&longitude=1" http://localhost:4000/place`

Return existing Place by id:

`curl http://localhost:4000/place/1`

> {"id":1,"name":"b","latitude":"1","longitude":"1"}

Associate a Place with a Person (i.e. visit), by id's:

`curl -X POST http://localhost:4000/person/1/place/1`

> {"person_id":1,"place_id":1}

Return Places visited by Person with id=1:

`curl http://localhost:4000/person/1/place`

> [{"id":1,"name":"b","latitude":"1","longitude":"1"}]
