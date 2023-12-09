import React from 'react'
import ArticlePreview from './components/ArticlePreview'

const App: React.FC = () => {
  return (
    <div className='bg-sky-100 px-4 w-[100vw] h-[100vh] flex items-center justify-center'>
      <section className='bg-white flex flex-col md:flex-row justify-between md:w-8/12 '>
        <div className='bg-amber-300 py-12 rounded-t-md md:w-3/4'>
          <img src="../../vite.svg" alt="image" className='m-auto w-12 h-12' />
        </div>
        <ArticlePreview />
      </section>
    </div>
  )
}

export default App