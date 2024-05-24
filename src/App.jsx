import React from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'

const App = () => {

  return (
    <>
      <Header />
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(v)=>{console.log(v)}} />
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
        
        <div className='md:col-span-2 bg-blue-200'>
          cantrol panel
        </div>

        <div className='md:col-span-4 bg-red-200'>
          icon preview
        </div>

      </div>
    </>
  )
}

export default App