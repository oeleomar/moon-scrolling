let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let mountainsBehind = document.querySelector('#mountains_behind');
let mountainsFront = document.querySelector('#mountains_front');

let title = document.querySelector('#title');
let btn = document.querySelector('#btn');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value + 'px';
  mountainsBehind.style.top = value * 0.5 + 'px';
  mountainsFront.style.top = value * 0 + 'px';

  title.style.marginRight = value * 3 + 'px';
  title.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  
  header.style.top = value * 0.5 + 'px';
});