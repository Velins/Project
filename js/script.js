const carousel = document.querySelectorAll('.carousel');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Карусель зображень

// Початковий активний слайд
let activeSlideIndex = 0;

// Функція для встановлення активного слайда
function setActiveSlide(index) {
  // Приховуємо всі слайди
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Відображаємо активний слайд
  slides[index].style.display = 'flex';

  // Оновлюємо активну крапку
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  // Оновлюємо змінну активного слайда
  activeSlideIndex = index;
}

// Обробник кліку на крапку
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    setActiveSlide(index);
  });
});

// Обробник кліку на кнопку "Назад"
prevBtn.addEventListener('click', () => {
  const prevIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
  setActiveSlide(prevIndex);
});

// Обробник кліку на кнопку "Вперед"
nextBtn.addEventListener('click', () => {
  const nextIndex = (activeSlideIndex + 1) % slides.length;
  setActiveSlide(nextIndex);
});
//

const Main = document.getElementById('Main');
const section1 = document.querySelector('.carousel');

Main.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const aboutus = document.getElementById('About-us');
const section2 = document.querySelector('.about-us');

aboutus.addEventListener('click', () => {
  section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const sale = document.getElementById('Sale');
const section3 = document.querySelector('.sale');

sale.addEventListener('click', () => {
  section3.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const contacts = document.getElementById('Contacts');
const section4 = document.querySelector('footer');

contacts.addEventListener('click', () => {
  section4.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const mblock = document.querySelector('.about-us');
const slideBlock1 = document.querySelector('.about-us-text-1');
const slideBlock2 = document.querySelector('.about-us-photo');

function slideIn() {
  // Отримайте розмір вікна перегляду
  const windowHeight = window.innerHeight;

  // Отримайте положення верхньої межі блоку відносно вікна перегляду
  const slideTop = mblock.getBoundingClientRect().top;

  // Порахуйте коли має відбутися анімація (наприклад, коли верхня межа блоку перевищує половину вікна перегляду)
  const animationPoint = windowHeight / 2;

  // Перевірте, чи блок ще не був анімований та чи досягнута точка анімації
  if (!slideBlock1.classList.contains('slide-in-right') && slideTop < animationPoint) {
    // Додайте клас з анімацією для з'явлення блоку зправа
    slideBlock1.classList.add('slide-in-right');
  }

  if (!slideBlock2.classList.contains('slide-in-left') && slideTop < animationPoint) {
    // Додайте клас з анімацією для з'явлення блоку зправа
    slideBlock2.classList.add('slide-in-left');
  }
}

window.addEventListener('scroll', slideIn);
