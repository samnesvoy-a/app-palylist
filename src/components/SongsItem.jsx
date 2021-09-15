import DeleteSong from './DeleteSong'
import Like from './Like'

function SongsItem({song}){
    return(
    
        <div className="songs-item">
            <div className="item-inner">
                <p>{song.id}</p>
                <p>{song.name}</p>
                <p>{song.author}</p>
                <p>{song.releaseDate}</p>
                <p>{song.albumName}</p>
                <DeleteSong/>
                <Like/>
            </div>
        </div>
    );
}

export default SongsItem