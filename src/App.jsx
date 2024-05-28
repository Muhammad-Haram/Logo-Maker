import React, { useState } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconCantroller from './components/IconCantroller'
import BackgroundCantroller from './components/BackgroundCantroller'
import LogoPreview from './components/LogoPreview'
import { UpdateContextStorage } from './context/UpdateContextStorage'

const App = () => {

  const [selectBtn, setselectBtn] = useState(0)
  const [UpdateStorage, setUpdateStorage] = useState({})

  return (
    <>
    <UpdateContextStorage.Provider value={{UpdateStorage,setUpdateStorage}}>
      <Header />
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(ele) => { setselectBtn(ele) }} />
      </div>
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6 fixed w-full'>

        <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
          {selectBtn == 0 ? <IconCantroller /> : <BackgroundCantroller />}
        </div>

        <div className='md:col-span-4'>
         <LogoPreview/>
        </div>

      </div>
      </UpdateContextStorage.Provider>
    </>
  )
}

export default App