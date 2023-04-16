const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// 1: prompt the user to select media stream
// 2: pass the video element
// 3: start {play}

let pictureInPictureWindow = null;

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("oops, the was an error", error);
  }
};

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // start Pic to Pic
  pictureInPictureWindow = await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

selectMediaStream();
