import React, { Component } from 'react';
import FrontMap from '../Components/FrontMap.js';
import TruckCardContainer from './TruckCardContainer.js';

class FrontPage extends Component {

    changeHandler = (e) => {
        this.props.filterByType(e)
    }
    render() {
        return(
            <div className="bg">
            <div className="container" >
            <h1 className="front-header">Austin Food Trucks</h1>

        <FrontMap trucks={this.props.trucks} info={this.props.info}/>
        <div className="filter-card">
        <h4>Search by name: <input type="text" placeholder="Search Here" onChange={this.props.search} className="center"></input>
        {/* <input type="text" placeholder="Search Here" onChange={this.props.search} className="center"></input> */}
        {/* <br/>
        <br/> */}

        <label>
        <input type="radio" value="Sort By Rating" checked={null} onChange={() => this.props.sortByRating()}/>
        Sort By Rating
        </label>
        {/* <br/>
        <br/> */}

        <label>
        <input type="radio" value="Show Favorites" checked={null} onChange={() => this.props.filterByFavorite()}/>
        Show Only Favorites
        </label>
        <br/>
        <br/>
        <label>
                Filter:
            <select onChange={(e)=>this.changeHandler(e)}>
                <option value="Show All">Show All</option>
                <option value="Mexican">Mexican</option>
                <option value="Wraps">Wraps</option>
                <option value="Italian">Italian</option>
                <option value="BBQ">BBQ</option>

            </select>
        </label>
        <br/>
        <br/>
        <button onClick={this.props.reset}>Reset All Filters</button> 
        </h4>
        </div>
        <TruckCardContainer trucks={this.props.trucks} eater={this.props.eater} favorite={this.props.favorite} unfavorite={this.props.unfavorite} info={this.props.info}/>
        </div>
        </div>
        )}
}

export default FrontPage;