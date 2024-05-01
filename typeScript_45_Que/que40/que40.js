// Que 40
//Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return an Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks = 0) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks > 0) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Atif Aslam", "21"));
console.log(make_album("Atif Aslam", "rafta rafta sanam.."));
console.log(make_album("Rahat Fatih Ali Khan", "Tmhe dil lagi bhool jane paregi", 16));
export {};
// Sorry to say but My concept for the question is not cleared.. I will try to understand this Question in future,
// For Now I just Copied This Coad from chatgpt.
