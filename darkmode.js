// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('.dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  document.getElementById('light').classList.add('disable')
  document.getElementById('dark').classList.remove('disable')

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.getElementById('dark').classList.add('disable')
  document.getElementById('light').classList.remove('disable')

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
