import * as types from './roomsInfoActionTypes'

export const MouseOver = (e) => ({
    type: types.MOUSE_OVER,
    e
})

export const MouseOut = () => ({
    type: types.MOUSE_OUT
})