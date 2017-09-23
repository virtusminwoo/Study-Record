import React from 'react'
import detailedRoomsAPI from '../../data/detailedRoomsAPI'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Room = (props) => {
  const room = detailedRoomsAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!room) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{room.buildingType} (#{room.id})</h1>
      <h2>rentType: {room.rentType}</h2>
    </div>
  )
}

export default Room