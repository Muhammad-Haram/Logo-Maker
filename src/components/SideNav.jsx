import React, { useState } from 'react'
import { Image, PencilRuler, Shield } from 'lucide-react'

const SideNav = ({ selectedIndex }) => {


  const [active, setactive] = useState(0)

  const menuList = [
    {
      id: 1,
      name: "icon",
      icon: PencilRuler
    },
    {
      id: 2,
      name: "Background",
      icon: Image
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield
    },
  ]

  return (
    <div className='border shadow-sm h-screen'>
      <div>
        {menuList.map((menu, id) => (
          <h2 onClick={() => { setactive(id); selectedIndex(id) }}
            className={`flex items-center gap-2 p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-primary hover:text-white ${active == id && 'text-white bg-primary'}`}
            key={id}>
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  )
}

export default SideNav
