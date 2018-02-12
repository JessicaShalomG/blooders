import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: ''
    }
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleDescription(event){
    this.setState({
      description: event.target.value
    })
  }

  handleQuantity(event){
    this.setState({
      quantity: event.target.value
    })
  }

  addItem(){
    this.props.addGroceryItem(this.state.description, this.state.quantity);
    this.setState({
      description: '',
      quantity: ''
    })
  }

  render () {
    return (<div>
      Description: <input value={this.state.description} onChange={this.handleDescription}></input>
      <br />
      Quantity: <input value={this.state.quantity} onChange={this.handleQuantity}></input>
                                                                                                                
    <button onClick={this.addItem}>Add Grocery</button>
    </div>);
  }
}

export default AddGrocery;
