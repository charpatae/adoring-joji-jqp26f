import React, { useContext } from 'react';
import { LyricsContext } from '../contexts/LyricsContext';

function LyricDisplay() {
  const { songs, selectedSongId } = useContext(LyricsContext);

  if (!selectedSongId) {
      return <div className="lyrics-display">
        <p>Select a song to view lyrics</p>
      </div>
  }


  const selectedSong = songs.find(song => song.id === selectedSongId);

  if (!selectedSong) {
    return <div className="lyrics-display">
      <p>Song not found</p>
    </div>;
  }

  return (
    <div className="lyrics-display">
      <h2>{selectedSong.name}</h2>
      <pre>{selectedSong.lyrics}</pre>
    </div>
  );
}

export default LyricDisplay;