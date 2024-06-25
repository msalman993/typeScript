// Que 42

//Start with a copy of your program from Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


/*
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
  
  const albums = [
    make_album("Atif Aslam", "21"),
    make_album("Atif Aslam", "rafta rafta sanam.."),
    make_album("Rahat Fatih Ali Khan", "Tmhe dil lagi bhool jane paregi", 16)
  ];
  
  function make_great(albums: { artist: string, title: string, tracks?: number }[]) {
    for (let i = 0; i < albums.length; i++) {
      albums[i].artist = 'the Great ' + albums[i].artist;
    }
  }

  
  function show_albums(albums: { artist: string, title: string, tracks?: number }[]) {
    for (const album of albums) {
      console.log(album);
    }
  }

show_albums(albums);
                     // here I call show_albums() to show my albums without adding the phrase 'The Great' by passing albums(array created above) as an argument.
  
make_great(albums);
                    // here I call make_great() to change each artist's name  by passing albums(array created above) as an argument.
  
show_albums(albums);
                     // here I call show_albums() to show my albums having updated artist's names.
  
// I am happy to express that this time I have solved this question with my clear concept about all logics used above.

*/

let magicians: string[] = ["Salman", "Haroon", "Haris"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = " The Great " + magicians[i] ;
  }
}

make_great(magicians);
// Modifies the original array


show_magicians(magicians);
// Shows modified names