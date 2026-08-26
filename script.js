const video = document.getElementById("video");
const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", function () {
    video.muted = !video.muted;

    if (video.muted) {
        muteBtn.textContent = "🔇";
    } else {
        muteBtn.textContent = "🔊";
    }
});