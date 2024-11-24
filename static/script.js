// Animation durations in ms
const SONG_CHANGE_DELAY = 180000;
const SYMBOL_DELAY = 150;

const IMAGE_CHANGE_DELAY = 6000;
const IMAGE_ANIMATION_DELAY = 1000;
const IMAGE_TRANSITION_DELAY = 1000;

// Header percentages
const HEADER_ACTIVATION_PERCENT = 0.4;
const HEADER_DEACTIVATION_PERCENT = 0.8;

// THIS IS NOT CONSTANTS, BUT A GLOBAL VAR FOR TIMERS IN SONG NAME CHANGE!!!
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

    if (removed == prevTrackNameLen) {
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

  fetch("https://lastfm-last-played.biancarosa.com.br/radiquum/latest-song")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error Fetching Data");
      }
      return res.json();
    })
    .then((data) => {
      if (
        prevTrackName != `${data.track.artist["#text"]} - ${data.track.name}`
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

const header = document.getElementById("header");
let last_Y_pos = 0;
let header_opacity = 0;

window.onscroll = () => {
  let landingBlock = document.getElementById("landing").clientHeight;

  if (window.scrollY < (landingBlock * HEADER_ACTIVATION_PERCENT)) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }

  if (window.scrollY > last_Y_pos && window.scrollY > (landingBlock * HEADER_ACTIVATION_PERCENT)) {
    header_opacity += 0.1;
  } else if (window.scrollY < last_Y_pos && window.scrollY < (landingBlock * HEADER_DEACTIVATION_PERCENT)) {
    header_opacity -= 0.1;
  }

  if (header_opacity > 1) {
    header_opacity = 1;
  } else if (header_opacity < 0) {
    header_opacity = 0;
  }

  last_Y_pos = window.scrollY;

  header.style.setProperty("--header-opacity", `${header_opacity.toFixed(2)}`);
};

function setPhotoSectionImagesMargin() {
  const photoSectionImages = document.querySelectorAll("[data-section-image='photos']")
  for (i = 0; i < photoSectionImages.length; i++) {
    photoSectionImages[i].style.setProperty("--transform-duration", `${IMAGE_TRANSITION_DELAY}ms`)
  }
  for (i = 1; i < photoSectionImages.length; i++) {
    photoSectionImages[i].style.setProperty("--transform-y", `calc(376px*-${i})`)
    photoSectionImages[i].style.setProperty("display", `none`)
  }
}

function changePhotoSectionImage() {
  const photoSectionImages = document.querySelectorAll("[data-section-image='photos']")
  const photoSectionContainer = document.getElementById("photos-image")
  photoSectionImages[1].style.setProperty("display", `block`)

  setTimeout(() => {
    photoSectionImages[0].style.setProperty("--transform-y", `376px`)
    photoSectionImages[1].style.setProperty("--transform-y", `0px`)
  }, IMAGE_TRANSITION_DELAY / 2)

  setTimeout(() => {
    photoSectionImages[0].style.setProperty("display", `none`)
    const backEl = document.querySelector(`[data-section-image='photos'][data-slide='0']`).cloneNode(true)
    photoSectionContainer.removeChild(document.querySelector(`[data-section-image='photos'][data-slide='0']`))
    backEl.setAttribute('data-slide', photoSectionImages.length - 1)
    photoSectionContainer.appendChild(backEl)
  }, (IMAGE_ANIMATION_DELAY + IMAGE_TRANSITION_DELAY))

  setTimeout(() => {
    const photoSectionImagesRev = document.querySelectorAll("[data-section-image='photos']")
    for (i = 1; i < photoSectionImagesRev.length; i++) {
      const element = document.querySelector(`[data-section-image='photos'][data-slide='${i}']`)
      element.style.setProperty("--transform-y", `calc(376px*-${Number(element.getAttribute('data-slide')) - 1})`)
      element.setAttribute('data-slide', Number(element.getAttribute('data-slide')) - 1)
    }
  }, (IMAGE_ANIMATION_DELAY + (IMAGE_TRANSITION_DELAY + 500)))
}

window.onload = () => {
  updatePlayingTrack();
  setInterval(updatePlayingTrack, 180000);
  setPhotoSectionImagesMargin()
  setInterval(changePhotoSectionImage, IMAGE_CHANGE_DELAY);
};