import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/features/post/postSlice'
import { PostItem } from '../components/PostItem'


export const PostsPage = () => {

    const dispatch = useDispatch()
    const {posts} = useSelector((state) => state.post)

    useEffect(()=> {
        dispatch(getAllPosts())
    }, [dispatch])

    // if (!posts.length) {
    //     return (
    //         <div className='text-xl text-center text-white py-10 mt-[208px]'>
    //             Изменений нет
    //         </div>
    //     )
    // }

  return (
    <div className='history-block '>
    <div className='flex justify-between gap-8 '>
        <div className='flex flex-col gap-10 basis-4/5 mt-[108px] bg-[#303d45] rounded-xl '>
        <div className='grid items-center bg-[#12191F] grid-cols-[repeat(4,1fr)] grid-rows-[1fr] gap-x-2.5 gap-y-2.5 text-white text-center '>

        <div className='text-l'>User</div>
        <div className='text-l'>Date</div>
      <div className='text-l p-2'>Fe</div>
      <div className='text-l p-2'>S</div>
    </div>
                {posts?.map((post, idx) => (
                        <PostItem key={idx} post={post} />
                    ))}
        </div>
    </div>
</div>
  )
}
