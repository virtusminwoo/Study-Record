import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LayoutRoomSearch from '../layoutRoomSearch';
import LayoutDetailedRoom from '../layoutDetailedRoom';
import LayoutApp from '../layoutApp'

class AppIndex extends Component {
    
    render() {
        return (
            <div>
                <Route exact path="/" component={LayoutApp}/>
                <Route path="/roomsearch" component={LayoutRoomSearch}/>
                <Route path='/detailedroom/:id' component={LayoutDetailedRoom}/>
            </div>
        );
    }
}

export default AppIndex;