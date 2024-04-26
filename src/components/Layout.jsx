import React from 'react'
import{Header}  from "./Header.jsx"

export const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
    </React.Fragment>
  )
}
