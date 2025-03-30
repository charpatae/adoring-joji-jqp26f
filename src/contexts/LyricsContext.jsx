import React, { createContext, useState, useEffect } from 'react';
import useFetchLyrics from '../hooks/useFetchLyrics';

export const LyricsContext = createContext();

export function LyricsProvider({ children }) {
  const { songs, loading, error } = useFetchLyrics();
  const [selectedSongId, setSelectedSongId] = useState(null);

  const selectSong = (songId) => {
    setSelectedSongId(songId);
  };

  return (
    <LyricsContext.Provider
      value={{
        songs,
        loading,
        error,
        selectedSongId,
        selectSong,
      }}
    >
      {children}
    </LyricsContext.Provider>
  );
}