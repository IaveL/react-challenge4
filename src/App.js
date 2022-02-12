import React, { Component } from "react";
import './App.css';

class App extends Component {

  message = () => {
    return <h1>Mensagem exibida a partir da função!</h1>
  }

  double = (x) => {
    return x*2
  }

  render(){
    return(
    <div>
      {this.message()}
      <h1>Função de dobro como núm. 9 de argumento: {this.double(9)}</h1>
    </div>
    )
  }
}

export default App;
