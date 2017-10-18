import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css'
import * as actions from '../../actions/sideBarPositionActionCreators';

import LayoutHeader from '../layoutHeader'
import SwipePhoto from '../../components/detailedRoom/swipePhoto'
import ArticleInformation from '../../components/detailedRoom/articleInformation'
import Option from '../../components/detailedRoom/option'
import Description from '../../components/detailedRoom/description'
import GoogleMap from '../../components/detailedRoom/googleMap'
import SideBar from '../../components/detailedRoom/sideBar'
import LayoutFooter from '../layoutFooter'



class LayoutDetailedRoom extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.absoluteBoolean.bind(this))
    }

    absoluteBoolean(){
        var currentScrollY = document.documentElement.scrollTop;
        var scrollHeight = document.body.scrollHeight;
        if(currentScrollY >= scrollHeight - 2030){
            return this.props.sideBarPositionAbsolute()
        } else if(currentScrollY < scrollHeight - 2030){
            return this.props.sideBarPositionFixed()
        }
    }
    

    render() {

    const room = this.props.indexFilter(
        parseInt(this.props.match.params.id, 10)
    )

    const roomDesc = function(props){
        const rooms = room[0].detailedDescription.map((room, index) => 
                <p key={index}>{room}</p>
            )
            return (
                <div>{rooms}</div>
            )     
    }


    const isabsoluteDiv = this.props.absoluteDiv

        return (
            <div className="layoutDetailedRoom">
                <LayoutHeader />
                <hr className="headerHr" />
                <div className="detailedRoomMain">
                    <SwipePhoto room={room[0]} />
                    <SideBar isabsoluteDiv={isabsoluteDiv} room={room[0]}/>
                    <ArticleInformation room={room[0]}/>
                    <Option />
                    <Description roomDesc={roomDesc()}/>
                    <GoogleMap markLat={room[0].markerLat} markLng={room[0].markerLng}/>
                </div>
                <LayoutFooter />
            </div>
        )}
    }

const mapStateToProps = (state) => ({
    rooms: state.roomsInfoData.rooms,
    indexFilter : state.roomsInfoData.indexFilter,
    scrollHeight : state.sideBarPositionData.scrollHeight,
    absoluteDiv : state.sideBarPositionData.absoluteDiv
});


const mapDispatchToProps = (dispatch) => ({
    sideBarPositionFixed: () => dispatch(actions.sideBarPositionFixed()),
    sideBarPositionAbsolute: () => dispatch(actions.sideBarPositionAbsolute())
});

LayoutDetailedRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutDetailedRoom);



export default LayoutDetailedRoom;