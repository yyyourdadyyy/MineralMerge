import React, {useState} from 'react'
import { DoughnutChartComponent as Doughnut } from "../components/Chart.jsx"
import { useDispatch } from 'react-redux'
import {createPost} from '../../redux/features/post/postSlice.js'
export const OreComposition = () => {
  const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()
  const submitHandler = () => {
    try {
      const data = new FormData()
            data.append('title', title)
            data.append('text', text)
            
            dispatch(createPost(data))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='add-title h-screen flex justify-around items-center text-center ml-[246px]'>
      <div className='bg-[#313d44] rounded-lg py-3 px-10 w-50'>
        <form onSubmit={e => e.preventDefault()}
      className='mt-10 w-40 h-50 '>
        <h1 className='w-40 text-lg text-white text-center'>Ore composition</h1>
        <input
        value={image}
        onChange={e => setImage(e.target.value)}
        type="file"
        style={{display: 'none'}}/>
        <label className='text-xs text-[white] text-left'>
          Ferum:
          <input
          max="99"
          type="number"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Ferum persentage'
          className='mt-1 text-white w-full rounded-lg bg-[#12191F] py-1 px-2'/>
        </label>
        <label className='text-xs text-white'>
          Sulfur:
          <input
          max="99"
          type="number"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Sulfur persentage'
          className='mt-1 text-white w-full rounded-lg bg-[#12191F] py-1 px-2'/>
        </label>
        <div className='flex gap-8 justify-center mt-4'>
          <button
          onClick={submitHandler}
          className='bg-[#12191F] flex justify-center items-center text-xs text-white rounded-lg py-2 px-4'
          >
            Submit
          </button>
        </div>
      </form>

      </div>
      <div className="chart-box  h-80 w-80">
          <Doughnut post={{ title: title, text: text }}/>
        </div>
        </div>
  )
}

