// Animation durations in ms
const SONG_CHANGE_DELAY = 180000;
const SYMBOL_DELAY = 150;

const IMAGE_CHANGE_DELAY = 6000;
const ARTS_CHANGE_DELAY = 6500;
const IMAGE_ANIMATION_DELAY = 1000;
const IMAGE_TRANSITION_DELAY = 1000;

// Header percentages
const HEADER_ACTIVATION_PERCENT = 0.8;

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
const landingBlock = document.getElementById("landing");

window.onscroll = () => {
  const current_Y_pos = window.scrollY;

  if (
    current_Y_pos >
    Math.floor(landingBlock.clientHeight * HEADER_ACTIVATION_PERCENT)
  ) {
    header.style.setProperty("--tw-translate-y", "0%");
  } else {
    header.style.setProperty("--tw-translate-y", "-100%");
  }
};

function setPhotoSectionImagesMargin() {
  const photoSectionImages = document.querySelectorAll(
    "[data-section-image='photos']"
  );
  for (i = 0; i < photoSectionImages.length; i++) {
    photoSectionImages[i].style.setProperty(
      "--transform-duration",
      `${IMAGE_TRANSITION_DELAY}ms`
    );
  }
  for (i = 1; i < photoSectionImages.length; i++) {
    photoSectionImages[i].style.setProperty(
      "--transform-y",
      `calc(372px*-${i})`
    );
    photoSectionImages[i].style.setProperty("display", `none`);
  }
}

function changePhotoSectionImage() {
  const photoSectionImages = document.querySelectorAll(
    "[data-section-image='photos']"
  );
  const photoSectionContainer = document.getElementById("photos-image");
  photoSectionImages[1].style.setProperty("display", `block`);

  setTimeout(() => {
    photoSectionImages[0].style.setProperty("--transform-y", `372px`);
    photoSectionImages[1].style.setProperty("--transform-y", `0px`);
  }, IMAGE_TRANSITION_DELAY / 2);

  setTimeout(() => {
    photoSectionImages[0].style.setProperty("display", `none`);
    const backEl = document
      .querySelector(`[data-section-image='photos'][data-slide='0']`)
      .cloneNode(true);
    photoSectionContainer.removeChild(
      document.querySelector(`[data-section-image='photos'][data-slide='0']`)
    );
    backEl.setAttribute("data-slide", photoSectionImages.length - 1);
    photoSectionContainer.appendChild(backEl);
  }, IMAGE_ANIMATION_DELAY + IMAGE_TRANSITION_DELAY);

  setTimeout(() => {
    const photoSectionImagesRev = document.querySelectorAll(
      "[data-section-image='photos']"
    );
    for (i = 1; i < photoSectionImagesRev.length; i++) {
      const element = document.querySelector(
        `[data-section-image='photos'][data-slide='${i}']`
      );
      element.style.setProperty(
        "--transform-y",
        `calc(372px*-${Number(element.getAttribute("data-slide")) - 1})`
      );
      element.setAttribute(
        "data-slide",
        Number(element.getAttribute("data-slide")) - 1
      );
    }
  }, IMAGE_ANIMATION_DELAY + (IMAGE_TRANSITION_DELAY + 500));
}

function setArtsSectionImagesMargin() {
  const artSectionImages = document.querySelectorAll(
    "[data-section-image='arts']"
  );
  for (i = 0; i < artSectionImages.length; i++) {
    artSectionImages[i].style.setProperty(
      "--transform-duration",
      `${IMAGE_TRANSITION_DELAY}ms`
    );
  }
  for (i = 1; i < artSectionImages.length; i++) {
    artSectionImages[i].style.setProperty(
      "--transform-y",
      `calc(186px*-${i})`
    );
    artSectionImages[i].style.setProperty("display", `none`);
  }
}

function changeArtsSectionImage() {
  const artSectionImages = document.querySelectorAll(
    "[data-section-image='arts']"
  );
  const artSectionContainer = document.getElementById("arts-image");
  artSectionImages[1].style.setProperty("display", `block`);

  setTimeout(() => {
    artSectionImages[0].style.setProperty("--transform-y", `186px`);
    artSectionImages[1].style.setProperty("--transform-y", `0px`);
  }, IMAGE_TRANSITION_DELAY / 2);

  setTimeout(() => {
    artSectionImages[0].style.setProperty("display", `none`);
    const backEl = document
      .querySelector(`[data-section-image='arts'][data-slide='0']`)
      .cloneNode(true);
    artSectionContainer.removeChild(
      document.querySelector(`[data-section-image='arts'][data-slide='0']`)
    );
    backEl.setAttribute("data-slide", artSectionImages.length - 1);
    artSectionContainer.appendChild(backEl);
  }, IMAGE_ANIMATION_DELAY + IMAGE_TRANSITION_DELAY);

  setTimeout(() => {
    const artSectionImagesRev = document.querySelectorAll(
      "[data-section-image='arts']"
    );
    for (i = 1; i < artSectionImagesRev.length; i++) {
      const element = document.querySelector(
        `[data-section-image='arts'][data-slide='${i}']`
      );
      element.style.setProperty(
        "--transform-y",
        `calc(186px*-${Number(element.getAttribute("data-slide")) - 1})`
      );
      element.setAttribute(
        "data-slide",
        Number(element.getAttribute("data-slide")) - 1
      );
    }
  }, IMAGE_ANIMATION_DELAY + (IMAGE_TRANSITION_DELAY + 500));
}

window.onload = () => {
  updatePlayingTrack();
  setInterval(updatePlayingTrack, 180000);
  setPhotoSectionImagesMargin();
  setInterval(changePhotoSectionImage, IMAGE_CHANGE_DELAY);
  setArtsSectionImagesMargin();
  setInterval(changeArtsSectionImage, ARTS_CHANGE_DELAY);
};
