import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //constructor called optionallly and automactically first if you want to use it
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);//reference to parent component because over writing
    this.state = { lat: null, errorMessage: '' };//null don't know yet what number is

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }
    
    if (!this.state.errorMessage && this.state.lat){
      return <div> Latitude: {this.state.lat} </div>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);