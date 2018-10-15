import React from "react";
import Cards from "./card.js";
//import ScheduleList from "./schedule/scheduleList.js"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      address: undefined,
      phone: undefined,
      cards:[],
      schedules1:[],
      schedules2:[],
      schedules3:[],
      schedules4:[]

    }
this.getInfo =this.getInfo.bind(this);
this.getTimes =this.getTimes.bind(this);
  }

    getInfo(){
      let hospitals=[];
    fetch (`https://api.blooders.org/V3.0/hospital/schedule/public?date=2018-10-14&idState=19`)
    .then(results=>{
      return results.json();

    }).then(data => {
      data.data.map((x)=>{

        if (x.hospital.registered === 1){
          hospitals.push(x.hospital)

          this.setState({
            name: data.data[0].hospital.name,
            address: data.data[0].hospital.address,
            phone: data.data[0].hospital.phone,
            cards: hospitals
          })
        }
      })
    })
  };
  getTimes(){
    let tiempos=[];
    let one =undefined;
    let two =undefined;
    let three=undefined;
    let four=undefined;
  fetch (`https://api.blooders.org/V3.0/hospital/schedule/public?date=2018-10-14&idState=19`)
  .then(results=>{
    return results.json();

  }).then(data => {
    data.data.map((x)=>{

      if (x.hospital.registered === 1){
        x.schedule.map((i)=>{

          tiempos.push(i.time)

          one=tiempos.slice(0,14)
          two=tiempos.slice(15,37)
          three=tiempos.slice(38,50)
          four=tiempos.slice(51)
        })
        this.setState({
          schedules1:one,
          schedules2:two,
          schedules3:three,
          schedules4:four
        })
      }
    })
  })
};
    componentDidMount(){
    this.getInfo();
    this.getTimes();
  }
  render () {
    return(
      <div>
       <Cards cards={this.state.cards}/>
       Ginequito:
        {this.state.schedules1}<br/><br/>
       Hospital San Jose Tec de Monterrey:
        {this.state.schedules2}<br/><br/>
       Hospital Zambrano Hellion:
        {this.state.schedules3}<br/><br/>
       Hospital Roble:
        {this.state.schedules4}

      </div>



    );
  }
}
export default Main;
