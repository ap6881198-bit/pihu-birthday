let currentPage = 0;
const correctPassword = "pihu";

function checkPassword() {
  const input = document.getElementById("passInput").value.toLowerCase();
  if (input === correctPassword) {
    goToPage(1);
  } else {
    document.getElementById("wrongPass").innerText = "Wrong password 😝";
  }
}

function nextPage() {
  goToPage(currentPage + 1);
}

function goToPage(num) {
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage = num;
  document.getElementById("page" + currentPage).classList.add("active");
}
