function showPage(current, next) {

  document.getElementById(current).style.display = "none";

  const nextPage =
    document.getElementById(next);

  nextPage.style.display = "flex";

  nextPage.classList.remove("fade");

  void nextPage.offsetWidth;

  nextPage.classList.add("fade");

  window.scrollTo(0, 0);
}


function openLetter() {

  const envelope =
    document.querySelector(".envelope");

  envelope.classList.add("open");

  setTimeout(() => {

    showPage(
      "opening",
      "birthday"
    );

  }, 900);
}


function nextPage() {

  showPage(
    "birthday",
    "memory"
  );

}


function letterPage() {

  showPage(
    "memory",
    "letterPage"
  );

}


function endingPage() {

  showPage(
    "letterPage",
    "ending"
  );

}