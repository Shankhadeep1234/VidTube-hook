import React, { useState, useEffect } from "react";

import useVideos from "../hooks/useVideos";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("JavaScript");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //setSelectedVideo(response.data.items[0]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onSelectedVideo={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
