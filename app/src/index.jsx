import React from "react";
import { render } from "react-dom";

class Child extends React.Component{
  render(){
    return <input type="text" onChange = {(e)=>this.props.handleChange(e.target.value)} />
  }
} 

class App extends React.Component {
  constructor(props){
  super(props);
    this.state={
      data:''
   }
   this.handleChange=this.handleChange.bind(this)
  }
  handleChange(text) {
    this.setState({
      data:text
    })
  }
  render() {
    return (
    <div>
        <p>this messege is from Child:{this.state.data}</p>
      <Child handleChange={this.handleChange}/>
    </div>
    )
  }
}

render(
<App />, document.querySelector("#app")
)