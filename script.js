function openLetter() {
  const envelope = document.querySelector(".envelope");

  envelope.classList.add("open");

  setTimeout(() => {
    document.querySelector(".opening").style.display = "none";

    const birthday = document.querySelector(".birthday");

    birthday.style.display = "flex";
    birthday.classList.add("fade");
  }, 900);
}


function nextPage() {
  alert("There's more coming for you, Zavier ♡");
}