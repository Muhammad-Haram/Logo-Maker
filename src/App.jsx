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
      <div className='ml-64'>
        body
      </div>
    </>
  )
}

export default App