import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout/Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import NewsDetails from './pages/newsDetails/NewsDetails.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path=':publishedAt' element={<NewsDetails />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
