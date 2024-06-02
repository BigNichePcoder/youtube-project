import {profiles} from './profile.js';
import { veiwsCalc } from './calculateviews.js';
import '../app/claculateTime.js'

function generateHtml() {
  let htmlGen = '';

  profiles.forEach(profile => {
    
    htmlGen += ` <div class="view-container">
    <div class="grid-imgcon">
    <img src="${profile.image}" alt="" class="grid-imgcon__image">
    <div class="grid-imgcon__time">${profile.time}</div>
  </div>
  <div class="profile">
    <div class="profile__desc">
    <div class="profile__dp-con">
      <img src="${profile.displayPics}" alt="" class="dp-img">
    </div>
    <div class="write">
  <div class="profile__title">${profile.title}</div>
  <div class="views-day-con">
    <div class="username">${profile.username} <span class="dot">&#x2022; </span></div>
  <div class="views">${profile.viewsFormat()} views &#x2022;  <span class="span days">${profile.getDays()} ago</span></div>
</div>
</div>
</div>
</div>
</div>`
  })
  document.querySelector('.js-grid-container').innerHTML = htmlGen;
}

generateHtml();

const mediaQuery = window.matchMedia("(max-width: 43.74em)");

if (mediaQuery.matches) {
  const searchBtn = document.querySelector('.js-nav__searchbtn');
  
  searchBtn.addEventListener('click', () => {
   const search = document.querySelector('.search');
  search.placeholder = "Search YouTube";                      
  document.querySelector('.arrow').classList.add('show')

  document.querySelector('nav').classList.add('colorchange')

   search.classList.add('search_width');
   console.log('width');
   searchBtn.classList.add('searchBtn_click')
   document.querySelector('.nav__youtubelogo')
  .classList.add('hide');
  document.querySelector('.nav__nameinitials')
  .classList.add('hide');
  document.querySelector('.nav__voice')
  .classList.add('shown_voice');




  })


  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 350) {
      document.querySelector('main')
      .classList.add('padding');

     document.querySelector('header')
      .classList.add('move'); 

    }else {
      document.querySelector('main')
      .classList.remove('padding')
      document.querySelector('header')
      .classList.remove('move');
    }
  })
}