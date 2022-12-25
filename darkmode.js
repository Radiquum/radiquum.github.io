// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('.dark-mode-toggle');

let random_nmb = Math.floor(Math.random() * 655255) + 1; 

const enableDarkMode = () => {
  document.body.classList.add('darkmode');

  document.getElementById('sun').style.visibility='visible';
  document.getElementById('moon').style.visibility='hidden';
  document.getElementById('music-badge').src="https://img.shields.io/endpoint?color=ffffff&url=https://lastfm-last-played.biancarosa.com.br/Radiquum/latest-song?format=shields.io&style=for-the-badge&label=%20&nocache=" + random_nmb;

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');

  document.getElementById('sun').style.visibility='hidden';
  document.getElementById('moon').style.visibility='visible';
  document.getElementById('music-badge').src="https://img.shields.io/endpoint?color=ffaecc&url=https://lastfm-last-played.biancarosa.com.br/Radiquum/latest-song?format=shields.io&style=for-the-badge&label=%20&nocache=" + random_nmb;

  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
