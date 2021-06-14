import './App.css';
import MainPage from './Containers/MainPage'
import React from 'react';
import FrontPage from './Containers/FrontPage'
import TruckPage from './Containers/TruckPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect,

} from "react-router-dom";


class App extends React.Component {

state = {
  trucksArray: [],
  currentEater: {},
  selectedTruck: {},
  searchTerm: "",
  reviewError: "",
  loginError: "",
  createError: "",
  createSuccess: ""
}

updateReviewError = (data) => {
  this.setState({
    reviewError: data
  })
}

updateLoginError = (data) => {
  this.setState({
    loginError: data
  })
}

updateCreateError = (data) => {
  this.setState({
    createError: data
  })
}

componentDidMount() {
  console.log('mounted')
  this.getTrucks()
  if (localStorage.token != null) {
    this.jwtAuth()
  }
  
  // this.setUser(this.state.currentEater)
}

jwtAuth = () => {
  fetch('http://localhost:3000/api/v1/token',{
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization": `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(localStorage.token)
  })
  .then(res => res.json())
  .then(data => this.setState({
    currentEater: data
  }))
}

updateFavorites = (data) => {
  let eater = this.state.currentEater
  eater.favorites = [...eater.favorites, data]
  this.setState({
    currentEater: eater
  })
}

favorite = (truck) => {
  let eater = this.state.currentEater
  eater.trucks = [...eater.trucks, truck]
  this.setState({
    currentEater: eater
  })
  this.getTrucks()
  let newFavorite = {
    eater_id: this.state.currentEater.id,
    truck_id: truck.id
  }
  let reqPackage = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newFavorite)
  }
  console.log(reqPackage)
  fetch('http://localhost:3000/api/v1/favorites', reqPackage)
  .then(res => res.json())
  .then(data => this.updateFavorites(data))
}

unfavorite = (truck) => {
  let eater = this.state.currentEater
  let b = eater.favorites.filter(object => object.truck_id === truck.id)[0]
  let newArray = eater.favorites.filter(favorite => {
    return favorite.truck_id != truck.id;
  })
  eater.favorites = newArray
  this.setState({
    currentEater: eater
  })
  fetch(`http://localhost:3000/api/v1/favorites/${b.id}`, {
    method: "DELETE",
  })
}

setUser = (data) => {
  let obj = JSON.parse(data)
  this.setState({
    currentEater: obj,
  })
  console.log(this.state.currentEater)
}

setTrucks = (data) => {
  this.setState({
    trucksArray: data
  })
}
getTrucks = () => {
  fetch('http://localhost:3000/api/v1/trucks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    }
  })
  .then(res => res.json())
  .then(data => this.setTrucks(data))
}

handleLogIn = (e) => {
  console.log('login hit')
  e.preventDefault()
  let eater = {
    username: e.target[0].value,
    password: e.target[1].value
  }

  let reqPackage = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "",
    },
    body: JSON.stringify(eater)
  }

  fetch('http://localhost:3000/api/v1/login', reqPackage)
  .then(res => res.json())
  .then(data => {
    if (data.error==="Incorrect username or password") {
      this.updateLoginError(data.error)
    } else {
      localStorage.token = data.token
      this.setUser(data.eater)
    }
    // this.getTrucks()
  })
}

info = (truck) => {
  console.log('clicked')
  this.setState({
    selectedTruck: truck
  })
  return <Link to='/info'/>
}

logout = () => {
  localStorage.clear()
  window.location.reload()
}

addEater = (newEater) => {
  let reqPackage = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      // 'Authorization': `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(newEater)
  }
  fetch('http://localhost:3000/api/v1/eaters', reqPackage)
  .then(res => res.json())
  .then(data => {
    if (data.error=== "Username already in use") {
      this.updateCreateError(data.error)
    } else {
      this.setState({
        createSuccess: "Account created! Please Log In"
      })
    }

})
}

reviewSubmit = (fields, truck) => {
  let rating = parseInt(fields.rating)
  let newReview = {
    eater_id: this.state.currentEater.id,
    truck_id: truck.id,
    rating: rating,
    body: fields.body
  }
  let reqPackage = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newReview)
  }
  fetch('http://localhost:3000/api/v1/reviews', reqPackage)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (data.error==="Rating must be whole number between 1 and 5") {
      this.updateReviewError(data.error)
    } else {
      this.updateReviews(data)
    }
  })
}

updateReviews = (data) => {
  let eater = this.state.currentEater
  eater.reviews = [...eater.reviews, data]
  this.setState({
    currentEater: eater,
    reviewError: ""
  })
  this.getTrucks()
}

handleSearchTerm = (e) => {
  this.setState({
    searchTerm: e.target.value
  })
}

sortByRating= (e) => {
  let sortedTrucks = this.state.trucksArray.sort((a,b) => b.average_rating - a.average_rating)
  this.setState({
    trucksArray: sortedTrucks
  })
}

filterByFavorite = (e) => {
  let b = this.state.currentEater.favorites.map(favorite => favorite.truck_id)
  let filteredTrucks = this.state.trucksArray.filter(truck => b.includes(truck.id))
this.setState({
  trucksArray: filteredTrucks
})
}

filterByType = (e) => {
  e.preventDefault()
  if (e.target.value === "Show All") {
    this.getTrucks()
  } else {
    // this.getTrucks()
    let filteredTrucks = this.state.trucksArray.filter(truck => truck.type_of_food === e.target.value)
    this.setState({
      trucksArray: filteredTrucks
    })
  }
}

resetFilters = () => {
  window.location.reload()
}
  render() {
    let filteredTrucks = this.state.trucksArray.filter(truck => truck.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    let username
    if (this.state.currentEater != {}) {
      username = this.state.currentEater.username
    }
  return (
    <BrowserRouter>
<div className="center">
  <h1>Welcome {username}</h1>
   {localStorage.token ? <button onClick={() =>this.logout()}>Log Out </button>: <h1>Login</h1>}
   </div>
    <Switch>
      <Route exact path="/">
      {localStorage.token ? <Redirect to="/welcome"/> : <MainPage handleLogIn={this.handleLogIn} addEater={this.addEater} error={this.state.loginError} createError={this.state.createError} createSuccess={this.state.createSuccess}/>}
      </Route>
      <Route exact path='/welcome'>
      {localStorage.token ? <FrontPage trucks={filteredTrucks} eater={this.state.currentEater} favorite={this.favorite} unfavorite={this.unfavorite} info={this.info} search={this.handleSearchTerm} sortByRating={this.sortByRating} filterByType={this.filterByType} filterByFavorite={this.filterByFavorite} reset={this.resetFilters}/> : <Redirect to="/"/>}
      </Route>
      <Route exact path='/info'>
      {localStorage.token ? <TruckPage onSubmit={this.reviewSubmit} eater={this.state.currentEater} trucks={this.state.trucksArray} error={this.state.reviewError}/>: <Redirect to="/"/>}
      </Route>
      {/* <Route path='/:handle' component={TruckPage}/> */}
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
