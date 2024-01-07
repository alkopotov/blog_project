const defaultState = []

const GET_FEATURED_WORKS = 'GET_FEATURED_WORKS'

export const workReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_FEATURED_WORKS:
      return action.payload
    default:
      return state
  }
}


export const getFeaturedWorksAction = (payload) => ({type: GET_FEATURED_WORKS, payload})