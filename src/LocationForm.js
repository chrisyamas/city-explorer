import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      queryLoc: '',
    };
  };
  inputLoc=() => {
    this.props.getLocData(this.state.queryLoc);
  };

  render () {

    return(
      <>
        <Form>
          <Form.Group>
            <Form.Label>Enter name of U.S. City:</Form.Label>
            <Form.Control
            onChange={(loc) => this.setState({queryLoc: loc.target.value})}
            type="text"
            placeholder="i.e. Chicago"
            />
            <Button
            onClick={this.inputLoc}
            >Explore!</Button>
          </Form.Group>
        </Form>
      </>
    );
  };
};

export default LocationForm;