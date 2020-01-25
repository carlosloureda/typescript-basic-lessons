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
        tsc fetchjsons.ts
        // It generates a fetchjsons.js

    - Now add some errors and learn how to catch the errors
*/
import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

// Interface describes the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const { id, title, completed } = response.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of ${title}
    Is it finished?: ${completed}
  `);
};
