import React, {useState} from 'react'

const ArticlePreview: React.FC = () => {

  const [showShareOptions, setShowShareOptions] = useState(false)

  const shareOptionsHandler = () => {
    setShowShareOptions(!showShareOptions)
  }

  return (
    <>
      <section className='flex justify-between items-center p-5'>
      
      <div className=''>
        <h2 className='py-4 font-semibold'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
        <p className='text-[13px]'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
        {/* // toggle display */}
          {!showShareOptions && (
            <div className='flex justify-between mt-4 md:hidden '>
              <div className='flex items-center gap-3'>
            <div>
              <img src="./vite.svg" alt="" className='w-6 h-8' />
            </div>
            <div className='text-xs'>
              <h2 className='font-semibold'>Michelle Appleton</h2>
              <p className='text-[10px]'>28 Jun 2020</p>
            </div>
          </div>
          <div className='bg-zinc-300 rounded-full p-2' onClick={shareOptionsHandler}>
            <img src="./vite.svg" alt="" className='w-4 h-4' />
          </div>
        </div>
          )}
        
            <div className='hidden justify-between mt-4 md:flex relative '>
              <div className='flex items-center gap-3'>
              <div>
               <img src="./vite.svg" alt="" className='w-6 h-8' />
              </div>
              <div className='text-xs'>
                <h2 className='font-semibold'>Michelle Appleton</h2>
               <p className='text-[10px]'>28 Jun 2020</p>
              </div>
            </div>
            <div className='bg-zinc-300 rounded-full p-2' onClick={shareOptionsHandler}>
              <img src="./vite.svg" alt="" className='w-4 h-4' />
            </div>
          
            {showShareOptions && (
              <>
        <div className='hidden tooltip -right-16 -top-14 md:flex'> 
          <div className='flex items-center gap-3 px-7 py-2'>
            <p className='uppercase text-zinc-400 tracking-widest font-sans text-sm md:text-xs '>Share</p> 
            <img src="./vite.svg" alt="" className='w-2 h-2' />
            <img src="./vite.svg" alt="" className='w-2 h-2' />
            <img src="./vite.svg" alt="" className='w-2 h-2' />
          </div>
          
             
                </div>
            
              </>
            )}
            </div>
      </div>
      
      
      </section>
      {showShareOptions && (
        <div className='bg-zinc-800 flex md:hidden justify-between rounded-b-md '> 
          <div className='flex items-center gap-3 p-4'>
            <p className='uppercase text-zinc-400 tracking-widest font-sans text-sm '>Share</p> 
            <img src="./vite.svg" alt="" className='w-4 h-4' />
            <img src="./vite.svg" alt="" className='w-4 h-4' />
            <img src="./vite.svg" alt="" className='w-4 h-4' />
          </div>
          <div className='bg-zinc-700 rounded-full p-2 my-4 mx-2'>
            <img src="./vite.svg" alt="" className='w-4 h-4' />
          </div>
        </div>
      )}
      
    </>
    
  )
}

export default ArticlePreview