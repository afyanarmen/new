import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.state = {
    value: ""
  }};
  click =(e)=>{
this.setState((state) => ({ value: state.value }));
this.setState({
       value:   `${this.state.value}${e.target.value}`

    });
  }
  vclick =(e)=>{
    this.setState({value: eval(this.state.value)});
  }
  cclick =(e)=>{
    this.setState({value: ''});
  }
 


  render() {
 

    return (
  <div>
  <input type = "text" value ={this.state.value} disabled></input>
<p>
<button value = {1} onClick={this.click}>1</button>
<button value = {2} onClick={this.click}>2</button>
<button value = {3} onClick={this.click}>3</button>
</p>
<p>
<button value = {4} onClick={this.click}>4</button>
<button value = {5} onClick={this.click}>5</button>
<button value = {6} onClick={this.click}>6</button>
</p>
<p>
<button value = {7} onClick={this.click}>7</button>
<button value = {8} onClick={this.click}>8</button>
<button value = {9} onClick={this.click}>9</button>
</p>
<p>
<button className="big" value = {0} onClick={this.click}>0</button>
<button value ="Remove" type = 'submit' onClick ={this.cclick}>Del</button>
</p>
<p className="big" >
<button value = '-' onClick={this.click}>-</button>
<button value = '+' onClick={this.click}>+</button>
<button value = '*' onClick={this.click}>*</button>
<button value = '/' onClick={this.click}>/</button>
<button value ="=" onClick ={this.vclick}>=</button>
</p>

</div>   );

  }
}

export default App;
