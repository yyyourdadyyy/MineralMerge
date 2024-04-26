import React from 'react'
import { Link, NavLink, Outlet  } from 'react-router-dom'

export const AddPostPage = () => {
  const activeStyle = {
    background: '#F7BA4E',
  }
  return (
    <div className="wrapper">
      <div className="sidenav">
        <div className="logos">
          <NavLink href="/"><div className="logo1 l-img"></div></NavLink>
          <a href="https://www.erg.kz/kk"><div className="logo2 l-img"></div></a>
        </div>
        <div className='flex flex-col items-center'>
          <div>Configuration</div>
          <ul className='text-[white] flex flex-col text-center justify-center mt-3'>
            <li>
              <NavLink
              className='configLink'
              to={'ore'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                  experiment
                </span>
                ORE COMPOSITION
              </NavLink>
            </li>
            <li>
              <NavLink
              className='configLink'
              to={'obj3d'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                  deployed_code
                </span>
                3D MODEL
              </NavLink>
            </li><li>
              <NavLink
              className='configLink'
              to={'year'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                  trending_up
                </span>
                YEARS REPORT
              </NavLink>
            </li><li>
              <NavLink
              className='configLink'
              to={'sat'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                  transition_fade
                </span>
                SATURATION
              </NavLink>
            </li><li>
              <NavLink
              className='configLink'
              to={'rem'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                warehouse
                </span>
                REMAINDER
              </NavLink>
            </li><li>
              <NavLink
              className='configLink'
              to={'pers'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                groups
                </span>
                PERSONAL
              </NavLink>
            </li><li>
              <NavLink
              className='configLink'
              to={'tech'}
              style={({isActive})=> isActive ? activeStyle : undefined}>
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                TECHNIQUE
              </NavLink>
            </li>
            {/* <li className='configLink'><span className="material-symbols-outlined">
            deployed_code
            </span><NavLink

            >3D MODEL</NavLink></li>
            <li className='configLink'><span className="material-symbols-outlined">
              trending_up </span><NavLink>YEARS REPORT</NavLink></li>
            <li className='configLink'> <span className="material-symbols-outlined">
transition_fade
</span><NavLink>SATURATION</NavLink></li>
            <li className='configLink'><span className="material-symbols-outlined">
warehouse
</span> <NavLink>REMAINDER</NavLink></li>
            <li className='configLink'><span className="material-symbols-outlined">
groups
</span> <NavLink>PERSONAL</NavLink></li>
            <li className='configLink'><span className="material-symbols-outlined">
local_shipping
</span> <NavLink>TECHNIQUE</NavLink></li> */}
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}
