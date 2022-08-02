//referencias al DOM
const menu = document.getElementById('menu');
const mode = document.getElementById('mode');
const container = document.getElementById('container');
const nav = document.querySelector('.nav');
const closeMenu = document.getElementById('closeMenu');

//features
const navFeatures = document.querySelector('.nav-flex__items');
const featuresTitle = document.getElementById('featuresTitle');

//company
const navCompany = document.querySelector('.compay__items');
const companyTitle = document.getElementById('company');


//menu Desktop features
const menuDesktop = document.getElementById('featuresTitle2');
const showFeaturesDesktop = document.querySelector('.nav-flex__items2');

//menu desktop company
const menuCompanyDesktop = document.getElementById('company2');
const showCompanyDesktop = document.querySelector('.compay__items2');

//onclick menu
menu.addEventListener('click', () => {
  nav.style.display = 'block';
})

//onclick closeMenu
closeMenu.addEventListener('click', () => {
  nav.style.display = 'none';
})

//features onclick
let i = 1;
featuresTitle.addEventListener('click', () => {
  if(i){
    navFeatures.style.display = 'block';
    i--;
  } else {
    navFeatures.style.display = 'none'
    i++;
  }
})

//company onclick
let j = 1;
companyTitle.addEventListener('click', () => {
  if(j){
    navCompany.style.display = 'block';
    j--;
  } else {
    navCompany.style.display = 'none'
    j++;
  }
})

//dark mode & light mode 
let dark = 1;
mode.addEventListener('click', () => {
  const button = document.getElementById('button');
  const modeLight = document.querySelector('.darkLight');
  const btnRegister = document.getElementById('btnRegister');
  const titleContent = document.getElementById('titleContent');
  const titleLogo = document.getElementById('titleLogo');
  if(dark) {
    container.style.backgroundColor = '#000';
    container.style.color = '#fff';
    button.style.backgroundColor = '#fff';
    button.style.color = '#000';
    modeLight.setAttribute('src', './images/light-mode.png');
    nav.style.backgroundColor = '#000';
    titleContent.style.color = '#fff';
    titleLogo.style.color = '#fff'
    btnRegister.style.backgroundColor = '#686868';
    btnRegister.style.color = '#fff';
    dark--;
  } else {
    container.style.backgroundColor = '#fff';
    titleLogo.style.color = '#000';
    titleContent.style.color = '#000';
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
    modeLight.setAttribute('src', './images/night-mode.png');
    nav.style.backgroundColor = '#fff';
    btnRegister.style.backgroundColor = '#fff';
    btnRegister.style.color = '#686868';
    dark++;
  }
})


//menu desktop features
let m = 1;
menuDesktop.addEventListener('click', () => {
  if(m){
    showFeaturesDesktop.style.display = 'grid';
    showFeaturesDesktop.style.placeItems = 'center';
    m--;
  } else {
    showFeaturesDesktop.style.display = 'none';
    m++;
  }
})


//menu desktop company
let u = 1;
menuCompanyDesktop.addEventListener('click', () => {
  if(u){
    showCompanyDesktop.style.display = 'grid';
    showCompanyDesktop.style.placeItems = 'center';
    u--;
  } else {
    showCompanyDesktop.style.display = 'none';
    u++;
  }
})