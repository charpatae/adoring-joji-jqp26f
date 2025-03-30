import React from 'react';
import { LyricsProvider } from './contexts/LyricsContext';
import TableOfContents from './components/TableOfContents';
import LyricDisplay from './components/LyricDisplay';


function App() {
  return (
    <LyricsProvider>
      <div className="app-container">
        <TableOfContents />
        <LyricDisplay />
      </div>
    </LyricsProvider>
  );
}

export default App;