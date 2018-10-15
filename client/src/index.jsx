import React from 'react';
import ReactDOM from 'react-dom';
import Title from "./components/titulo.js";
import PersonPic from "./components/desc1.js";
import BagPic from "./components/desc2.js";
import MexicoPic from "./components/desc3.js";
import Main from "./components/main";
import Footer from "./components/footer.js"

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
      <BagPic />
      <MexicoPic />
      <PersonPic />
      <Main />
      <Footer />

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
