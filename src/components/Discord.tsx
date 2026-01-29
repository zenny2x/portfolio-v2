import { useState, useEffect } from 'react'

interface Badge {
    id: string;
    icon: string;
    description?: string;
    link?: string;
}

interface Profile {
    username: String,
    displayName: String,
    avatar: String,
    id: String,
    banner: String,
    tag: String,
    badge: String,
    clanID: String,
    icons: Badge[],
    status: String
}

export function Profile({ username, displayName, avatar, id, banner, tag, badge, clanID, icons, status }: Profile) {
    let border = tag.length * 13
    return (
        <div className='border border-white/20 w-[400px] max-md:w-[350px] h-[550px] rounded-[25px] bg-[rgba(0,0,0,0.4)]'>
            <div className='relative rounded-[75px]'>
                <img draggable={false} className='w-full object-cover h-[125px] rounded-tl-[25px] rounded-tr-[25px]' src={`https://cdn.discordapp.com/banners/${id}/${banner}.gif?size=600`} />
                <div className='absolute top-[75px] left-[24px]'>
                    <img draggable={false} className='w-[100px] rounded-[50px]' src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=160`} />
                    {/*online status*/}
                    {status === 'dnd' ? <div className='absolute bg-[#da3e44] top-[70px] left-[75px] w-[30px] h-[30px] rounded-[25px] border border-black border-[6px] flex justify-center items-center'>
                        <div className='bg-black w-[10px] h-[5px] rounded-[10px]' />
                    </div> : status === 'online' ? <div className='absolute bg-[#45a366] top-[70px] left-[75px] w-[30px] h-[30px] rounded-[25px] border border-black border-[6px] flex justify-center items-center'>
                    </div> : status === 'idle' ? <div className='absolute bg-[#ffc04e] top-[70px] left-[75px] w-[30px] h-[30px] rounded-[25px] border border-black border-[6px] flex justify-center items-center'>
                    </div> : <div className='absolute bg-[#84858d] top-[70px] left-[75px] w-[30px] h-[30px] rounded-[25px] border border-black border-[6px] flex justify-center items-center'>
                    </div>}
                    <div className='relative border'>
                        <h1 className='text-white text-center text-[20px] font-[600]'>{displayName}</h1>
                        <h1 style={{width:border}} className='bg-white/15 cursor-pointer text-[#D3D3D3] left-[83%] top-1/2 
                        -translate-y-1/3 absolute text-[12px] flex border border-white/30 rounded-[5px] hover:text-white'>
                        <img className='w-[12px] h-[12px] translate-y-1/5' src={`https://cdn.discordapp.com/clan-badges/${clanID}/${badge}.png?size=160`}></img>{tag}</h1>
                    </div>
                </div>
                
                <div className='h-[50px] flex relative'>
                    <div className='bg-white/15 h-[30px] absolute right-[50px] top-1/2 -translate-y-1/2 flex rounded-[10px] px-2 items-center gap-2'>
                        {icons.map((badge) => (
                            <img draggable={false} className='w-[23px] h-[23px]' src={`https://cdn.discordapp.com/badge-icons/${badge.icon}.png`}>
                            </img>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )

}