import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import groceryList from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "Frozen Pizza"},
        {id: 2, quantity: 10, description: "Greek Yogurt"},
        {id: 3, quantity: 2, description: "wine"}]
    }
  }

  onClick(desc, quantity){
    console.log(desc, quantity);
    var newList = this.state.list.concat({id:4, quantity: quantity, description: desc});
    this.setState({
      list: newList
    }, () => this.refs.AddGrocery.resetDefault())
  }

  render () {
    return (<div>
      <h3>Grocery List</h3>
      <AddGrocery ref="AddGrocery" list={this.state.list} onClick={this.onClick.bind(this)}/>
      <GroceryList  list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
