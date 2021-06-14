import React, { Component } from 'react';
import InfoMap from '../Components/InfoMap';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     BrowserRouter,
//     Redirect,
//     useHistory,
//     withRouter
//   } from "react-router-dom";
import ReviewForm from '../Components/ReviewForm';

class TruckPage extends Component {

    state = {
        show: false
    }

    toggleReview = () =>{
        this.setState({ show: !this.state.show})
    }

    render() {
        let selectedTruckString = localStorage.getItem('selectedTruck')
        let selectedTruck = JSON.parse(selectedTruckString)
        let b = this.props.trucks.filter(truck => truck.id === selectedTruck.id)[0]
        console.log(b)
        return(
            <div className="bg">
            <div className="container">
                <h1 className="front-header">Austin Food Trucks</h1>
                <div className="center">
                {/* <Link to='/welcome'>Back to Home Page</Link> */}
                <div className= "main clearfix">
                <h1>{selectedTruck.name}</h1>
                <img className= "image-info-page" src={selectedTruck.profile_picture}/>
                </div>
                <InfoMap truck={selectedTruck}/>
                <div className= "main clearfix">
                <h2>Type of Food: {selectedTruck.type_of_food}</h2>
                <h2>Hours of Operation: {selectedTruck.hours_of_operation}</h2>
                <h3>Reviews</h3>
                    {b.reviews.map(review =>
                        <li>{review.eater.username} says: {review.body}
                        <br/>
                        {/* {let averageRating
        if (this.props.truck.average_rating === "No ratings"){
            averageRating = <div><span class="stars-container stars-0">★★★★★</span></div>
        } else if (this.props.truck.average_rating === 1) {
            averageRating = <div><span class="stars-container stars-20">★★★★★</span></div>
        } else if (this.props.truck.average_rating === 2) {
            averageRating = <div><span class="stars-container stars-40">★★★★★</span></div>
        } else if (this.props.truck.average_rating === 3) {
            averageRating = <div><span class="stars-container stars-60">★★★★★</span></div>
        } else if (this.props.truck.average_rating === 4) {
            averageRating = <div><span class="stars-container stars-80">★★★★★</span></div>
        } else if (this.props.truck.average_rating === 5) {
            averageRating = <div><span class="stars-container stars-100">★★★★★</span></div>
        }} */}
                            Rating:{review.rating}</li>)}
                </div>

                <div className="center">
                {this.state.show===false ? 
                <button onClick={this.toggleReview}>Write a Review</button>:
                <ReviewForm onSubmit={this.props.onSubmit} truck= {selectedTruck} error={this.props.error}/>}        
                </div>
            </div>
            </div>
</div>
         ) }
}

export default TruckPage