import React from "react";
import { Component } from "react";

// class Welcome extends Component{
//     render(){
//         return <h1>Hello {this.props.name} whats up</h1>
//     }
// }

// Destructing props 

class Welcome extends Component {
  render() {
    const {name,heroname} = this.props
    return (
      <div>
        <h1>Hello {name} aka {heroname}</h1>
      </div>
    )
  }
}

export default Welcome