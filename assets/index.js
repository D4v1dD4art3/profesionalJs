import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.getElementById("buttonPaused");
const isMuted = document.getElementById("isMuted");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()],
});
button.onclick = () => player.toggle();
isMuted.onclick = () => player.toggleMuted();
