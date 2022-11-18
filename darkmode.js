// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('.dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');

  document.getElementById('sun').style.visibility='visible';
  document.getElementById('moon').style.visibility='hidden';

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');

  document.getElementById('sun').style.visibility='hidden';
  document.getElementById('moon').style.visibility='visible';

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
