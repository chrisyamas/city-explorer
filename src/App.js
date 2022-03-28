import React from 'react';
import axios from 'axios';
import Header from './Header';
import LocationForm from './LocationForm';
import LocationDisplay from './LocationDisplay';
import AlertError from './AlertError';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      locationData: [],
      mapURL: '',
      error: false,
      displayModal: false,
      errorResponse: '',
    };
  };

  hideModal = () => {
    this.setState({
      displayModal: false,
    });
  };

  displayModal = () => {
    this.setState({
      displayModal: true,
    });
  };

  getLocData = async (loc) => {
    try {
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${loc}&format=json`);
      this.setState({
        locationData: locationData.data,
      });
      console.log(locationData);
    } catch (error) {
      this.setState({
        error: true,
        displayModal: true,
        errorResponse: `There has been an error: ${error.response.status} ${error.response.statusText}`
      });
    };
  };

  render() {

    let locDisplay= this.state.locationData.map((loc,idx) => {
      return (
        <LocationDisplay key={idx} location={loc}/>
      );
    });

    return (
      <>
        <Header/>
        <LocationForm getLocData={this.getLocData}/>
        <div id="location-display">{locDisplay}</div>
        <AlertError errorResponse={this.state.errorResponse} error={this.state.error} stateAlert={this.state.displayModal} displayModal={this.displayModal} hideModal={this.hideModal}/>
      </>
    );
  };
}

export default App;
