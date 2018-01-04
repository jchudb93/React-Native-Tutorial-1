
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
  title: 'Tell mee the truth without words',
  url:'http://kaloraat.com',
  author:'Ryan',
  num_comments: 100,
  points: 50,
  objectID: 1
},

{
  title: 'Oh no',
  url:'http://kaloraat.com',
  author:'Ninja',
  num_comments: 100,
  points: 50,
  objectID: 2
},

{
  title: 'Oh no',
  url:'http://kaloraat.com',
  author:'Clint',
  num_comments: 100,
  points: 50,
  objectID: 3
}
]


class App extends Component {
  render() {
    return (
      <div className="App">{
         list.map(function(item){
           return(
           <div key={item.objectID}>
              <h1> {item.title}</h1>
              <p>{item.author}</p>
           </div>)
         })
       }
      </div>
    );
  }
}

export default App;
