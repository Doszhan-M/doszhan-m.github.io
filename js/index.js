window.addEventListener('load', slider => {

// Find buttons
const btnLeft = document.querySelector('.btn_left')
const btnRight = document.querySelector('.btn_right')

// Find images
const slaider = document.querySelector('.slaider')
const images = document.querySelectorAll('.slaider img')

// Calculate image width for step
const stepSize = images[0].clientWidth

// Move picture
let counter = 0; // счетчик

btnRight.addEventListener('click', () => {
  // Если counter равен длине картинок, то обнуляем счетчик.
  if (counter >= images.length - 3) {counter = -1}
  counter++; 
  slaider.style.transform = 'translateX(' + `${-(stepSize) * counter}px)`;
})

btnLeft.addEventListener('click', () => {
  if (counter <= 0) { counter = images.length -2}
  counter--;
  slaider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
})
})







