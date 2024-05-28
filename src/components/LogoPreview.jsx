import { UpdateContextStorage } from '@/context/UpdateContextStorage';
import React, { useContext, useEffect, useState } from 'react'

const LogoPreview = () => {


    const [storageValue, setStorageValue] = useState();
    const { UpdateStorage, setUpdateStorage } = useContext(UpdateContextStorage);


    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('value'));
        console.log(storageData)
        //error
        setStorageValue(storageData)
    }, [UpdateStorage])


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[500px] h-[500px] bg-gray-200 outline-dotted outline-gray-300'>
                <div className='h-full w-full' style={{
                    borderRadius: storageValue?.bgrounded,
                    backgroundColor: storageValue?.bgcolor,
                    padding: storageValue?.bgpadding
                }}>

                </div>
            </div>
        </div>
    )
}

export default LogoPreview