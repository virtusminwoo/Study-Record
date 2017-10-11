import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class RoomCenterGoogleMapDiv extends Component {

    render() {
        var style={
            position : 'relative', 
            width: '1000px', 
            height: '800px'
        }
        return (
            <div className="RoomCenterGoogleMapDiv">
                <div style={style} >
                    <h3>위치 및 주변 편의 시설</h3>
                    <br />
                    <Map google={this.props.google} zoom={17}
                        initialCenter={{
                        lat: this.props.markLat,
                        lng: this.props.markLng
                    }}>
                        
                        <Marker
                            title={'detailedRoom'}
                            name={'detailedRoom'}
                            position={{lat: this.props.markLat, lng: this.props.markLng}} />

                    </Map>
                    
                    <img className="RoomCenterGoogleMapBottom" src ={require("../../images/DetailedRoom/detailedRoomMap.png")} alt="" />
                </div>
            </div>
        )
    }
}

    export default GoogleApiWrapper({
    apiKey: ('AIzaSyAaqBqLxotrHuE5i8yhR_V5uC39SqcV0BY'),
    version: '3'
    })(RoomCenterGoogleMapDiv)