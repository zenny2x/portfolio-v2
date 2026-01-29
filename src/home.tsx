import { useState, useEffect } from 'react'
import RippleGrid from './components/RippleGrid'
import { DotBackground } from './components/Background'
import { Profile } from './components/Discord'
import { useLanyard } from "react-use-lanyard"




function Home() {

  const { loading, status } = useLanyard({ userId: '1389826826054012938', socket: true })
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://dcdn.dstn.to/profile/1389826826054012938')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return (
    <DotBackground>
      <div className='relative z-10 h-screen flex justify-center items-center gap-[20px]'>
        {!loading ? <Profile username={status.discord_user.username}
          displayName={status?.discord_user.display_name} id={status?.discord_user.id}
          avatar={status?.discord_user.avatar}
          banner={data?.user.banner}
          tag={status?.discord_user.primary_guild.tag}
          badge={status?.discord_user.primary_guild.badge}
          clanID={status?.discord_user.primary_guild.identity_guild_id}
          icons={data?.badges}
          status={status?.discord_status}
        /> : 'loading...'}
      </div>
      
    </DotBackground >


  )
}

export default Home
