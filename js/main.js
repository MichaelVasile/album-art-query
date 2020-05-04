function getAlbumArt() {
   console.log("ran")
   var artist = document.getElementById('artist').value;
   var album = document.getElementById('album').value;
   
   var image = document.getElementById('output-img');
   albumArt(artist, { album: album }, (error, response) => {
      image.src = (response);
   })
}