import React from 'react';

const YouTubeVideo = () => {
  return (
    <div className="flex justify-center sm:pt-16 pt-6 px-4 sm:px-0">
      <div className="relative w-full sm:w-[560px] h-[180px] sm:h-[315px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube-nocookie.com/embed/_2MMsvU5pf4?enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
