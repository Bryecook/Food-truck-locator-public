import React, { Component } from 'react';
import TruckCard from '../Components/TruckCard.js';
import '../App.css';

class TruckCardContainer extends Component {
    render() {
        return(
            <div className= "main clearfix">
            {this.props.trucks.map(truck => <TruckCard truck={truck} eater= {this.props.eater} favorite= {this.props.favorite} unfavorite= {this.props.unfavorite} info={this.props.info}/>
                )}
            </div>
        )
    }
}

export default TruckCardContainer;