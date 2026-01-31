import { useState, useEffect } from 'react'
import { useLanyard } from "react-use-lanyard"

interface Badge {
    id: string;
    icon: string;
    description?: string;
    link?: string;
}

interface Profile {
    ws: JSON,
    username: String,
    displayName: String,
    avatar: String,
    id: String,
    banner: String,
    tag: String,
    badge: String,
    clanID: String,
    icons: Badge[],
    status: String,
    activities: Object[]
}

export function Activities() {

}

export function Profile({ ws, username, displayName, avatar, id, banner, tag, badge, clanID, icons, status, activities }: Profile) {
    let border = tag.length * 13
    console.log(ws)
    return (
        <div className='border border-white/20 w-[400px] max-md:w-[350px] h-[550px] rounded-[25px] bg-[rgba(0,0,0,0.4)] transition-all ease-linear duration-100'>
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
                        <h1 style={{ width: border }} className='bg-white/15 cursor-pointer text-[#D3D3D3] left-[83%] top-1/2 
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

                {/*activities*/}
                <div className='border border-white relative top-8 px-[10px] py-[10px] flex flex-col gap-[5px]'>
                    {activities ? activities.map((activity) => {
                        if (activity.type === 0) {
                            return (
                                <div className='border border-white/10 h-[110px] py-5 px-[24px] relative rounded-[15px] bg-[#BAC4C8]/10 hover:bg-[#BAC4C8]/20 hover:cursor-pointer'>
                                    <div className='border border-white flex relative top-[50%] -translate-y-1/2'>
                                        <img draggable={false} className='w-[70px] h-[70px] rounded-[10px]'
                                            src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png?size=160`} />
                                        <img onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }} className='w-[30px] h-[30px] rounded-[15px] absolute left-[45px] top-[45px] border border-white/5' src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png?size=160`} />
                                    </div>
                                </div>
                            )
                        }
                        {/*Listening to Spotify*/ }
                        if (activity.type === 2) {
                            return (<div onClick={() => { window.open(`https://open.spotify.com/track/${activity.sync_id}`, '_blank') }} className='border border-white/10 h-[110px] py-5 px-[24px] relative rounded-[15px] bg-[#BAC4C8]/10 hover:bg-[#BAC4C8]/20 hover:cursor-pointer'>
                                <h1 className='text-white text-[11px] absolute w-full  top-[5px] left-[0px] text-center font-[600]'>Playing Spotify</h1>
                                <div className='flex relative top-[50%] -translate-y-1/2'>
                                    <img draggable={false} className='w-[70px] h-[70px] rounded-[10px]' src={`https://i.scdn.co/image/${activity.assets.large_image.replace('spotify:', '')}`} />
                                    <div className='relative'>
                                        <div className=' ml-[10px] relative top-[50%] -translate-y-1/2'>
                                            <h1 className='text-white select-none text-[13px] font-[400]'>{activity.assets.large_text}</h1>
                                            <h1 className='text-white select-none text-[11px] font-[400]'>{activity.state}</h1>

                                            {/*TimeStamp*/}
                                            <div>
                                                <TimeStamp timestamp={activity.timestamps} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        } else {
                            return null
                        }
                    }) : null}
                </div>
            </div>

        </div>

    )

}

interface stamp {
    end: number
    start: number
}

interface TimeStamp {
    timestamp: stamp
}

function TimeStamp({ timestamp }: TimeStamp) {
    function toSeconds(mili: number) {
        return Math.floor(mili / 1000)
    }
    let length = toSeconds(timestamp.end - timestamp.start)
    let formatted = `${`${Math.floor(length / 60)}`.padStart(2, '0')}:${`${length % 60}`.padStart(2, '0')}`
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress(toSeconds(Date.now() - timestamp.start))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timestamp.start])

    let formattedProgress = `${`${Math.floor(progress / 60)}`.padStart(2, '0')}:${`${progress % 60}`.padStart(2, '0')}`
    let percent = progress / length * 100

    return (
        <div className='flex items-center gap-[4px]'>
            <h1 className='text-white select-none text-[13px] w-[33px]'>{formattedProgress}</h1>
            <div className='h-[10px] w-[130px] rounded-[3px] border border-white/5 overflow-hidden'>
                <div style={{ width: `${percent}%` }} className='bg-white h-[10px] transition-all ease-linear duration-1000' />
            </div>
            <h1 className='text-white select-none text-[13px]'>{formatted}</h1>
        </div>
    )
}