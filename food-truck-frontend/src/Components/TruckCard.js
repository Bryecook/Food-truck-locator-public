import React, { Component } from 'react';
import '../App.css';

import {
    Redirect,
    withRouter
  } from "react-router-dom";


class TruckCard extends Component {

    goToInfo = (truck) => {
        localStorage.setItem('selectedTruck', JSON.stringify(truck));
        this.props.history.push('/info')
    }


link = () =>{
            return <Redirect to="/info"/>
        }

    render() {
        let b = this.props.eater.favorites.map(favorite => favorite.truck_id)
        console.log(this.props.truck)
        let averageRating
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
        }
        return(
            <div className = "media">
                <img className= "media-image" src={this.props.truck.profile_picture} onClick={()=>this.goToInfo(this.props.truck)}/>
                <div className= "media-body">
                <h2>{this.props.truck.name}
                <br/>
                {b.includes(this.props.truck.id) ?
                <div class="heart-btn">
                    <div class="content">
                        <span class="heart-red" onClick={()=>this.props.unfavorite(this.props.truck)}></span>
                </div>
                </div>:
                <div class="heart-btn">
                    <div class="content">
                        <span class= "heart" onClick={()=>this.props.favorite(this.props.truck)}></span>
                </div>
                </div>}
                </h2>
                <h3>Average Rating: {averageRating}</h3>
                <h4>Type of Food: {this.props.truck.type_of_food}
                <br/>
                </h4>
                </div>
            </div>
        )
    }
}

export default withRouter(TruckCard);