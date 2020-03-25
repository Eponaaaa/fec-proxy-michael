import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';

//import components
import Carousel from './Carousel.jsx';
import Ashby from './Ashby.jsx';
import Melvin from './Melvin.jsx';
import Mary from './Mary.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="everything">

        <Carosusel />
        <Ashby />
        <Melvin />
        <Mary />

      </div>
    );
  }
}

export default App;