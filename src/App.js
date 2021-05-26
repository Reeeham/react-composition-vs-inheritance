import logo from './logo.svg';
import './App.css';
import React from 'react';


function FancyBorder(props){
  return(<div className={'FancyBorder FancyBorder-' + props.color}>
    {props.children}
  </div>)
}

//generic dialog
function Dialog(props) {
  return(<FancyBorder color="blue">
    <h1 className="Dialog-title">{props.title}</h1>
    <p className="Dialog-message">{props.message}</p>
  </FancyBorder>)
}

//more specific dialog like using inheritance but here we're using composition instead using props 
function WelcomeDialog() {
  return(
    <Dialog title="Welcome" 
             message="Thank you for visiting our spacecraft!" />
  );
}
// more specific dialog from our general dialog component but using component class
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}


function SplitPane(props) {
  return(<div className="SplitPane">
    <div className="SplitPane-left">
      {props.left}
    </div>
    <div className="SplitPane-right">
      {props.right}
    </div>
  </div>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SplitPane left={<WelcomeDialog/>} 
                  right={<WelcomeDialog/>}
                  />
        <SignUpDialog />
      </header>
    </div>
  );
}

export default App;
