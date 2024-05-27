import React, { useEffect, useState } from 'react'

const LogoPreview = () => {


    const [storageValue, setStorageValue] = useState();

    useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    setStorageValue(storageData)
    }, [])
    

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[500px] h-[500px] bg-gray-200 outline-dotted outline-gray-300'>
                <div className='h-full w-full' style={{
                    borderRadius: storageValue?.bgrounded,
                    backgroundColor :storageValue?.bgcolor
                }}>

                </div>
            </div>
        </div>
    )
}

export default LogoPreview