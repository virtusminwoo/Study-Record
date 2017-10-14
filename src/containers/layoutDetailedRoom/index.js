import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css'

import LayoutHeader from '../layoutHeader'
import SwipePhoto from '../../components/detailedRoom/swipePhoto'
import ArticleInformation from '../../components/detailedRoom/articleInformation'
import Option from '../../components/detailedRoom/option'
import Description from '../../components/detailedRoom/description'
import GoogleMap from '../../components/detailedRoom/googleMap'
import SideBar from '../../components/detailedRoom/sideBar'
import LayoutFooter from '../layoutFooter'



class LayoutDetailedRoom extends Component {
    constructor() {
    super();
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

    const room = this.props.indexFilter(
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
            console.log(room),
            <div ref='contents' className="layoutDetailedRoom" onWheel={this.absoluteBoolean.bind(this)}>
                <LayoutHeader />
                <hr className="headerHr" />
                <SwipePhoto room={room[0]} />
                <ArticleInformation room={room[0]}/>
                <Option />
                <Description roomDesc={roomDesc()}/>
                <GoogleMap markLat={room[0].markerLat} markLng={room[0].markerLng}/>
                <SideBar isabsoluteDiv={isabsoluteDiv} room={room[0]}/>
                <LayoutFooter />
            </div>
        )}
    }

const mapStateToProps = (state) => ({
    rooms: state.roomsInfoData.rooms,
    indexFilter : state.roomsInfoData.indexFilter
});


LayoutDetailedRoom = connect(
    mapStateToProps
)(LayoutDetailedRoom);

export default LayoutDetailedRoom;