
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list.js'

function isSearched(searchTerm){
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

  removeItem(id){
    //const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  searchValue(event){
    this.setState({searchTerm: event.target.value})
  }
  render() {
    const {list, searchTerm} = this.state;
    return (
      <div className="App">
        <Search
        onChange={ this.searchValue }
        value = { searchTerm }
        >
        Search here
        </Search>

        <Table
        list = { list }
        searchTerm = { searchTerm }
        removeItem = { this.removeItem }
        />

      </div>
    );
  }
}

class Search extends Component{
  render(){
    const {onChange, value,children} = this.props
    return(
      <form>
          {children}
          <input
          type="text"
          onChange={ onChange }
          value = { value }
          />
      </form>
    )
  }
}

class Table extends Component{
  render (){
    const {list, searchTerm, removeItem} = this.props
    return(
      <div>
      {
       list.filter( isSearched(searchTerm)).map((item) =>
         <div key={item.objectID}>
            <h1> {item.title}</h1>
            <h4> {item.num_comments}</h4>
            <Button
            type = "button"
            onClick = { () => this.removeItem(item.objectID) }>
            Remove Item
            </Button>
            <p>{item.author}</p>
         </div>
        )
      }
      </div>
    )
  }
}

class Button extends Component{
  render(){
    const {type, onClick, children} = this.props;
    return(
      <button onClick = { onClick } >{ children }</button>
    )

  }
}
export default App;
