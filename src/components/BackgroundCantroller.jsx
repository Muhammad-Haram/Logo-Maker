import React, { useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPicker from 'react-best-gradient-color-picker';

const BackgroundCantroller = () => {

  const [rounded, setRounded] = useState(0);
  const [padding, setpadding] = useState(0);
  const [color, setcolor] = useState('#000');
  const [storageValue, setStorageValue] = useState(null);

  useEffect(() => {
    try {
      const value = JSON.parse(localStorage.getItem('value'));
      setStorageValue(value);
      console.log('setStorageValue', value);
    } catch (e) {
      console.log("Error parsing storage value");
    }

  }, []);

  useEffect(() => {

    const updateValue = {
      ...storageValue,
      bgrounded: rounded,
      bgpadding: padding,
      bgcolor:color,
    }

    localStorage.setItem('value', JSON.stringify(updateValue));


  }, [rounded,padding,color])

  return (

    <div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>
          Rounded <span> {rounded} px</span> </label>
        <Slider defaultValue={[0]} max={100} step={1}
          onValueChange={(e) => { setRounded(e[0]) }}
        />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>
          Padding <span> {padding} px</span> </label>
        <Slider defaultValue={[0]} max={100} step={1}
          onValueChange={(e) => { setpadding(e[0]) }}
        />
      </div>

      <div className='py-2'>
        <label className='p-2 flex justify-between items-center'>Icon Color</label>
        <ColorPicker hideController={false} selectedColor={(color) => { setcolor(color) }} />
      </div>

    </div>

  )
}

export default BackgroundCantroller