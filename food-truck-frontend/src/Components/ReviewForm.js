import React from "react";

class Review extends React.Component {
    state = {
        rating:'',
        body: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state, this.props.truck)
    }
    render() {
        let error
        if (this.props.error!={}) {
            error = this.props.error
        }
        return(
            <div className="main clearfix">
            <div className="center">
                <h4 className="error">{error}</h4>
            <form>
                <input placeholder='Enter a rating 1-5' value={this.state.rating} onChange={e => this.setState({ rating: e.target.value })}/>
                <br/>
                <input placeholder='Enter review description' value={this.state.body} onChange={e => this.setState({ body: e.target.value })}/>
                <br/>
                <button onClick={(e)=> this.onSubmit(e)}>Submit</button>
            </form>
            </div>
            </div>
        )
    }
}
export default Review;