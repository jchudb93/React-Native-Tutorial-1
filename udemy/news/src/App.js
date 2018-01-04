import React, {Component} from 'react';
import logo from './logo.svg';
import list from './list.js'
import {Grid, Row, FormGroup} from 'react-bootstrap'

function isSearched(searchTerm) {
  return function(item) {
    return !searchTerm || item.title.includes(searchTerm);
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    }
    //bind the method*
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }

  removeItem(id) {
    //const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  searchValue(event) {
    this.setState({searchTerm: event.target.value})
  }
  render() {
    const {list, searchTerm} = this.state;
    return (<div className="App">

      <Grid fluid="fluid">
        <Row>
          <div className="jumbotron text-center">
            <Search onChange={this.searchValue} value={searchTerm}>
              NEWS APP
            </Search>
          </div>
        </Row>

      </Grid>
      <Table list={list} searchTerm={searchTerm} removeItem={this.removeItem}/>
    </div>);
  }
}

const Search = ({onChange, value, children}) => {
  return (
    <form>
    <FormGroup>
      <h1 style={{fontWeight: 'bold'}}>{children}</h1><hr style = {{border: '2px  solid black', width: '100px'}}/>

      <div className="input-group">

      <input
       className="form-control width100 searchForm"
       type="text"
       onChange={onChange}
       value={value}/>
      <span className="input-group-btn">
        <button
        className="btn btn-primary searchBtn"
        type = "submit"
        >
        Search
        </button>
      </span>
      </div>
    </FormGroup>
    </form>
  )
}

const Table = ({list, searchTerm, removeItem}) => {
  return (
    <div className="col-sm-10 col-sm-offset-1">
    {
      list.filter(isSearched(searchTerm)).map((item) => <div key={item.objectID}>
        <h1>
          <a>{item.title}</a> by {item.author}</h1>
        <h4>
          {item.num_comments} | { item.points } Points
          <Button type="button" onClick={ () => removeItem(item.objectID) } className = "btn btn-danger btn-xs">
            Remove Item
          </Button>
        </h4>
        <hr/>
      </div>)
    }
  </div>)
}

const Button = ({onClick, children, className}) => {
  return (
    <button
    className = {className}
    onClick={onClick}
    >
    {children}
    </button>
  )
}
export default App;

// class Search extends Component{
//   render(){
//     const {onChange, value,children} = this.props
//     return(
//       <form>
//           {children}
//           <input
//           type="text"
//           onChange={ onChange }
//           value = { value }
//           />
//       </form>
//     )
//   }
// }

//
// class Table extends Component{
//   render (){
//     const {list, searchTerm, removeItem} = this.props
//     return(
//       <div>
//       {
//        list.filter( isSearched(searchTerm)).map((item) =>
//          <div key={item.objectID}>
//             <h1> {item.title}</h1>
//             <h4> {item.num_comments}</h4>
//             <Button
//             type = "button"
//             onClick = { () => removeItem(item.objectID) }>
//             Remove Item
//             </Button>
//             <p>{item.author}</p>
//          </div>
//         )
//       }
//       </div>
//     )
//   }
// }

// class Button extends Component{
//   render(){
//     const {type, onClick, children} = this.props;
//     return(
//       <button onClick = { onClick } >{ children }</button>
//     )
//
//   }
// }

// function Button ({onClick, children}){
//   return(
//     <button onClick = { onClick } >{ children }</button>
//   )
// }
