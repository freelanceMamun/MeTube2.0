import React from 'react';
import ApiContext from './context/contextApi';
import Header from './components/Header';
import Fead from './components/Fead';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ApiContext>
      <BrowserRouter>
        <div className="flex flex-col h-auto min-h-full   dark:bg-black">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Fead></Fead>}></Route>
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            ></Route>
            <Route
              path="/video/:id"
              element={<VideoDetails></VideoDetails>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ApiContext>
  );
}

export default App;
