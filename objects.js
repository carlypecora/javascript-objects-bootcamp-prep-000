var playlist = {
  "Taylor Swift": "Love Song"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(obj, artist){
  delete obj.artist
  return obj
}