import React from 'react';
import App from './components/app';

var items = [
  {
    "id": 1,
    "img": "http://lorempixel.com/400/200/sports",
    "title": "Item 1",
    "price": 250
  }, {
    "id": 2,
    "img": "http://lorempixel.com/400/200/sports",
    "title": "Item 2",
    "price": 1000
  }, {
    "id": 3,
    "img": "http://lorempixel.com/400/200/sports",
    "title": "Item 3",
    "price": 500
  }, {
    "id": 4,
    "img": "http://lorempixel.com/400/200/sports",
    "title": "Item 4",
    "price": 700
  }, {
    "id": 5,
    "img": "http://lorempixel.com/400/200/sports",
    "title": "Item 5",
    "price": 1500
  }
];

main();

function main() {
  React.render(<App items={items}></App>, document.body);
}
