function updatePlayingTrack() {
  const trackName = document.getElementById("track-name");

  fetch("https://lastfm-last-played.biancarosa.com.br/radiquum/latest-song")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error Fetching Data");
      }
      return res.json();
    })
    .then((data) => {
      trackName.innerHTML = `"${data.track.artist['#text']} - ${data.track.name}"`;
    })
    .catch((err) => {
      trackName.innerHTML = "\"ERROR: last.fm is not reachable\"";
      console.log(err);
    });
}

function getScrollPosition () {
  const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const windowScroll = document.documentElement.scrollTop;
    const scrolled = (windowScroll / height) * 100;
    return Math.floor(scrolled)
}

window.onload = () => {
  updatePlayingTrack();
  setInterval(updatePlayingTrack, 360000);
}
const header = document.getElementById("header")
let last_Y_pos = 0
let header_opacity = 0

window.onscroll = () => {
  let scrollPosition = getScrollPosition()
  console.log(last_Y_pos, window.scrollY, scrollPosition, header_opacity)

  if (scrollPosition < 1) {
    header.style.display = "none"
  } else {
    header.style.display = "block"
  }


  if ((window.scrollY > last_Y_pos) && (scrollPosition > 1)) {
    header_opacity += 0.1
  } else if ((window.scrollY < last_Y_pos) && (scrollPosition < 1)) (
    header_opacity -= 0.1
  )
  last_Y_pos = window.scrollY

  if (header_opacity > 1) {
    header_opacity = 1
  } else if (header_opacity < 0) {
    header_opacity = 0
  }

  header.style.setProperty("--header-opacity", `${header_opacity.toFixed(2)}`)
}