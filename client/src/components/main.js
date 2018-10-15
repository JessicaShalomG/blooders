import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      address: undefined,
      phone: undefined,
      storage:undefined

    }
this.getInfo =this.getInfo.bind(this);
  }

    getInfo(){
    fetch (`https://api.blooders.org/V3.0/hospital/schedule/public?date=2018-10-14&idState=19`)
    .then(results=>{
      return results.json();

    }).then(data => {

      data.data.map((x)=>{
        let hospitals=[];
        if (x.hospital.registered === 1){
          hospitals.push(x.hospital)
          console.log(hospitals)
          console.log(typeof hospitals);

          this.setState({
            name: data.data[0].hospital.name,
            address: data.data[0].hospital.address,
            phone: data.data[0].hospital.phone,
            storage:hospitals
          })
        }
      })

    })

    }
    componentDidMount(){
    this.getInfo();
  }
  render () {
    return(
      <div className="container">
      <img className="pic" src="https://i.imgur.com/ysEtsRZ.jpg" alt="Snow"/>
      <div className="bottom-left">
         {this.state.name}
         <br/>
         {this.state.address}
         <br/>
         {this.state.phone}


      </div>
      </div>
    );
  }
}
export default Main;
