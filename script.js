// import {user} from './data.js';
// importing react library from the node modules
// import React from 'react';
// console.log(React);
// console.log(user);
import {createRoot} from "react-dom/client";

console.log('Namaste React');
// for hot reloading
// hmr => Hot Module Replacement.
if(module.hot) {
    module.hot.accept();
}
// Parcel behind the scenes is also using babel which is nothing but a Javascript compiler.
// we can write JSX as well
const h1 = <h1>Hello Keshav!</h1>

const root = createRoot(document.getElementById('root'));

root.render(h1);
console.log('Hello World !!!!');
