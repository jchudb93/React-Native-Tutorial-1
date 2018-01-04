
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list.js'

function isSearched(searchTerm){searchTerm
  return function(item){
    return !searchTerm || item.title.includes(searchTerm);
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: list
    }

    //bind the method*
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }

  // removeItem(id){
  //   console.log("Remove Item");
  //   function isNotId(item){
  //     return item.objectID !== id;
  //   }
  //
  //   const updatedList = this.state.list.filter(isNotId);
  //   this.setState({ list: updatedList});
  // }
  removeItem(id){
    //const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  searchValue(event){
    this.setState({searchTerm: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <form>
            <input type="text" onChange={ this.searchValue  }/>
        </form>
        {
         this.state.list.filter( isSearched(this.state.searchTerm)).map((item) =>
           <div key={item.objectID}>
              <h1> {item.title}</h1>
              <h4> {item.num_comments}</h4>
              <button type="button" onClick = { () => this.removeItem(item.objectID)}>Remove</button>
              <p>{item.author}</p>
           </div>
         )
       }
      </div>
    );
  }
}

export default App;
