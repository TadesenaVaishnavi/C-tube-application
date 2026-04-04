import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);

  // 🔥 Fetch recommended videos
  const fetchVideos = () => {
    fetch("http://localhost:3000/api/videos/recommended")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          setVideos([]);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // 🔥 Increase view count
  const increaseView = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/videos/${id}/view`, {
        method: "POST",
      });

      // 🔥 Refresh videos after click
      fetchVideos();

    } catch (err) {
      console.error("View update error:", err);
    }
  };

  return (
    <div className="main">
      <div className="grid">
        {videos.map((video) => {
          console.log("Video object:", video); // 🔍 Debug

          return (
            <div
              className="card"
              key={video._id}
              onClick={() => increaseView(video._id)}
            >
              {/* 🔥 Thumbnail */}
              <img
                src={video.thumbnailUrl}
                alt="thumbnail"
                className="thumb"
                onError={(e) => {
                  console.log("Image failed:", video.thumbnailUrl);
                  e.target.src = "https://via.placeholder.com/300";
                }}
              />

              {/* 🔥 Info */}
              <div className="card-info">
                <div className="avatar"></div>

                <div>
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;