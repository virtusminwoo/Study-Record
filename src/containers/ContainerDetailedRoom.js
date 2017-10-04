import React,{Component} from 'react';
import detailedRoomsAPI from '../data/detailedRoomsAPI'

import ContainerHeader from './ContainerHeader';
import PhotoSlideDiv from '../components/detailedRoom/PhotoSlideDiv'
import RoomCenterDescriptionTableDiv from '../components/detailedRoom/RoomCenterDescriptionTableDiv'
import RoomCenterOptionDiv from '../components/detailedRoom/RoomCenterOptionDiv'
import RoomCenterDetailedDescription from '../components/detailedRoom/RoomCenterDetailedDescription'
import RoomCenterGoogleMapDiv from '../components/detailedRoom/RoomCenterGoogleMapDiv'
import ContainerFixedRightDescriptionDiv from './ContainerFixedRightDescriptionDiv'
import ContainerFooter from './ContainerFooter'



import FixedRightDescriptionDivTop from '../components/detailedRoom/FixedRightDescriptionDivTop'
import FixedRightDescriptionDivBottom from '../components/detailedRoom/FixedRightDescriptionDivBottom'

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

    const room = detailedRoomsAPI.get(
        parseInt(this.props.match.params.id, 10)
    )

    const roomDesc = function(props){
        const rooms = room.detailedDescription.map((room, index) => 
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
                <PhotoSlideDiv room={room} />
                <RoomCenterDescriptionTableDiv room={room}/>
                <RoomCenterOptionDiv />
                <RoomCenterDetailedDescription roomDesc={roomDesc()}/>
                <RoomCenterGoogleMapDiv markLat={room.markerLat} markLng={room.markerLng}/>
                <div className={isabsoluteDiv? "FixedRightDescriptionDivAbsolute" : "FixedRightDescriptionWrapper"}>
                    <div className={"FixedRightDescriptionDiv"}>
                        <FixedRightDescriptionDivTop room={room} />
                        <FixedRightDescriptionDivBottom room={room} />
                    </div>
                </div>
                <ContainerFooter />
            </div>
        );
        }
    }


export default DetailedRoomWrapper;