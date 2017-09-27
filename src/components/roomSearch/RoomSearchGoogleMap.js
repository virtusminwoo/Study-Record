import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';

export class MapContainer extends Component {

    render() {
        var style={
            display: 'inline-block',
            position : 'relative', 
            width: '1600px', 
            height: '810px'
        }

        return (
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
                    
                   

                </Map>
            </div>
        );
    }
    }

    export default GoogleApiWrapper({
    apiKey: ('AIzaSyAaqBqLxotrHuE5i8yhR_V5uC39SqcV0BY')
    })(MapContainer)