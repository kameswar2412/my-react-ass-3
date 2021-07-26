import React, { Component } from 'react';
import axios from 'axios';
import Card from './Cards/card';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = { 
          Data:[],
     }
  }
  componentDidMount() {

    axios.get("https://api.edyoda.com/v1/blog/")
    .then((res)=>{
      this.setState({ Data:res.data });
    })
    
  }

  render() { 
    return ( 
    <div className="d-flex flex-wrap">
      {this.state.Data.map((item,index)=>(<Card {...item} key={index} />))}  
    </div> );
  }
}
 
export default App;