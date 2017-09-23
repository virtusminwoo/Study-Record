import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import RoomSearchWrapper from './roomSearch/RoomSearchWrapper';
import DetailedRoomWrapper from './detailedRoom/DetailedRoomWrapper';
import App from './App'
import rooms from './roomSearch/rooms'
import RoomCenterDescriptionTableDiv from './detailedRoom/RoomCenterDescriptionTableDiv';

class AppIndex extends Component {
    render() {
        return (
            <div>
                
                    <Route exact path="/" component={App}/>
                    <Route path="/roomsearch" component={RoomSearchWrapper}/>
                    <Switch>
                        <Route path='/detailedroom/:id' component={DetailedRoomWrapper}/>
                    </Switch>
            </div>
        );
    }
}

export default AppIndex;