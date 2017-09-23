import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class RoomSearchGoogleMap extends Component {



  static defaultProps = {
    center: {lat: 37.535887, lng: 126.984063},
    zoom: 11
  };

  render() {
      var style={
            display: 'inline-block',
            position : 'relative', 
            width: '1200px', 
            height: '610px'
        }
    return (
        <div style={style}>
            <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                <AnyReactComponent lat={37.535887} lng={126.984063} text={'서울의 중심'} />
            </GoogleMapReact>
        </div>
    );
  }
}


export default RoomSearchGoogleMap;