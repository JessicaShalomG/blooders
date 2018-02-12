import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render () {
    return (<div>
      <h1>Grocery List</h1>
      <AddGrocery />
      <GroceryList />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));