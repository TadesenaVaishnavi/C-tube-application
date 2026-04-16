// import "./ChannelPage.css";

// const clipList = Array(6).fill({
//   title: "Epic Stream Clip",
//   creator: "NovaCreator",
//   views: "9,871 views",
//   time: "1 year ago",
// });

// export default function StreamHub() {
//   return (
//     <div className="streamHub">
      
//       {/* Cover */}
//       <div className="coverZone"></div>

//       {/* Creator Info */}
//       <div className="creatorBlock">
//         <img
//           src="/icons/spiderman.png"
//           alt="avatar"
//           className="creatorAvatar"
//         />

//         <div className="creatorText">
//           <h1>Nova Creator</h1>
//           <p>2,845 Followers</p>
//           <button className="followBtn">Follow</button>
//         </div>

//         <div className="bioText">
//           Welcome to this creative space where amazing content lives.
//         </div>
//       </div>

//       {/* Clips */}
//       <div className="clipGrid">
//         {clipList.map((clip, idx) => (
//           <div className="clipCard" key={idx}>
//             <div className="clipThumb">
//               <span>6:45</span>
//             </div>

//             <div className="clipDetails">
//               <h3>{clip.title}</h3>
//               <p>{clip.creator}</p>
//               <span>
//                 {clip.views} • {clip.time}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import "./ChannelPage.css";

export default function ChannelPage() {
  return (
    <div className="channelPage">

      {/* NAVBAR */}
      <div className="channelNavbar">

        <div className="channelNavLeft">
          <img src="/icons/hamburger.png" alt="" />
          <img src="/icons/Circle.png" alt="" className="channelLogo" />
        </div>

        <div className="channelSearchWrapper">
          <input type="text" placeholder="Type something ..." />

          <div className="channelSearchIcons">
            <img src="/icons/search.png" alt="" />
            <div className="divider"></div>
            <img src="/icons/microphone-black-shape.png" alt="" />
          </div>
        </div>

        <div className="channelNavRight">
          <div className="channelIconGroup">
            <img src="/icons/group.png" alt="" />
            <div className="divider"></div>
            <img src="/icons/video-camera.png" alt="" />
            <div className="divider"></div>
            <img src="/icons/bell.png" alt="" />
          </div>

          <Link to="/profile">
            <div className="channelprofile"></div>
          </Link>
        </div>
      </div>

      {/* MAIN */}
      <div className="channelContainer">

        {/* SIDEBAR */}
        <div className="channelSidebar">
          <div className="menuItem active">Home</div>
          <div className="menuItem">Subscriptions</div>
          <div className="menuItem">History</div>
          <div className="menuItem">Watch later</div>
          <div className="menuItem">Liked videos</div>

          {/* <div className="subsTitle">Subscriptions</div>
          {new Array(8).fill(0).map((_, i) => (
            <div key={i} className="subItem">
              <div className="subAvatar"></div>
              <span>Channel Name</span>
            </div>
          ))} */}
        </div>

        {/* CONTENT */}
        <div className="channelContent">

          {/* COVER */}
          <div className="channelBanner">
            <img src="/icons/p.png" alt="" />
          </div>

          {/* INFO */}
          <div className="channelInfo">
            <img src="/icons/p.png" className="channelAvatar" />

            <div>
              <h1>CHANNEL NAME</h1>
              <p>1,432 Subscribers</p>
              <button>Subscribe</button>
            </div>
          </div>

          {/* VIDEOS */}
          <div className="channelVideos">
            {new Array(6).fill(0).map((_, i) => (
              <div key={i} className="videoCard">
                <div className="thumb"></div>
                <h4>Title of the video</h4>
                <p>Channel Name</p>
                <span>7,382 views • 2 years ago</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}


