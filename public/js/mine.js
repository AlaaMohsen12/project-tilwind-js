function allMouseMove() {
  let a = document.getElementById("bla");
  document.addEventListener("mousemove", (even) => {
    a.style.left = even.pageX + "px";
    a.style.top = even.pageY + "px";
  });
}
allMouseMove();

function allNavigate() {
  let icon = document.querySelector(".icon");
  let mineNavs = document.querySelector(".mine-navs");
  icon.addEventListener("click", function () {
    mineNavs.classList.toggle("active");
  });
}
allNavigate();

// start slider gallery

// end slider gallery

function allTime() {
  let times = document.getElementById("time");
  let current = new Date();
  times.innerHTML = current.getFullYear();
}
allTime();
