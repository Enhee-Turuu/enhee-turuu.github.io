// Header에 페이지 아래로 스크롤시 다크 스타일링 적용(추가 & 삭제)
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
document.addEventListener("scroll", () => {
  // 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!**
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 opacity 1->0 적용.
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
