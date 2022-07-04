import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtube from "./apis/youtube";
import { useEffect, useState } from "react";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("technology");
  }, []);

  const onSearchSubmit = async (value) => {
    const response = await youtube.get("/search", {
      params: {
        q: value,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <SearchBar onSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="twelve wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="four wide column">
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
