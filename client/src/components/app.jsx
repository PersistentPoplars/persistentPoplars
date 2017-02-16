import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>ANONYMIZE</h1>
        {this.props.children}
      </div>
    );
  }
}






module.exports = App;