import React from 'react'
import ArticlePreview from './components/ArticlePreview'

const App: React.FC = () => {
  return (
    <div className='bg-sky-100 w-[100vw] h-[100vh] flex items-center justify-center'>
      <section className='bg-white'>
        <ArticlePreview />
      </section>
    </div>
  )
}

export default App