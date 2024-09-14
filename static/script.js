function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const SYMBOL_DELAY = 150;

function deletePreviousTrack(newTrackName) {
  const trackName = document.getElementById("track-name");
  const prevTrackNameLen = trackName.innerHTML.length;
  trackName.style.setProperty("--cursor-animation", "none");

  let removed = 0;
  const interval = setInterval(() => {
    removed += 1;
    trackName.innerHTML = trackName.innerHTML.substring(
      0,
      prevTrackNameLen - removed
    );

    if (removed == prevTrackNameLen - 1) {
      clearInterval(interval);
      updateTrack(newTrackName);
      return true;
    }
  }, SYMBOL_DELAY);
}

function updateTrack(newTrackName) {
  const trackName = document.getElementById("track-name");
  const TrackNameLen = newTrackName.length;

  let added = 0;
  const interval = setInterval(() => {
    if (added < TrackNameLen) {
      trackName.innerHTML += newTrackName[added];
      console.log(added, TrackNameLen, newTrackName[added]);
      added += 1;
    }

    if (added == TrackNameLen) {
      clearInterval(interval);
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

const header = document.getElementById("header");
let last_Y_pos = 0;
let header_opacity = 0;

window.onscroll = () => {
  let scrollPosition = getScrollPosition();

  if (scrollPosition < 1) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }

  if (window.scrollY > last_Y_pos && scrollPosition > 1) {
    header_opacity += 0.1;
  } else if (window.scrollY < last_Y_pos && scrollPosition < 1)
    header_opacity -= 0.1;
  last_Y_pos = window.scrollY;

  if (header_opacity > 1) {
    header_opacity = 1;
  } else if (header_opacity < 0) {
    header_opacity = 0;
  }

  header.style.setProperty("--header-opacity", `${header_opacity.toFixed(2)}`);
};
