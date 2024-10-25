import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-4">{overview}</p>
      <div>
        <button className="bg-white rounded-lg text-black p-4 px-12 text-xl hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 rounded-lg text-white p-4 px-12 opacity-70 text-xl mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
