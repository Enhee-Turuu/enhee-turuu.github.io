// 구현 계획**
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

const visibleSections = sectionIds.map(() => false);

// 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰해야한다.

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne; //flag 변수**
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.99;
  });
  console.log(visibleSections);
  console.log("무조건 라스트 섹션!!", selectLastOne);

  //3항 연산자 코드 작성**
  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirsrIntersecting(visibleSections);
  console.log(sectionIds[navIndex]);
}

function findFirsrIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션:
// - 다수의 섹션이 동시에 보여진다면, 가장 첮번째 섹션을 선택
// - 마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택

// const options = {
//   rootMargin: "-200px",
//   threshold: [0, 0.25, 0.5],
// };
// const observer = new IntersectionObserver(callback, options);
// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => observer.observe(box));
// // callback 함수 정의:function이라는 함수 정의를 사용해서 callback 함수는 만들어 줘도 괜찮다**
// function callback(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("active");
//     } else {
//       entry.target.classList.remove("active");
//     }
//     console.log(entry.target);
//     console.log(entry.isIntersecting);
//     console.log(entry.intersectionRatio);
//   });
// }
