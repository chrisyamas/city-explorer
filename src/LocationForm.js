import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      lat: '',
      lon: '',
      mapUrl: '',
      error: false,
      errorMessage: ''
    }
  };

  handleLocationQuery = async (e) => {
    e.preventDefault();
    try {
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.locationQuery}&format=json`);

      this.setState ({
        locationData: locationData.data
      });
    } catch (error) {
      console.log('error', error);
      console.log('error.response', error.response);
      this.setState ({
        error: true,
        errorMessage: `An error has occurred with this search: ${error.response.status}`
      });
    }
  };

  handleMapData = async (e) => {
    e.preventDefault();
    try {
      let mapData = `https://maps.locationiq.com/v3/staticmapkey=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.locationData[0].lat},${this.state.locationData[0].lon}&zoom=16`

      this.setState ({
        mapUrl: this.mapData
      });
    } catch (error) {
      console.log('error', error);
      console.log('error.response', error.response);
      this.setState ({
        error: true,
        errorMessage: `An error has occurred with this search: ${error.response.status}`
      })
    }
  };

  render() {

    console.log(this.state)
    let locationOutput = this.state.locationData.map((value, idx) =>
    <article key={idx}>
      <h1>{value.display_name}</h1>
      <h2>Latitude of ${value.lat}, Longitude of ${value.lon}</h2>
      <Button onClick={this.handleMapData}>Location Map</Button>
      <img src={this.state.mapUrl} alt={value.display_name}/>
    </article>
    )
    return (
      <>

        <Form>
          <Form.Group>
            <Form.Label>Enter name of a U.S. city:</Form.Label>
            <Form.Control
              type="text" 
              onChange={(e) =>
                this.setState ({
                  locationQuery: e.target.value
                })}
              placeholder="ex. Chicago"
            />
            <Button onClick={this.handleLocationQuery}>Explore!</Button>
          </Form.Group>
        </Form>

        {locationOutput[0]}

      </>
    )
  }
};

export default LocationForm;