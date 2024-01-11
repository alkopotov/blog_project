import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store';
import { BASE_URL } from './asyncActions';


export function getUrl(link){
  if (link.startsWith('http')) return link;
  return BASE_URL + link
}

export const formatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

const router = createHashRouter([
  {
    path: '/*',
    element: <App/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    
      <RouterProvider router={router}/>

    
  </Provider>
);
