import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// let vs var 
// vars depend on the this that you're within
// let depends on the enclosure that it's within
// for( var a) will exist in the same context, lifecycle of the application
// for( let a) will only exist in the for

// const does not change
// but content inside the const can change

// React expects only one root element

// esomorphic code: create the minimal code in each file
// const component = ;



ReactDOM.render(<App />, document.getElementById('react'));