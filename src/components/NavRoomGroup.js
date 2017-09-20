import React, { Component } from 'react';
import NavRoom from './NavRoom';

        class NavRoomGroup extends Component{
        constructor(){
            super();
            
            this.state={
                NavRoomData:
                [
                    {
                        "id":1,
                        "title":"방 검색",
                        "link":"https://www.dabangapp.com/search#/map?id=&type=search&filters=%7B%22deposit-range%22%3A%5B0%2C999999%5D%2C%22price-range%22%3A%5B0%2C999999%5D%2C%22room-type%22%3A%5B0%2C1%2C2%2C3%2C4%2C5%5D%2C%22deal-type%22%3A%5B0%2C1%5D%2C%22location%22%3A%5B%5B126.62013471679688%2C37.38581769625844%5D%2C%5B127.35896528320313%2C37.74395186654787%5D%5D%7D&position=%7B%22center%22%3A%5B126.98955000000001%2C37.5651%5D%2C%22zoom%22%3A11%7D&cluster=%7B%7D"
                    },
                    
                    {
                        "id":2,
                        "title":"관심목록",
                        "link":"https://www.dabangapp.com/favorite#/map?type=visited"
                    },
                    
                    {
                        "id":3,
                        "title":"방 등록",
                        "link":"https://www.dabangapp.com"
                    }
                ]
            }
        }

    render(){
            return(
                
                    <div className="NavRoomDiv">
                        {this.state.NavRoomData.map((navData, i) => <NavRoom key = {i} NavRoomData = {navData} />)} 
                    </div>
                
            )
        }
    }
    
export default NavRoomGroup;