import React from 'react';
import ReactDOM from 'react-dom';
import Title from "./components/titulo.js";
import PersonPic from "./components/descriptions/desc3.js";
import BagPic from "./components/descriptions/desc1.js";
import MexicoPic from "./components/descriptions/desc2.js";
import Main from "./components/main";
import Footer from "./components/footer.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
    <div>

      <Title />


          <div className="bloodbag">

          <BagPic />
          </div>
          <div className="map">
          <center><MexicoPic /></center>
          </div>
          <div className="donadores">
          <center><PersonPic /></center>
          </div>
          
          <Main />
          <Footer />


    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
