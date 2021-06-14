import React, { Component } from 'react';
import LogIn from '../Components/LogIn.js';
import CreateAccount from '../Components/CreateAccount.js'

class MainPage extends Component {
    state = {
        loggedIn: false
    }

    checkLoggedIn = () =>{
localStorage.token ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
    }

    render() {
        return(
            <div className="center">
            {(() => {
                if (localStorage.token){
                    return (
                        <div>
                            <h1>Welcome {localStorage.username}</h1>
                        </div>
                    )
                } else {
                    return (
                        <div>
                     <LogIn handleLogIn={this.props.handleLogIn} error={this.props.error}/>   
                     </div>
                    )
                }
            })()}
            <CreateAccount addEater={this.props.addEater} error={this.props.createError} success={this.props.createSuccess}/>
            </div>

        )
    }
}

export default React.memo(MainPage)