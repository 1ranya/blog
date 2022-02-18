import React from 'react'
import ArticleContent from './ArticleContent'

export default function BlogPage() {
  return (
    <div className="
      blog-page mx-8 lg:mx-16 xl:mx-16 2xl:mx-24
      drop-shadow-2xl
      h-full
      bg-img-pc bg-auto bg-center bg-cover bg-gradient-to-t">
        <div className='flex flex-col justify-between text-center
        h-full
        text-white'>
          <div className=""></div>
          <ArticleContent/>
          {/* <div className="basis-1/4">
            <h1 className=''> 
            Article Title </h1>
            <h2 className='font-Relway'> Article subtitle  helkdojhdjhkj hijoljkjkhgkj</h2>
          </div> */}
        </div>
    </div>
  )
}
