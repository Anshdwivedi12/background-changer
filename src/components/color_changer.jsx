import React, { useState } from 'react'

const color_changer = () => {
    const [color, setColor] = useState('white');
    const value = 'cursor-pointer border-solid border-1 text-xl w-20 p-1 rounded-xl bg-blue-400';

    return (
        <><div>
            <div className='flex items-end justify-center h-screen' style={{backgroundColor:color}} id='color'>
                <div className='mb-[50px] flex flex-wrap justify-around gap-3 bg-indigo-300 border-1 rounded-3xl p-4 w-5xl'>
                    <button onClick={()=>setColor('green')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/greencar.jpg')" }}></button>
                    <button onClick={()=>setColor('black')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/black.jpg')" }}>black</button>
                    <button onClick={()=>setColor('blue')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/blue.jpg')" }}></button>
                    <button onClick={()=>setColor('cyan')}className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/cyan.jpg')" }}></button>
                    <button onClick={()=>setColor('red')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/red.jpg')" }}></button>
                    <button onClick={()=>setColor('gray')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/gary.jpg')" }}></button>
                    <button onClick={()=>setColor('yellow')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/yellow.jpg')" }}></button>
                    <button onClick={()=>setColor('purple')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/purple.jpg')" }}></button>
                    <button onClick={()=>setColor('orange')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/orange.jpg')" }}></button>
                    <button onClick={()=>setColor('pink')} className={`${value} bg-cover bg-center`} style={{ backgroundImage: "url('/pink.jpg')" }}></button>
                </div>
            </div>
            </div>
        </>
    )
}

export default color_changer