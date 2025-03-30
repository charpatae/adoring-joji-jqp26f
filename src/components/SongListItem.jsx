import React, { useContext } from 'react';
import { LyricsContext } from '../contexts/LyricsContext';

function SongListItem({ song }) {
  const { selectSong, selectedSongId } = useContext(LyricsContext);

    const handleClick = () => {
        selectSong(song.id)
    }

  return (
    <li
      className={`song-list-item ${selectedSongId === song.id ? 'selected' : ''}`}
        onClick={handleClick}
    >
      {song.name}
    </li>
  );
}

export default SongListItem;