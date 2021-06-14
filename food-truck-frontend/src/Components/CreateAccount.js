import React, { Component } from 'react';

export default class CreateAccount extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let newEater = {
            username: e.target[0].value,
            password: e.target[1].value
        }
        this.props.addEater(newEater)
    }

    // changeHandler = (e) => {
    //     let {name, value} = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render(){
        let error
        if (this.props.error!={}) {
            error = this.props.error
        }
        let success
        if (this.props.success != "") {
            success = this.props.success
        }
        return (
            <div>
            <h1>Create Account</h1>
            <h4 className= "error">{error}</h4>
            <h4 className= "success">{success}</h4>
            <form onSubmit={this.handleSubmit}>
              <p>Username</p>
              <input type='text' username='username' placeholder='Enter Username'/> <br/> <br/>
              <p>Password</p>
              <input type='password' name='password' placeholder='Enter your password'/> <br/> <br/>
              <input type="submit" name="submit" value="Create Account" className="submit"/>
            </form>
        </div>
        )
    }
}