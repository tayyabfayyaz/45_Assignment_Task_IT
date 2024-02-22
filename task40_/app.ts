// Name: Tayyab Fayyaz 
// Date: 21-feb-2024


//      EXERSICE NO. 40

function make_album(artist: string, title: string, tracks?: number): {artist: string, title: string, tracks?: number} {

    let Album: {artist: string, title: string, tracks?: number} = {
        artist: artist,
        title: title
    }

    if(tracks != undefined){
        Album.tracks = tracks;
    }
    return Album;
}

    let Album1 = make_album('Atif Aslam', 'Romeo Akber Walter');
    let Album2 = make_album('Umair Jaswal', 'Sammi Meri War', 8);
    let Album3 = make_album('Arijit Singh', 'O Maahi', 12);

console.log(Album1);
console.log(Album2);
console.log(Album3);

