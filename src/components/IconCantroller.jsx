import { Smile } from 'lucide-react'
import React from 'react'

const IconCantroller = () => {
  return (

    <div>
      <div>
        <label>Icon</label>
        <div className='p-3 w-[50px] h-[50px] cursor-pointer bg-gray-200 flex items-center justify-center
        border my-2'>
          <Smile />
        </div>
      </div>
    </div>

  )
}

export default IconCantroller