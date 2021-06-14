import React, { Component } from 'react'
import { GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
import {config} from '../config.js'

const containerStyle = {
  width: '1080px',
  height: '740px'
  // display: 'inline',
};

const center = {
  lat: 30.26746997853194,
  lng: -97.7444230858805
};

let myLatLng = { lat: -25.363, lng: 131.044};


//   const setMarker = (e) => {
//     console.log(e.latLng.lat(), e.latLng.lng())
//     myLatLng = { lat: e.latLng.lat(), lng: e.latLng.lng()}
//   }


class MyComponent extends Component {
  state = {
    markerLocation: {}
  }

  setMarker = (e) => {
    console.log(e.latLng.lat(), e.latLng.lng())
    myLatLng = { lat: e.latLng.lat(), lng: e.latLng.lng()}
    this.setState({
      markerLocation: myLatLng
    })
  }

  renderMarkers(){
      return <Marker
      label = {this.props.truck.name}
      position = {this.props.truck.location}
      // icon = {truck.profile_picture}
      />
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey= {config.MY_KEY}
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