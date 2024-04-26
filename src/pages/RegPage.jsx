import React, {useState, useEffect} from 'react'
import{Link, NavLink, useNavigate} from "react-router-dom"
import{useDispatch, useSelector} from "react-redux"
import { registerUser, checkIsAuth } from '../redux/features/auth/authSlice'
import{toast} from "react-toastify"

export const RegPage = () => {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const {status} = useSelector(state=>state.auth)
  const isAuth = useSelector(checkIsAuth)
  // console.log(status)
  const dispatch= useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    if(status)toast(status)
    if(isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
    try {
      dispatch(registerUser({username, password}))
      setPassword('')
      setUsername('')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="sidenav">
      <div className="logos">
        <NavLink href="/"><div className="logo1 l-img"></div></NavLink>
        <a href="https://www.erg.kz/kk"><div className="logo2 l-img"></div></a>
      </div>
      <form onSubmit={e => e.preventDefault()}
      className='mt-10 w-40 h-60 mx-auto'>
        <h1 className='w-40 text-lg text-black text-center'>Регистрация</h1>
        <label className='text-xs text-#192228-400'>
          Login:
          <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Login'
          className='mt-1 text-white w-full rounded-lg bg-[#313d44] py-1 px-2'/>
        </label>
        <label className='text-xs text-#192228-400'>
          Password:
          <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          className='mt-1 text-white w-full rounded-lg bg-[#313d44] py-1 px-2'/>
        </label>
        <div className='flex gap-8 justify-center mt-4'>
          <button
          type='submit'
          onClick={handleSubmit}
          className='bg-[#313d44] flex justify-center items-center text-xs text-white rounded-lg py-2 px-4'
          >
            Создать
          </button>
          <Link to='/login' className='text-xs'>Есть аккаунт?</Link>
        </div>
      </form>
    </div>
  )
}
