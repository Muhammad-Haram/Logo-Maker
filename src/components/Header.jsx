import React from 'react'
import logo from '../assets/logo.png'
import { Button } from './ui/button'
import { ArrowDownToLine } from 'lucide-react'


const Header = () => {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <img src={logo} alt="logo" className='w-[200px]' />
      <Button className="rounded flex gap-2 items-center"><ArrowDownToLine className="w-4 h-4" /> Download</Button>
    </div>
  )
}

export default Header
