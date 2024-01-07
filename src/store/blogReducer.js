const defaultState = []

const GET_RECENT_BLOGS = 'GET_RECENT_BLOGS'
const GET_ALL_BLOGS = 'GET_ALL_BLOGS'

export const blogReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_RECENT_BLOGS:
      return action.payload;
    case GET_ALL_BLOGS:
      return action.payload;
    default:
      return state;
  }
}

export const getRecentBlogsAction = (payload) => ({type: GET_RECENT_BLOGS, payload})
export const getAllBlogsAction = (payload) => ({type: GET_ALL_BLOGS, payload})