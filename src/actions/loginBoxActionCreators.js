import * as types from './loginBoxActionTypes'

export const HandleSubmitIfEmail = (e) => ({
    type: types.HANDLE_SUBMIT_IF_EMAIL,
    e
})

export const HandleSubmitIfPassword = (e) => ({
    type: types.HANDLE_SUBMIT_IF_PASSWORD,
    e
})
export const HandleSubmitElse = (e) => ({
    type: types.HANDLE_SUBMIT_ELSE,
    e
})
export const HandleSubmitSet = (e) => ({
    type: types.HANDLE_SUBMIT_SET,
    e
})
export const HandleChange = (e) => ({
    type: types.HANDLE_CHANGE,
    e
})