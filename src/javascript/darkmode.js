const toggle = document.getElementById("dark");
let theme = window.localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true; 
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    window.localStorage.setItem("theme", "dark");
  } else {
    window.localStorage.setItem("theme", "light");
  }
});
