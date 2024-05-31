import {profiles} from './profile.js';


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
  <div class="views">${profile.views}M views &#x2022;  <span class="span days">${profile.days} days ago</span></div>
</div>
</div>
</div>
</div>
</div>`
  })
  document.querySelector('.js-grid-container').innerHTML = htmlGen;
}

generateHtml();