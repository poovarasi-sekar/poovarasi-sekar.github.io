import React, { Component } from 'react';
import './First.css';

class First extends Component {
  state ={
    celcius:0,
    fahrenheit:0,
  }
  conversionhandler = (e) =>{
    console.log('clicked',e.target.value);
    let celcius = e.target.value;
    let fahrenheit = (celcius * 9/5) + 32;
   this.setState({
     celcius: celcius,
     fahrenheit: fahrenheit
    })
  }
  render() {
    return (
      <div className="First">
      <h1>conversion app</h1>
      <h3>celsius to fahrenheit</h3>
      <label htmlFor="celcius" >celcius</label>
      <input name="celcius" value={this.state.celcius} type='text' onChange={(e) => this.conversionhandler(e)}></input>
      <label htmlFor=" fahrenheit">fahrenheit</label>
      <input name=" fahrenheit" value={this.state.fahrenheit}></input>
      </div>
    )
      }
    }
  
      
      
    
    
export default First;
