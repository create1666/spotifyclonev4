import React, { useRef, useEffect } from 'react'
import MP3 from '../../song.mp3'

const AudioPlayer = ({ track, playing }) => {
  console.log(playing, 'playnig')
  const audioRef = useRef();

  useEffect(() => {
    if (playing) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [playing])

  return (
    <div hidden>
      <audio ref={audioRef} id="audio" autoPlay={false} controls>

  {/* <source src="" type="audio/ogg" /> */}

  <source src={MP3} type="audio/mpeg" />

 Your browser does not support the audio element.

 </audio>
    </div>
  )
}

export default AudioPlayer
