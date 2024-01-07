const defaultState = false


const MENU_TOGGLE = 'MENU_TOGGLE'
const MENU_OFF = 'MENU_OFF'

export const menuReducer = (state = defaultState, action) => {
  switch(action.type) {
    case MENU_TOGGLE:
      return !state
    case MENU_OFF:
      return false
    default:
      return state
  }
}

export const menuToggleAction = () => ({type: MENU_TOGGLE})
export const menuOffAction = () => ({type: MENU_OFF})