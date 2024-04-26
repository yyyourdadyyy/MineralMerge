import React from 'react'
import{NavLink, useNavigate} from "react-router-dom"
import{useSelector, useDispatch}from "react-redux"
import {checkIsAuth, logout} from "../redux/features/auth/authSlice"
import{toast} from "react-toastify"

export const Header = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const activeStyle = {
    color:'#F7BA4E',
  }
  const activeMenuStyle = {
    backgroundColor: '#F7BA4E',
    borderRadius: '9999px',
    marginBottom: '2.25rem'
  }

  const navigate  = useNavigate();
  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    navigate('/');
    toast('Вы вышли из системы')
  }

  return (
    <header>
      <div className="m-menu">
  <ul>
    <li><NavLink to={'/'} 
    style={({isActive})=> isActive ? activeMenuStyle : undefined}>
      <span className="material-symbols-outlined mobile-menu">
        home
      </span>
      </NavLink>
    </li>
    <li><NavLink
      to={'/posts'}
      href = "/posts"
      style={({isActive})=> isActive ? activeMenuStyle : undefined}
      >
          <span className="material-symbols-outlined mobile-menu">
            history
          </span>
          </NavLink>
    </li>
    <li><NavLink
      to={'/new'}
      href = "/posts"
      style={({isActive})=> isActive ? activeMenuStyle : undefined}
      >
          <span className="material-symbols-outlined mobile-menu">
          settings
          </span>
          </NavLink>
    </li>
    <li><a href = "info.html">
          <span className="material-symbols-outlined mobile-menu">
            info
          </span>
        </a>
    </li>
  </ul>
</div>
    <div className="title">
      <h1><NavLink to={'/'}>MINERAL MERGE</NavLink></h1>
      <h2>KACHARY RUDA</h2>
    </div>
    <ul className = "menu">
      {
        isAuth && (
          <li><NavLink
      to={'/posts'}
      href = "/posts"
      style={({isActive})=> isActive ? activeStyle : undefined}>
            <span className="material-symbols-outlined">
              history
            </span>
            <div className="text">history</div>
          </NavLink>
      </li>
        )
      }
      <li>{
        isAuth ? (
          <NavLink to={'new'} href = "/new" style={({isActive})=> isActive ? activeStyle : undefined}>
            <span className="material-symbols-outlined">
            settings
            </span>
            config
          </NavLink>
        ) : (<NavLink to={'/login'} href = "/new" style={({isActive})=> isActive ? activeStyle : undefined}>
        <span className="material-symbols-outlined">
        settings
        </span>
        config
      </NavLink>)
        }
      </li>
      <li><NavLink to={'/info'} href = "/info" style={({isActive})=> isActive ? activeStyle : undefined}>
            <span className="material-symbols-outlined">
              info
            </span>
            info
          </NavLink>
      </li>
    </ul>
    <div className="buttons">
      <button id="switchLang">English</button>
      <button id="switchTheme"><span className="material-symbols-outlined theme-icon" id="theme-icon">
        dark_mode
        </span></button>
        {isAuth && (
        <button id="switchLang" onClick={logoutHandler}>LogOut</button>)}
    </div>

  </header>
  )
} 
