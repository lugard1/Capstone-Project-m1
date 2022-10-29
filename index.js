const hamburgerBtn = document.querySelector('.icon-menu-mobile img');
const crossBtn = document.querySelector('.cross img');
const mobileMenu = document.querySelector('.nav-mobile');
const mobileMenuElements = document.querySelectorAll('.nav-mobile .container li');
const testimonialContainer = document.querySelector('.testimonial-container');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburgerBtn.style.display = 'block';
});

mobileMenuElements.forEach((menuElement) => {
  menuElement.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  });
});

const testimonialObjs = [
  {
    name: 'Yochai Benkler',
    comment: '3ple Tech Academy built my business website and it is fantastic',
    city: 'Jerusalem',
    country: 'Israel',
    image: 'images/images2/speaker_01.png',
    imagedescription: 'client1',
  },
  {
    name: 'Julia Leda',
    comment: 'Ever since my business webpage was built and launched by 3ple Tech Academy, it has been success stories all the way',
    city: 'Lisborn',
    country: 'Portugal',
    image: 'images/images2/speaker_05.png',
    imagedescription: 'client2',
  },
  {
    name: 'Kilnam Chon',
    comment: 'it has been nice doing business with 3ple Tech Academy',
    city: 'Shanghai',
    country: 'China',
    image: 'images/images2/speaker_06.png',
    imagedescription: 'client3',
  },
  {
    name: 'Ryan Merkel',
    comment: 'I have been so happy ever since my project was coded by 3ple Tech Academy. I recommend them.',
    city: 'Hamburg',
    country: 'Germany',
    image: 'images/images2/speaker_03.png',
    imagedescription: 'client4',
  },
  {
    name: 'SohYeong Noh',
    comment: 'What are you waiting for? Go to 3ple Tech Academy and thank me later',
    city: 'Dehli',
    country: 'India',
    image: 'images/images2/speaker_02.png',
    imagedescription: 'client5',
  },
  {
    name: 'Lila Tretikov',
    comment: 'The experience working with 3ple Tech Academy has been hilarious',
    city: 'Moscow',
    country: 'Russia',
    image: 'images/images2/speaker_04.png',
    imagedescription: 'client6',
  },
];
let content = '';
testimonialObjs.forEach((testimonialObj) => {
  content += `<div class="testimonial-card">
   <div class="testimonial-image">
       <img src="${testimonialObj.image}" alt="${testimonialObj.imagedescription}">
   </div>
   <div class="testimonial-content">
       <h2>${testimonialObj.name}</h2>
       <h4>"${testimonialObj.comment}"
       </h4>
       <p>From ${testimonialObj.city}, ${testimonialObj.country}</p>
   </div>
</div>`;
});

testimonialContainer.innerHTML += content;
