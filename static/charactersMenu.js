function showMenu() {
  const downloadBtn_icon = document.getElementById("downloadBtn_icon");
  const downloadMenu = document.getElementById("downloadMenu");

  if (
    downloadBtn_icon.src ==
    `${window.location.origin}/static/assets/icon--download.svg`
  ) {
    downloadBtn_icon.src = `${window.location.origin}/static/assets/icon--cancel.svg`;
  } else {
    downloadBtn_icon.src = `${window.location.origin}/static/assets/icon--download.svg`;
  }

  downloadMenu.classList.toggle("scale-0")
  downloadMenu.classList.toggle("-rotate-90")
  downloadMenu.classList.toggle("translate-x-4")
}
