import React from "react";

const VideoCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.thumb}></div>

      <div>
        <h4 style={styles.title}>Title of the video</h4>
        <p style={styles.channel}>Channel Name</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  thumb: {
    height: "180px",
    background: "#333",
    borderRadius: "10px",
  },

  title: {
    fontSize: "14px",
    margin: 0,
  },

  channel: {
    fontSize: "12px",
    color: "gray",
  },
};

export default VideoCard;