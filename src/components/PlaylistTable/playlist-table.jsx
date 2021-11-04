import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import './playlistT.css'


dayjs.extend(relativeTime)

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}



const PlaylistTable = ({weeklyPlaylist, dispatch}) => {
  console.log('weekly>>>>>>>', weeklyPlaylist);
//   const { images }= weeklyPlaylist;
// const [image] = images;
 
//   console.log("single Imgae", images)
//   const { url } = image;
//   console.log("url>>", url)

  const [trHoverState, setHover] = useState(false)
  
  useEffect(() => {
    setHover(true)
  },[])
  const onTrackClick = (playlist) => {
    const { track: { href } } = playlist
    window.alert(href)
    dispatch({ type: 'PLAY_TRACK', payload: href })
}
  console.log(weeklyPlaylist, 'wwwwww')
  return (
    <table style={{width: '100%'}}>
      <thead>
        <tr style={{textAlign: 'center'}}>
          <th>#</th>
          <th>Title</th>
          <th>Album</th>
          <th>Date added</th> 
          <th>Time</th>
        </tr>
      </thead>
   
      <tbody>
        {weeklyPlaylist?.tracks?.items?.map((playlist, number) => (
          <tr className={ `active ${trHoverState && "--hover" }`} onClick={() => onTrackClick(playlist)} key={number} style={{textAlign: 'center'}}>
            <td>{ number + 1}</td>
            {/* <td>{ playlist.track.album.images.map((item) => <img  src={item.url} alt={""}/>)} {playlist.track.name} </td> */}
            <td><div className="img-td">{<img  src={playlist.track.album.images[0].url} alt={""}/>} {playlist.track.name}</div> </td>
            <td>{playlist.track.album.name}</td>
            <td>{dayjs(playlist.added_at).fromNow()}</td>
            <td>{millisToMinutesAndSeconds(playlist.track.duration_ms)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PlaylistTable
