import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/collage-video.mp4'
const VideoPlayer = ({playstate,setPlaystate}) => {

  const player = useRef(null);
  const closePlayer =(e)=>{
    if(e.target === player.current){
      setPlaystate(false)
    } 
  }
  return (
    <div className={`video-player ${playstate ?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src= {video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
