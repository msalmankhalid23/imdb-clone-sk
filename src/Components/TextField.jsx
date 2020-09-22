import React,{Component} from 'react';

class TextField extends Component {
    render()
    {
      return (
        <>
          <label> {this.props.title} </label>
         <input type="text" placeholder={this.props.placeholder} />
        </>
      )
    }
  }
  
  export default TextField;