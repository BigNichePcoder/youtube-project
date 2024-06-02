import { veiwsCalc } from "./calculateviews.js";

class Profile {
  image;
  displayPics;
  title;
  username;
  time;
  views;
  days;
  hours;
  constructor(profileDetails) {
    this.image = profileDetails.image;
    this.displayPics = profileDetails.displayPics;
    this.title = profileDetails.title;
    this.username = profileDetails.username;
    this.time = profileDetails.time;
    this.views = profileDetails.views;
  }

  viewsFormat() {
    return `${veiwsCalc(this.views)}`
  }
  
}

export const profiles = [{
  image: 'images/pictures/burna.jpg',
  time: '1:01',
  displayPics: 'images/dp/channels4_profile.jpg',
  title: 'TitoM, Yuppe and Burna Boy - Tshwala Bam Remix',
  username: 'Tito',
  views: 2600000,
  days: 10,
},
  {
  image: 'images/pictures/chike.webp',
  time: '0:03',
  displayPics: 'images/dp/unnamed (1).jpg',
  title: 'Chike Performes Live in Madison square',
  username: 'Chike',
  views: 66000,
  days: 0,
  hours: 2,
  },
  {
    image: 'images/pictures/aryaStar.webp',
    time: '2:30',
    displayPics: 'images/dp/arya.jpg',
    title: 'Arya Starr- Last Heartbreak Song ft.Giveon(Official Lyric Video)',
    username: 'Ayra Starr',
    views: 4300000,
    days: 18,
  },{
    image: 'images/pictures/ten.webp',
    time: '1:33',
    displayPics: 'images/dp/ten.jpg',
    title: 'Sophisticated Fun (A CInematic Fashion Film',
    username: 'Tenfold Production',
    views: 144,
    days: 7,
    hours: 2,
  },
  {
    image: 'images/pictures/html.webp',
    time: '11:00',
    displayPics: 'images/dp/html.jpg',
    title: 'How Much HTML, CSS & Javascript Is Enough?| Realistic Expectations',
    username: 'Chris Sean',
    views: 853000,
    days: 1,
    hours: 2,
  },
  {
    image: 'images/pictures/kiss daniel.webp',
    time: '2:51',
    displayPics: 'images/dp/kiss.jpg',
    title: 'Kizz Daniel- Doble (Official Visualizer)',
    username: 'Kizz Daniel',
    views: 26900,
    days: 18,
    hours: 2,
  },
  {
    image: 'images/pictures/asake.webp',
    time: '2:46',
    displayPics: 'images/dp/asake.jpg',
    title: 'Asake & H.E.R - Lonely At The Top (Accoustic) [Official Video]',
    username: 'Asake',
    views: 1000000000,
    days: 6,
    hours: 2,
  },  
  {
    image: 'images/pictures/ghana.webp',
    time: '11:45',
    displayPics: 'images/dp/ghana.jpg',
    title: '5 Ways to Make Money Online in Africa (Ghana, NIgeria, etc)',
    username: 'Alfred Nkansah',
    views: 1,
    days: 5,
    hours: 2,
  },
  {
    image: 'images/pictures/agt.webp',
    time: '9:46',
    displayPics: 'images/dp/agt.jpg',
    title: 'Richard Goodall Receives The GOLDEN BUZZER for "Dont stop Believing"|...',
    username: 'America\'s Got Talent',
    views: 10000,
    days: 2,
    hours: 2,
  },  {
    image: 'images/pictures/make.webp',
    time: '11:00',
    displayPics: 'images/dp/make.jpg',
    title: 'How to Make a Cheap Camera Cinematic',
    username: 'Zachary',
    views: 2000,
    days: 2,
    hours: 2,
  },
  {
    image: 'images/pictures/html.webp',
    time: '11:00',
    displayPics: 'images/dp/html.jpg',
    title: 'How Much HTML, CSS & Javascript Is Enough?| Realistic Expectations',
    username: 'Chris Sean',
    views: 40000,
    days: 1,
    hours: 2,
  },
  {
    image: 'images/pictures/kiss daniel.webp',
    time: '2:51',
    displayPics: 'images/dp/kiss.jpg',
    title: 'Kizz Daniel- Doble (Official Visualizer)',
    username: 'Kizz Daniel',
    views: 370000,
    days: 18,
    hours: 2,
  },
  {
    image: 'images/pictures/asake.webp',
    time: '2:46',
    displayPics: 'images/dp/asake.jpg',
    title: 'Asake & H.E.R - Lonely At The Top (Accoustic) [Official Video]',
    username: 'Asake',
    views: 237000000,
    days: 6,
    hours: 2,
  },  
].map(profileDetails => {
  return new Profile(profileDetails)
})
console.log(profiles)
