"use strict";
exports.__esModule = true;
/*
    fetchjsons.ts
    Make a network request to fetch some JSON and print the result
    on the terminal.

    - Requirements: have installed typescript and  ts-node:

        npm install -g typescript ts-node

    - Utilities:
        jsonplaceholder.typicode.com # json extension for prettyfi

    - Steps:
        - create new folder
        - $> npm init -y
        - $> npm install --save axios

    - How to run it?
        - Compile with:
           $> tsc fetchjsons.ts
        - Run with
           $> node fetchjsons.js

    - How to run it quickly?
        $> ts-node fetchjsons.js
*/
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function(response) {
  //   console.log(response.data);
  const todo = response.data;
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;
});
