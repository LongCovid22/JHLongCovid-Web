import React, { useEffect, useRef } from "react";
import VideoJs, { VideoJsPlayerOptions } from "video.js";
import { Storage } from "aws-amplify";

interface VideoProps {
  videoKey: string;
}
const videoJsOptions: VideoJsPlayerOptions = {
  // techOrder: ['html5', 'flash'],
  controls: false,
  autoplay: true,
  fluid: false,
  loop: true,
  aspectRatio: "16:9",
};

export const VideoPlayer: React.FC<VideoProps> = ({ videoKey }) => {
  const videoContainer = useRef() as any;

  //  Setup the player
  useEffect(() => {
    //  Setting content like this because player.dispose() remove also the html content
    videoContainer.current.innerHTML = `
      <div data-vjs-player>
        <video class="video-js" />
      </div>
    `;

    const player = VideoJs(
      videoContainer.current!.querySelector("video"),
      videoJsOptions,
      async () => {
        const url = await Storage.get(videoKey, { level: undefined }); // Storage.get generates a signed url
        player.src({ src: url, type: "video/mp4" });
      }
    );

    //  When destruct dispose the player
    return () => player.dispose();
  }, [videoKey]);

  return <div ref={videoContainer} />;
};
