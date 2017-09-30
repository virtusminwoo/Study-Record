import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReduxRoomSearchWrapper from './ReduxRoomSearchWrapper';
import ContainerDetailedRoom from './ContainerDetailedRoom';
import ContainerApp from './ContainerApp'

class AppIndex extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ContainerApp}/>
                <Route path="/roomsearch" component={ReduxRoomSearchWrapper}/>
                <Route path='/detailedroom/:id' component={ContainerDetailedRoom}/>
            </div>
        );
    }
}

export default AppIndex;