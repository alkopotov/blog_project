import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store';


export const BASE_URL = 'http://localhost:4444'

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
