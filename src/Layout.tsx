import React from 'react'
import { Outlet } from 'react-router'
import App from './App'

const Layout = () => {
  return (
    <>

    <h1>hello</h1>

    <App/>
    <Outlet/>
    </>
  )
}

export default Layout