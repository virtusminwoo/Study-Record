import * as types from './ActionTypes';


// modal

export const OpenModal = () => ({
    type: types.MODAL_OPEN
})

export const CloseModal = () => ({
    type: types.MODAL_CLOSE
})


// validation

export const HandleSubmit = (e) => ({
    type: types.HANDLE_SUBMIT,
    e
})

export const HandleChangeEmailId = (e) => ({
    type: types.HANDLE_CHANGE_EMAILID,
    e
})

export const HandleChangePassword = (e) => ({
    type: types.HANDLE_CHANGE_PASSWORD,
    e
})




// marker

export const MouseOver0 = () => ({
    type: types.MOUSE_OVER0
})

export const MouseOver1 = () => ({
    type: types.MOUSE_OVER1
})

export const MouseOver2 = () => ({
    type: types.MOUSE_OVER2
})

export const MouseOver3 = () => ({
    type: types.MOUSE_OVER3
})

export const MouseOver4 = () => ({
    type: types.MOUSE_OVER4
})

export const MouseOver5 = () => ({
    type: types.MOUSE_OVER5
})

export const MouseOver6 = () => ({
    type: types.MOUSE_OVER6
})

export const MouseOver7 = () => ({
    type: types.MOUSE_OVER7
})

export const MouseOver8 = () => ({
    type: types.MOUSE_OVER8
})

export const MouseOver9 = () => ({
    type: types.MOUSE_OVER9
})

export const MouseOut = () => ({
    type: types.MOUSE_OUT
})


//showDown
export const ClickProduct = () => ({
    type: types.CLICK_PRODUCT
})

export const ClickDeal = () => ({
    type: types.CLICK_DEAL
})

export const ClickRoom = () => ({
    type: types.CLICK_ROOM
})

export const ClickDeposit = () => ({
    type: types.CLICK_DEPOSIT
})

export const ClickFee = () => ({
    type: types.CLICK_FEE
})

export const ClickOption = () => ({
    type: types.CLICK_OPTION
})

export const ClickSet = () => ({
    type: types.CLICK_SET
})
