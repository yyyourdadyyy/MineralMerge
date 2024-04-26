import React from 'react'
import Moment from 'react-moment'

export const PostItem = ({post}) => {
  if (!post) {
    return (
      <div className='text-xl text-center text-white py-10'>
          Изменений нет
      </div>
  )
  }
  return (
    <div className='history-item-block '>

        <div className='text-xs'>{post.username}</div>
        <div className='text-xs'><Moment date={post.createdAt} format='DD MM YY'/></div>
        <div className='text-xs p-2'>{post.title}%</div>
        <div className='text-xs p-2'>{post.text}%</div>
    </div>
  )
}
