import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/contextApi';
import { fetcDataFromApi } from '../utils/api';
import SearchResultsVideoCard from './SuggetstionVideoCard';
import LeftNav from './leftNav';
const SearchResult = () => {
  const [results, setResults] = useState([]);
  const { searchQuery } = useParams();

  const { setLoading } = useContext(Context);

  useEffect(() => {
    const fetchSearchResults = () => {
      setLoading(true);
      fetcDataFromApi(`search/?q=${searchQuery}`).then((res) => {
        setResults(res?.contents);
        setLoading(false);
      });
    };
    fetchSearchResults();
  }, [searchQuery, setLoading]);
  return (
    <div className="flex flex-row h-[cale(100%-56px)] dark:bg-black">
      <LeftNav></LeftNav>
      <div className="grow grid-cols-1 gap-2 p-5">
        {results?.map((item) => {
          let video = item.video;
          return (
            <SearchResultsVideoCard
              key={video.videoId}
              video={video}
            ></SearchResultsVideoCard>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
