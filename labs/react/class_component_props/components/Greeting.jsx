import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{ this.props.greeting } { this.props.firstName } { this.props.lastName }</h1>
    )
  }
}

export default Greeting;