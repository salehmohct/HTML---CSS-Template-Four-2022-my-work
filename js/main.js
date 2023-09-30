let allLi = document.querySelectorAll(".main-menu ul li");
allLi.forEach((element) => {
  element.onclick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    window.open(`${element.children[1].innerHTML}.html`, `_self`);
  };
});

// /HTMl/Dashboard.html
function addActive(e, array) {
  array.forEach((element) => {
    element.classList.remove("active");
  });
  e.classList.add("active");
}

let progressSpan = document.querySelectorAll(".progressspan");
let progressSection = document.querySelector(".second-section .left");
let SecondSectionNo = document.querySelectorAll(
  ".second-section .right .box .content h2"
);
if (progressSection) {
  window.onscroll = function () {
    //Skills offset top
    let progressOffeset = progressSection.offsetTop;
    //Skills outer hight تقوم بارجاع ارتفاع العنصر بما فيه البادنق تبع العنصر ولو بدنا المارقن بنعين قيمته بترو
    let progressOuterHeight = progressSection.offsetHeight;
    //window height
    let windowHeight = this.innerHeight;
    //window skroll top
    let windowSkroll = this.pageYOffset;
    if (windowSkroll > progressOffeset + progressOuterHeight - windowHeight) {
      progressSpan.forEach((element) => {
        element.style.width = element.dataset.progress;
      });
      if (!started) {
        SecondSectionNo.forEach((element) => {
          startCount(element);
        });
      }
      started = true;
    }
  };
}

let started = false;
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
    //200/goal علشان يعطيني معدل زيادة ثابت للارقام الثلاثة
  }, 2000 / goal);
}

let socialButton = document.querySelectorAll(".lastOne");
socialButton.forEach((element) => {
  element.onclick = function () {
    window.open(`https://${element.dataset.site}/`);
  };
});

let toggleMenu = document.querySelector(".box .toggle-switch");
if (toggleMenu) {
  let toggleMenuBox = toggleMenu.parentNode;
  toggleMenu.onclick = function () {
    if (toggleMenuBox.classList.contains("true")) {
      toggleMenuBox.classList.remove("true");
      toggleMenuBox.classList.add("false");
    } else {
      toggleMenuBox.classList.remove("false");
      toggleMenuBox.classList.add("true");
    }
  };
}
let toggleMenu2 = document.querySelector(".content .toggle-switch");
if (toggleMenu2) {
  let toggleMenuBox2 = toggleMenu2.parentNode;
  toggleMenu2.onclick = function () {
    if (toggleMenuBox2.classList.contains("true")) {
      toggleMenuBox2.classList.remove("true");
      toggleMenuBox2.classList.add("false");
    } else {
      toggleMenuBox2.classList.remove("false");
      toggleMenuBox2.classList.add("true");
    }
  };
}

let profileToggleMenu = document.querySelectorAll(
  ".first-section .information .content .box .toggle-switch"
);

if (profileToggleMenu) {
  profileToggleMenu.forEach((element) => {
    let toggleMenuBox2 = element.parentNode;
    element.onclick = function () {
      if (toggleMenuBox2.classList.contains("true")) {
        toggleMenuBox2.classList.remove("true");
        toggleMenuBox2.classList.add("false");
      } else {
        toggleMenuBox2.classList.remove("false");
        toggleMenuBox2.classList.add("true");
      }
    };
  });
}
