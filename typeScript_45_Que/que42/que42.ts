// Que 42

//Start with a copy of your program from Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
      artist,
      title
    };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  function show_albums(albums: { artist: string, title: string, tracks?: number }[]) {
    for (const album of albums) {
      console.log(album);
    }
  }
  
  function make_great(albums: { artist: string, title: string, tracks?: number }[]) {
    for (let i = 0; i < albums.length; i++) {
      albums[i].artist = 'the Great ' + albums[i].artist;
    }
  }
  
  const albums = [
    make_album("Atif Aslam", "21"),
    make_album("Atif Aslam", "rafta rafta sanam.."),
    make_album("Rahat Fatih Ali Khan", "Tmhe dil lagi bhool jane paregi", 16)
  ];
  
  show_albums(albums);
  make_great(albums);
  show_albums(albums);
  
// I have solved this que question with the help of chatgpt.. Now I am trying to understand this logic with Youtube and chatgpt.