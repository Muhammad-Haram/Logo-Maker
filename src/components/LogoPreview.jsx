import { UpdateContextStorage } from '@/context/UpdateContextStorage';
import { icons } from 'lucide-react';
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

    const Icon = ({ name, color, size }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return <div className='text-white'>not found</div>;
        }
        return <LucidIcon color={color} size={size} />
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[500px] h-[500px] bg-gray-200 outline-dotted outline-gray-300 mb-[70px]'>
                <div className='h-full w-full flex items-center justify-center' style={{
                    borderRadius: storageValue?.bgrounded,
                    backgroundColor: storageValue?.bgcolor,
                    padding: storageValue?.bgpadding
                }}>

                    <Icon name={storageValue?.icon}
                    color={storageValue?.iconColor}
                    size={storageValue?.iconSize}
                    />

                </div>
            </div>
        </div>
    )
}

export default LogoPreview