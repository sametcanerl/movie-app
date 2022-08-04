import React from "react";

const VideoSection = ({ videoKey, setModel }) => {
  let VideoStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  return (
    <div className="modal show fade " style={VideoStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Teaser Trailer</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setModel(false)}
            ></button>
          </div>

          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
