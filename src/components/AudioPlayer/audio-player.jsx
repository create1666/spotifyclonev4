import React, { useRef, useEffect } from 'react'
import MP3 from '../../song.mp3'
import { useStateValue } from '../../StateProvider';

const AudioPlayer = ({ track,  }) => {
  const audioRef = useRef();
  const [{volume, playing,repeat},] = useStateValue()

  useEffect(() => {
    if (playing) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }

    audioRef.current.volume = volume;
    audioRef.current.loop = repeat;
  }, [playing, volume, repeat]);

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
