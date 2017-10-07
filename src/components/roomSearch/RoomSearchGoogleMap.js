import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';

export class MapContainer extends Component {

    render() {
        var style={
            display: 'inline-block',
            position : 'relative', 
            top : "3px",
            width: '100%', 
            height: '100%'
        }

        var triangleCoords = [
            {lat: 37.501947, lng: 127.034821},
            {lat: 37.488724, lng: 127.009603},
            {lat: 37.543327, lng: 126.840686},
            {lat: 37.537926, lng: 126.996022},
            {lat: 37.600667, lng: 127.098561},
            {lat: 37.502579, lng: 127.090326}
        ]

        return (
            <div className="MapContainerDiv">
            <div style={style} >
                <Map google={this.props.google} zoom={11}
                    initialCenter={{
                    lat: 37.497640,
                    lng: 127.027139
                }}>
                    
                    
                <Marker
                    title={'detailedRoom'}
                    name={'detailedRoom'}
                    position={{lat: this.props.markLat, lng: this.props.markLng}} />

                <Polygon
                    paths={triangleCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={0.2}
                    strokeWeight={2}
                    fillColor="#0000FF"
                    fillOpacity={0.2} />
                </Map>
            </div>
            </div>
        )
    }
    }

    export default GoogleApiWrapper({
    apiKey: ('AIzaSyAaqBqLxotrHuE5i8yhR_V5uC39SqcV0BY'),
    version: '3'
    })(MapContainer)