import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //constructor automactically called
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);//reference to parent component because over writing
    this.state = { lat: null };//null don't know yet what number is

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);