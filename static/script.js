// Animation durations in ms
const SONG_CHANGE_DELAY = 180000;

const IMAGE_CHANGE_DELAY = 6000;
const ARTS_CHANGE_DELAY = 6500;
const IMAGE_ANIMATION_DELAY = 1000;
const IMAGE_TRANSITION_DELAY = 1000;

// Header percentages
const HEADER_ACTIVATION_PERCENT = 0.8;

async function updatePlayingTrack() {

  const images = document.querySelectorAll("#lastfm_image");
  const state = document.getElementById("lastfm_state");
  const title = document.getElementById("lastfm_title");
  const artist = document.getElementById("lastfm_artist");
  const album = document.getElementById("lastfm_album");
  const link = document.getElementById("lastfm_songlink");

  fetch("https://lastfm-last-played.biancarosa.com.br/radiquum/latest-song")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error Fetching Data");
      }
      return res.json();
    })
    .then((data) => {
      if (
        title.innerHTML != data.track.name
      ) {

        if (!data.track) throw new Error("No track is provided");
        if (data.track.hasOwnProperty("image") && data.track.image.length > 0) {
          images.forEach((img) => {img.src = data.track.image[data.track.image.length - 1]["#text"]});
        } else {
          images.forEach((img) => {img.src = "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"});
        }
        if (data.track.hasOwnProperty("@attr") && data.track["@attr"].nowplaying) {
          state.src = "./static/material-symbols--play-arrow.svg";
          state.alt = "Playing";
        } else {
          state.src = "./static/material-symbols--pause.svg";
          state.alt = "Paused";
        }
        if (data.track.hasOwnProperty("album")) {
          album.innerHTML = data.track.album["#text"];
        } else {
          album.innerHTML = "";
        }
        if (data.track.hasOwnProperty("artist")) {
          artist.innerHTML = data.track.artist["#text"];
        } else {
          artist.innerHTML = "";
        }
        title.innerHTML = data.track.name;
        link.href = data.track.url
      }
    })
    .catch((err) => {
      console.log("lastfm is unreachable:", err);
      return
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
  setInterval(updatePlayingTrack, SONG_CHANGE_DELAY);
  setPhotoSectionImagesMargin();
  setInterval(changePhotoSectionImage, IMAGE_CHANGE_DELAY);
  setArtsSectionImagesMargin();
  setInterval(changeArtsSectionImage, ARTS_CHANGE_DELAY);
};
