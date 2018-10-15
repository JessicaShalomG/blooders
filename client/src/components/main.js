import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      address: undefined,
      phone: undefined,
      registered:undefined
    }
this.getInfo =this.getInfo.bind(this);
  }

    getInfo(){
    fetch (`https://api.blooders.org/V3.0/hospital/schedule/public?date=2018-10-14&idState=19`)
    .then(results=>{
      return results.json();

    }).then(data => {
      console.log("this is data", data);
      this.setState({
        name: data.data[0].hospital.name,
        address: data.data[0].hospital.address,
        phone: data.data[0].hospital.phone,
        registered:data.data[0].hospital.registered
      })
console.log(this.state)
    })

    }
    componentDidMount(){
    this.getInfo();
  }
  render () {
    return(
      <div>
        name= {this.state.name}
        address= {this.state.address}
        phone= {this.state.phone}


      </div>
    );
  }
}
export default Main;
