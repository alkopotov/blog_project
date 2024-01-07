import { BASE_URL } from ".."
import { getFeaturedWorksAction } from "../store/workReducer"


export function fetchFeaturedWorks() {
  return function(dispatch) {
    fetch(BASE_URL + '/works/all')
      .then(res => res.json())
        .then(data => dispatch(getFeaturedWorksAction(data.slice(0, 3))))
  }
}