import { BASE_URL } from ".."
import { getAllBlogsAction, getRecentBlogsAction } from "../store/blogReducer"


export function fetchRecentBlogs() {
  return function(dispatch) {
    fetch(BASE_URL + '/blogs/')
      .then(res => res.json())
        .then(data => {
          let recentPosts = data.map(elem => {
            elem.date = Date.parse(elem.date)
            return elem
          })
          recentPosts.sort((a, b) => b.date - a.date)
          dispatch(getRecentBlogsAction(recentPosts.slice(0, 2)))
        })
  }
}

export function fetchAllBlogs() {
  return function(dispatch) {
    fetch(BASE_URL + '/blogs/')
      .then(res => res.json())
        .then(data => {
          let allPosts = data.map(elem => {
            elem.date = Date.parse(elem.date)
            return elem
          })
          allPosts.sort((a, b) => b.date - a.date)
          dispatch(getAllBlogsAction(allPosts))
        })
  }
}
