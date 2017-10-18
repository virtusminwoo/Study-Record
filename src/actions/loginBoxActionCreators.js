import * as types from './loginBoxActionTypes'

export const HandleSubmitIfEmail = () => ({
    type: types.HANDLE_SUBMIT_IF_EMAIL
})

export const HandleSubmitIfPassword = () => ({
    type: types.HANDLE_SUBMIT_IF_PASSWORD
})
export const HandleSubmitElse = () => ({
    type: types.HANDLE_SUBMIT_ELSE
})
export const HandleSubmitSet = () => ({
    type: types.HANDLE_SUBMIT_SET
})
export const HandleChange = (e) => ({
    type: types.HANDLE_CHANGE,
    e
})