function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const SYMBOL_DELAY = 150;
let DELETE_INTERVAL = null;
let UPDATE_INTERVAL = null;

function deletePreviousTrack(newTrackName) {
  const trackName = document.getElementById("track-name");
  const prevTrackNameLen = trackName.innerHTML.length;
  trackName.style.setProperty("--cursor-animation", "none");
  clearInterval(DELETE_INTERVAL);
  clearInterval(UPDATE_INTERVAL);

  let removed = 0;
  DELETE_INTERVAL = setInterval(() => {
    removed += 1;
    trackName.innerHTML = trackName.innerHTML.substring(
      0,
      prevTrackNameLen - removed
    );

    if (removed == prevTrackNameLen - 1) {
      clearInterval(DELETE_INTERVAL);
      updateTrack(newTrackName);
      return true;
    }
  }, SYMBOL_DELAY);
}

function updateTrack(newTrackName) {
  const trackName = document.getElementById("track-name");
  const TrackNameLen = newTrackName.length;
  clearInterval(DELETE_INTERVAL);
  clearInterval(UPDATE_INTERVAL);

  let added = 0;
  UPDATE_INTERVAL = setInterval(() => {
    if (added < TrackNameLen) {
      trackName.innerHTML += newTrackName[added];
      added += 1;
    }

    if (added == TrackNameLen) {
      clearInterval(UPDATE_INTERVAL);
      setTimeout(() => {
        trackName.innerHTML += '"';
      }, SYMBOL_DELAY);
      trackName.style.setProperty("--cursor-animation", "blink");
      setTimeout(() => {
        trackName.style.setProperty("--cursor-color", "transparent");
      }, SYMBOL_DELAY * 3);
      return true;
    }
  }, SYMBOL_DELAY);
}

async function updatePlayingTrack() {
  const trackName = document.getElementById("track-name");
  const prevTrackName = trackName.innerHTML;
  const prevTrackNameLen = trackName.innerHTML.length;

  fetch("https://lastfm-last-played.biancarosa.com.br/radiquum/latest-song")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error Fetching Data");
      }
      return res.json();
    })
    .then((data) => {
      if (
        prevTrackName != `"${data.track.artist["#text"]} - ${data.track.name}"`
      ) {
        trackName.style.setProperty("--cursor-color", "#fff");
        trackName.style.setProperty("--cursor-animation", "blink");

        setTimeout(() => {
          deletePreviousTrack(
            `${data.track.artist["#text"]} - ${data.track.name}`
          );
        }, SYMBOL_DELAY * 4);
      }
    })
    .catch((err) => {
      deletePreviousTrack("ERROR: last.fm is not reachable");
      console.log(err);
    });
}

window.onload = () => {
  updatePlayingTrack();
  setInterval(updatePlayingTrack, 180000);
};

function getScrollPosition() {
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const windowScroll = document.documentElement.scrollTop;
  const scrolled = (windowScroll / height) * 100;
  return Math.floor(scrolled);
}

function getBlockScrollPosition(block_id) {
  const blockHeight = document.getElementById(block_id).clientHeight;
  const fullPageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const restPageHeight = fullPageHeight - blockHeight;
  const windowScroll = document.documentElement.scrollTop - restPageHeight;
  const scrolled = (windowScroll / fullPageHeight) * 100;
  if (0 < Math.floor(scrolled) ) {
    return 0
  } else {
    return Math.floor(scrolled) * -1;
  }
}

const header = document.getElementById("header");
let last_Y_pos = 0;
let header_opacity = 0;
const HEADER_ACTIVATION_PERCENT = 30;
const HEADER_DEACTIVATION_PERCENT = 20;

window.onscroll = () => {
  let scrollPosition = getBlockScrollPosition('section_landing');
  if (scrollPosition > HEADER_ACTIVATION_PERCENT) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }

  if (window.scrollY > last_Y_pos && scrollPosition < HEADER_ACTIVATION_PERCENT) {
    header_opacity += 0.1;
  } else if (window.scrollY < last_Y_pos && scrollPosition > HEADER_DEACTIVATION_PERCENT)
    header_opacity -= 0.1;
  last_Y_pos = window.scrollY;

  if (header_opacity > 1) {
    header_opacity = 1;
  } else if (header_opacity < 0) {
    header_opacity = 0;
  }

  header.style.setProperty("--header-opacity", `${header_opacity.toFixed(2)}`);
};
