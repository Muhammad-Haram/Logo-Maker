import { Smile } from 'lucide-react'
import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"

const IconCantroller = () => {

  const [size, setsize] = useState(280);
  const [rotate, setrotate] = useState(0);


  return (

    <div>
      <div>
        <label>Icon</label>
        <div className='p-3 w-[50px] h-[50px] cursor-pointer bg-gray-200 flex items-center justify-center
        border my-2'>
          <Smile />
        </div>
        <div className='py-2'>
          <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span> </label>
          <Slider defaultValue={[280]} max={512} step={1} 
          onValueChange={(e)=>{setsize(e[0])}}
          />
        </div>

        <div className='py-2'>
          <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate} °</span> </label>
          <Slider defaultValue={[0]} max={360} step={1} 
          onValueChange={(e)=>{setrotate(e[0])}}
          />
        </div>

      </div>
    </div>

  )
}

export default IconCantroller