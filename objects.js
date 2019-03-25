var playlist = {
  TaylorSwift: "Love Story"
}

function updatePlaylist(playlist, artist, song){
  playlist.artist = song
  return playlist
}

function removeFromPlaylist(obj, artist){
  delete obj.artist
  return obj
}