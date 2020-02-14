import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const [hidden, setHidden] = useState(true);



function App() {

  return (
    <div className="App">
      <title>Twitter Sentiment analysis </title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome  text= " ---- "/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <p>This should show/hide{toggle}</p>
          <button onClick={toggle}>Show / Hide </button>
      </header>
    </div>
  );

}
class Welcome extends Component {
    render() {
        const { text } = this.props;
        return(
            <h1 className="App-title">{text}</h1>
        )
    }
}
export default App;
