document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  if (helloBtn) {
    helloBtn.addEventListener("click", () => {
      alert("Thanks for visiting! Feel free to reach out.");
    });
  }
});
