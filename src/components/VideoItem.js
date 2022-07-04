const VideoItem = ({ video, onVideoSelect }) => {
  const onVideoSelected = () => {
    console.log(video);
    onVideoSelect(video);
  };

  return (
    <div className="item" onClick={onVideoSelected}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div>{video.snippet.title}</div>
        <b>
          <i className="user icon" />
          {video.snippet.channelTitle}
        </b>
      </div>
    </div>
  );
};
export default VideoItem;
