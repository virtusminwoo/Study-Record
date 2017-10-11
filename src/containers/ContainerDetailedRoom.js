import React,{Component} from 'react';
import roomsApi from '../data/roomsApi'

import ContainerHeader from './ContainerHeader';
import PhotoSlideDiv from '../components/detailedRoom/PhotoSlideDiv'
import RoomCenterDescriptionTableDiv from '../components/detailedRoom/RoomCenterDescriptionTableDiv'
import RoomCenterOptionDiv from '../components/detailedRoom/RoomCenterOptionDiv'
import RoomCenterDetailedDescription from '../components/detailedRoom/RoomCenterDetailedDescription'
import RoomCenterGoogleMapDiv from '../components/detailedRoom/RoomCenterGoogleMapDiv'
import ContainerFixedRightDescriptionDiv from './ContainerFixedRightDescriptionDiv'
import ContainerFooter from './ContainerFooter'




class DetailedRoomWrapper extends Component {
    constructor(props) {
    super(props);
    this.state={
            scrollHeight : '',
            absoluteDiv : false
        }
    }

    absoluteBoolean(){
        var windowScrollY = window.scrollY;
        var nowScrollHeight = this.refs.contents.scrollHeight;
        if(windowScrollY >= nowScrollHeight - 2100){
            console.log( windowScrollY)
            this.setState({
                scrollHeight : windowScrollY,
                absoluteDiv : true
            })
        } else if(windowScrollY <= nowScrollHeight - 2100){
            console.log( windowScrollY)
            this.setState({
                scrollHeight : windowScrollY,
                absoluteDiv : false
            })
        }
    }

    render() {

    const room = roomsApi.indexFilter(
        parseInt(this.props.match.params.id, 10)
    )

    const roomDesc = function(props){
        const rooms = room[0].detailedDescription.map((room, index) => 
                <p key={index}>{room}</p>
            )
            return (
                <p>{rooms}</p>
            )     
    }


    const isabsoluteDiv = this.state.absoluteDiv

        return (
            <div ref='contents' className="DetailedRoomWrapper" onWheel={this.absoluteBoolean.bind(this)}>
                <ContainerHeader />
                <hr className="HeaderGroupHr" />
                <PhotoSlideDiv room={room[0]} />
                <RoomCenterDescriptionTableDiv room={room[0]}/>
                <RoomCenterOptionDiv />
                <RoomCenterDetailedDescription roomDesc={roomDesc()}/>
                <RoomCenterGoogleMapDiv markLat={room[0].markerLat} markLng={room[0].markerLng}/>
                <ContainerFixedRightDescriptionDiv isabsoluteDiv={isabsoluteDiv} room={room[0]}/>
                <ContainerFooter />
            </div>
        )}
    }


export default DetailedRoomWrapper;