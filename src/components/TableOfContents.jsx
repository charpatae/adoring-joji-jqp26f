import React, { useContext } from 'react';
import { LyricsContext } from '../contexts/LyricsContext';
import SongListItem from './SongListItem';
import Loading from './Loading';


function TableOfContents() {
  const { songs, loading, error } = useContext(LyricsContext);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="table-of-contents">
            <p>Error: Could not load songs.</p>
        </div>
    }

    return (
      <div className="table-of-contents">
        <h2>Table of Contents</h2>
          <ul>
              {songs.map(song => (
                  <SongListItem key={song.id} song={song}/>
              ))}
          </ul>
      </div>
    );
}

export default TableOfContents;