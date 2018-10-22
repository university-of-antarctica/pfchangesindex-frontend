import React, { Component } from 'react';
import './App.css';
// import PaperBanner from "./components/paper-banner";
import HomeAppBar from "./components/app-bar";
import IntegrationReactSelect from "./components/restaurant-select";
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import SubmitButton from "./components/submit-button";
import LinearScore from "./components/score-bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeAppBar/>

        {/*TODO bundle this up*/}
        <div className="country-select">
          <Grid container justify="center">
            <Grid item xs={5} >
              <IntegrationReactSelect/>
            </Grid>
            <Grid item xs={2}>
              <SubmitButton/>
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid container justify="center">
            <Grid item xs={5}>
              <LinearScore/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
