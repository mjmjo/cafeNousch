
const images = document.querySelectorAll('.eiffel');
let i = 0;

function changeImage() {
  images[i].classList.remove('active');
  i = (i + 1) % images.length;
  images[i].classList.add('active');
}

// هر ۲.۵ ثانیه عوض میشه
setInterval(changeImage, 3000);
const buttons = document.querySelectorAll('.lang-btn');
const items = document.querySelectorAll('.translate');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const lang = button.dataset.lang;

    items.forEach(item => {
      item.innerText = item.dataset[lang];
    });

    if (lang === "fa") {
      document.body.style.direction = "rtl";
      document.body.style.textAlign = "left";
    } else {
      document.body.style.direction = "ltr";
      document.body.style.textAlign = "left";
    }
  });
});
const storySlides = document.querySelectorAll('.story-slide');
let storyIndex = 0;

function changeStorySlide() {
  storySlides[storyIndex].classList.remove('active');

  storyIndex = (storyIndex + 1) % storySlides.length;

  storySlides[storyIndex].classList.add('active');
}

setInterval(changeStorySlide, 3000);

const btn = document.getElementById("loginBtn");
const modal = document.getElementById("modal");
const close = document.getElementById("closeBtn");

// باز کردن
btn.onclick = () => {
  modal.style.display = "flex";
};

// بستن
close.onclick = () => {
  modal.style.display = "none";
};

// بستن با کلیک بیرون
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
function enterSite() {
  const lang = document.getElementById("language").value;

  if (!lang) {
    alert("Please select a language");
    return;
  }

  // ذخیره زبان
  localStorage.setItem("lang", lang);

  // بستن صفحه
  document.getElementById("welcomeScreen").style.display = "none";

  // اینجا میتونی تابع تغییر زبانتو صدا بزنی
  if (typeof changeLang === "function") {
    changeLang(lang);
  }
}
window.onload = () => {
  const visited = localStorage.getItem("visited");

  if (visited) {
    document.getElementById("welcomeScreen").style.display = "none";
  }
};
function enterSite() {
  const lang = document.getElementById("language").value;

  if (!lang) {
    alert("Please select a language");
    return;
  }

  localStorage.setItem("lang", lang);
  localStorage.setItem("visited", "true"); // 👈 مهم

  document.getElementById("welcomeScreen").style.display = "none";
}

