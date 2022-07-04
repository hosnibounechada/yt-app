const VideoDetail = ({ video }) => {
  const showContent = () => {
    if (!video)
      return (
        <div className="ui active dimmer">
          <div className="ui massive text loader">Loading</div>
        </div>
      );
    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="video player"
          />
        </div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    );
  };

  return <div>{showContent()}</div>;
};
export default VideoDetail;
