import React, { Component } from 'react'
import { GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
import {
  Redirect,
  withRouter
} from "react-router-dom";
import {config} from '../config.js'


const containerStyle = {
  // position: 'inline',
  width: '1080px',
  height: '740px'
};

const center = {
  lat: 30.26746997853194,
  lng: -97.7444230858805
};

let myLatLng = { lat: -25.363, lng: 131.044};


  // const setMarker = (e) => {
  //   console.log(e.latLng.lat(), e.latLng.lng())
  //   myLatLng = { lat: e.latLng.lat(), lng: e.latLng.lng()}
  // }


class MyComponent extends Component {
  state = {
    markerLocation: {}
  }

//   goToInfo = (truck) => {
//     localStorage.setItem('selectedTruck', JSON.stringify(truck));
//     this.props.history.push('/info')
// }

  setMarker = (e) => {
    console.log(e.latLng.lat(), e.latLng.lng())
    myLatLng = { lat: e.latLng.lat(), lng: e.latLng.lng()}
    this.setState({
      markerLocation: myLatLng
    })
  }

  renderMarkers(){
    return this.props.trucks.map((truck)=> {
      return <Marker
      label = {truck.name}
      position = {truck.location}
      url= "localhost:3001/info"
      />
    })
  }
  render() {
    return (
      <LoadScript
        googleMapsApiKey={config.MY_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={this.setMarker}
        >
          {/* {for (var i=0; i < this.props.trucks.length; i++) {
            var data = this.props.trucks[i]
            var myLatLng = new google.maps.Marker({

            })
          }} */}
          {this.renderMarkers()}
  
          {/* <Marker
        position= {myLatLng}
        draggable= {true}
        /> */}
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default React.memo(MyComponent)