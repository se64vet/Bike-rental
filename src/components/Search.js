import React from 'react'

const Search = () => {
  return (
    <div>
        <form className='flex flex-row justify-center items-center bg-white text-black p-2 rounded-full'>
            <div className='flex-1'>
               Choose a location 
            </div>
            <div className='flex-1 hidden md:flex flex-row justify-center gap-5 border-l-2 '>
                <div className='flex-1 border-r-2'>from</div>
                <div className='flex-1'>until</div>
            </div>
            <div className=''> <button className='aspect-square bg-yellow-300 p-3 rounded-full'>🔍</button></div>
        </form>
    </div>
  )
}

export default Search