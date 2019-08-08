import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'supertony'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
   render() {
    return (
      <div className="App">
         <UserInput
          changed={this.usernameChangeHandler} 
         currentName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName="Max"/>
         <UserOutput userName="Max"/>
      </div>
     
 
      );
  }

}

export default App;




