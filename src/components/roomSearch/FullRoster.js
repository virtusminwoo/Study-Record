import React from 'react'
import RoomAPI from '../../data/detailedRoomsAPI'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <ul>
      {
            RoomAPI.all().map(data => (
            <li key={data.id}>
                <Link to={`/roomsearch/${data.id}`}>{data.buildingType}</Link>
            </li>
            ))
        } 
    </ul>
  </div>
)

export default FullRoster
