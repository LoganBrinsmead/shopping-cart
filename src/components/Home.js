import React, { Component } from 'react';

class Home extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>The dog store.</h1>
        <h3>Get cute dogs shipped straight to your door!</h3>
        <div className="items">
          
        </div>
        <p>{ this.props.thing }</p>
      </div>
    );
  }

}

export default Home;