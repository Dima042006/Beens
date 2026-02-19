const audio = new Audio("https://dima042006.github.io/Beens/2026-02-17%2013.59.44.mp3");
audio.preload = "auto";

const playButton = document.getElementById("playbutton");
const stopButton = document.getElementById("stopbutton");
const lottieContainer = document.getElementById("placebutton");

if (playButton && stopButton && lottieContainer) {

  let isPlaying = false;

  const animation = lottie.loadAnimation({
    container: lottieContainer,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "https://dima042006.github.io/Beens/Untitled%20file.json"
  });

  function togglePlayer() {
    if (!isPlaying) {
      audio.play();
      animation.play();
      isPlaying = true;
    } else {
      audio.pause();
      animation.pause();
      isPlaying = false;
    }
  }

  playButton.addEventListener("click", togglePlayer);
  stopButton.addEventListener("click", togglePlayer);

  audio.addEventListener("ended", () => {
    animation.stop();
    isPlaying = false;
  });

}
