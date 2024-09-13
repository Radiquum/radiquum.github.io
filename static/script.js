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

window.onload = () => {
  updatePlayingTrack();
  setInterval(updatePlayingTrack, 360000);
}
