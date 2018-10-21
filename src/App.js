import React, { Component } from 'react';
import './App.css';
import PaperBanner from "./components/paper-banner";
import HomeAppBar from "./components/app-bar";
import IntegrationReactSelect from "./components/restaurant-select";


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeAppBar/>

        {/*TODO put in grid*/}
        <div>
          <IntegrationReactSelect/>
          <PaperBanner/>
        </div>
      </div>
    );
  }
}

export default App;
