const LogIn = props => {
    let error
    if (props.error != "") {
        error = props.error
    }
    return(
        <div className = "center">
        <h4 className="error">{error}</h4>
    <form onSubmit={props.handleLogIn}>
        <label>Username</label>
        <input type="text"/>
        <br/>
        <label>Password</label>
        <input type="password"/>
        <br/>
        <input type="submit"/>
    </form>
    </div>)
}

export default LogIn;