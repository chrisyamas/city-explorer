import React from 'react';
import Card from 'react-bootstrap/Card';



class LocationDisplay extends React.Component{

  render () {
    let mapURL=`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.loc.lat},${this.props.loc.lon}&zoom=15`;

    return(
      <>
      <Card>
        <Card.Title>{this.props.loc.display_name}</Card.Title>
        <Card.Body>
          <Card.Text>Latitude & Longitude: {this.props.loc.lat}, {this.props.loc.lon}
          </Card.Text>
        </Card.Body>
        <Card.Img src={mapURL}/>
      </Card>
      </>
    );
  };
};

export default LocationDisplay;