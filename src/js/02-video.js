import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function(data) {
   let currentTime = data.seconds;
    
   localStorage.setItem("videoplayer-current-time", currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
