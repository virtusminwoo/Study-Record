import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

    render() {
        var style={
            display: 'inline-block',
            position : 'relative', 
            top : "3px",
            width: '100%', 
            height: '100%'
        }

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
                </Map>
            </div>
            </div>
        );
    }
    }

    export default GoogleApiWrapper({
    apiKey: ('AIzaSyAaqBqLxotrHuE5i8yhR_V5uC39SqcV0BY')
    })(MapContainer)