import React, { useContext } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from '../components/leftNav';
import VideoCard from './VideoCard';
const Fead = () => {
  const { loading, results } = useContext(Context);

  return (
    <div className="flex flex-row h-[cale(100%-56px)]">
      <LeftNav></LeftNav>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto  bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            results?.map((item) => {
              if (item.type !== 'video') {
                return false;
              }
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Fead;
