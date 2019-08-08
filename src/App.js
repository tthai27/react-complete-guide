import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    username: 'supertony',
    userInput: ''
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

    inputChangedHandler = (event) => {
      this.setState({userInput: event.target.value});
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index , 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }

   render() {
     const charList = this.state.userInput.split('').map((ch, index) => {
       return <Char character={ch} key={index}
        clicked={() => this.deleteCharHandler(index)}/>;
     });
    return (
      <div className="App">
        <h2>Section 3</h2>
         <UserInput
          changed={this.usernameChangeHandler} 
         currentName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName="Max"/>
         <UserOutput userName="Max"/>
        <hr/>

          <h2>Section 4</h2>
         <input type="text" onChange={this.inputChangedHandler} 
         value={this.state.userInput} />
         <p>{this.state.userInput}</p>
         <Validation inputLength={this.state.userInput.length}/>
         {charList}
      </div>
     
 
      );
  }

}

export default App;




