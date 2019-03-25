var playlist = {
  TaylorSwift: "Love Story"
}

function updatePlaylist(obj, artist, song){
  obj.artist = song
}

function removeFromPlaylist(obj, artist){
  delete obj.artist
  return obj
}